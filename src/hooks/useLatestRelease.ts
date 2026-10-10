import { useEffect, useState } from 'react';
import { Platform } from '../components/showcase/projects/apps';

export interface ReleaseAsset {
    name: string;
    url: string;
    size: number;
    platform: Platform;
    label: string;
    detail: string;
}

export interface Release {
    version: string;
    url: string;
    publishedAt: string;
    assets: ReleaseAsset[];
}

export type ReleaseState =
    | { status: 'loading' }
    | { status: 'error' }
    | { status: 'ready'; release: Release };

const CACHE_TTL_MS = 30 * 60 * 1000;

// One request per repo per page load, shared by every component asking
const pending: { [repo: string]: Promise<Release | null> } = {};

const PLATFORM_LABELS: { [key in Platform]: string } = {
    mac: 'macOS',
    windows: 'Windows',
    linux: 'Linux',
};

export const platformLabel = (platform: Platform) => PLATFORM_LABELS[platform];

// Turns a release file into a download button, or null for files that
// aren't installers (update feeds, signatures, updater archives)
const classifyAsset = (name: string) => {
    const lower = name.toLowerCase();
    const isArm = /aarch64|arm64/.test(lower);
    if (lower.endsWith('.dmg')) {
        return {
            platform: 'mac' as Platform,
            detail: isArm ? 'Apple silicon · .dmg' : '.dmg',
        };
    }
    if (lower.endsWith('.exe') || lower.endsWith('.msi')) {
        const ext = lower.endsWith('.exe') ? '.exe' : '.msi';
        return {
            platform: 'windows' as Platform,
            detail: `${isArm ? 'ARM64' : '64-bit'} · ${ext} installer`,
        };
    }
    if (lower.endsWith('.appimage')) {
        return { platform: 'linux' as Platform, detail: 'AppImage, any distro' };
    }
    if (lower.endsWith('.deb')) {
        return { platform: 'linux' as Platform, detail: '.deb, Ubuntu & Debian' };
    }
    if (lower.endsWith('.rpm')) {
        return { platform: 'linux' as Platform, detail: '.rpm, Fedora & RHEL' };
    }
    return null;
};

const parseRelease = (raw: any): Release | null => {
    const assets: ReleaseAsset[] = [];
    (raw.assets || []).forEach((asset: any) => {
        const kind = classifyAsset(asset.name);
        if (!kind) return;
        assets.push({
            name: asset.name,
            url: asset.browser_download_url,
            size: asset.size,
            platform: kind.platform,
            label: PLATFORM_LABELS[kind.platform],
            detail: kind.detail,
        });
    });
    if (assets.length === 0) return null;
    return {
        // Tags look like v1.7.0 or desktop_v1.0.27
        version: String(raw.tag_name).replace(/^[^\d]*/, ''),
        url: raw.html_url,
        publishedAt: raw.published_at,
        assets,
    };
};

// Kept across visits so returning visitors don't spend GitHub's 60
// requests an hour; an expired copy still beats nothing if GitHub says no
const readCache = (
    repo: string
): { release: Release; fresh: boolean } | null => {
    try {
        const cached = localStorage.getItem(`release:${repo}`);
        if (!cached) return null;
        const { savedAt, release } = JSON.parse(cached);
        return { release, fresh: Date.now() - savedAt < CACHE_TTL_MS };
    } catch (e) {
        return null;
    }
};

const writeCache = (repo: string, release: Release) => {
    try {
        localStorage.setItem(
            `release:${repo}`,
            JSON.stringify({ savedAt: Date.now(), release })
        );
    } catch (e) {
        // Storage can be full or blocked; the next visit just refetches
    }
};

// The newest published release that has an installer attached. Some repos
// also publish releases for model files, so "latest" alone isn't enough.
const fetchLatestRelease = (repo: string): Promise<Release | null> => {
    if (!pending[repo]) {
        pending[repo] = fetch(
            `https://api.github.com/repos/${repo}/releases?per_page=10`,
            { headers: { Accept: 'application/vnd.github+json' } }
        )
            .then((res) => {
                if (!res.ok) throw new Error(`GitHub ${res.status}`);
                return res.json();
            })
            .then((releases: any[]) => {
                for (const raw of releases) {
                    if (raw.draft || raw.prerelease) continue;
                    const release = parseRelease(raw);
                    if (release) {
                        writeCache(repo, release);
                        return release;
                    }
                }
                return null;
            })
            .catch(() => {
                // Let a later mount try again
                delete pending[repo];
                return readCache(repo)?.release || null;
            });
    }
    return pending[repo];
};

export default function useLatestRelease(repo: string): ReleaseState {
    const [state, setState] = useState<ReleaseState>(() => {
        const cached = readCache(repo);
        return cached
            ? { status: 'ready', release: cached.release }
            : { status: 'loading' };
    });

    useEffect(() => {
        if (readCache(repo)?.fresh) return;
        let isMounted = true;
        fetchLatestRelease(repo).then((release) => {
            if (!isMounted) return;
            setState(
                release ? { status: 'ready', release } : { status: 'error' }
            );
        });
        return () => {
            isMounted = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [repo]);

    return state;
}

export type VisitorPlatform = Platform | 'mobile' | null;

export const detectPlatform = (): VisitorPlatform => {
    const ua = navigator.userAgent;
    if (/iPhone|iPad|iPod|Android/i.test(ua)) return 'mobile';
    // iPadOS reports itself as a Mac; touch support tells them apart
    if (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1) return 'mobile';
    if (/Macintosh|Mac OS X/i.test(ua)) return 'mac';
    if (/Windows/i.test(ua)) return 'windows';
    if (/CrOS/i.test(ua)) return null;
    if (/Linux|X11/i.test(ua)) return 'linux';
    return null;
};

export const formatSize = (bytes: number) => {
    const mb = bytes / (1024 * 1024);
    return mb >= 100 ? `${Math.round(mb)} MB` : `${mb.toFixed(1)} MB`;
};

export const formatDate = (iso: string) => {
    const date = new Date(iso);
    if (isNaN(date.getTime())) return '';
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
};
