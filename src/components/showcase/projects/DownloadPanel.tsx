import React, { useState } from 'react';
import { AppProject } from './apps';
import useLatestRelease, {
    detectPlatform,
    formatDate,
    formatSize,
    platformLabel,
    ReleaseAsset,
} from '../../../hooks/useLatestRelease';

export interface DownloadPanelProps {
    app: AppProject;
}

const visitorPlatform = detectPlatform();

const DownloadPanel: React.FC<DownloadPanelProps> = ({ app }) => {
    const release = useLatestRelease(app.repo);
    const latestUrl = `https://github.com/${app.repo}/releases/latest`;

    const isPreview = (asset: ReleaseAsset) =>
        !!app.previewPlatforms?.includes(asset.platform);

    const renderAssets = () => {
        if (release.status === 'loading') {
            return (
                <div style={styles.column}>
                    <p className="loading">Checking for the latest release</p>
                    <br />
                    <a
                        className="site-button download-button"
                        href={latestUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Download from GitHub
                    </a>
                </div>
            );
        }

        if (release.status === 'error') {
            return (
                <div style={styles.column}>
                    <a
                        className="site-button download-button"
                        href={latestUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Download {app.name} from GitHub
                    </a>
                </div>
            );
        }

        const { assets } = release.release;
        // Visitor's own system first, so the big button is the right one
        const recommended =
            assets.find((asset) => asset.platform === visitorPlatform) ||
            assets[0];
        const others = assets.filter((asset) => asset !== recommended);

        return (
            <div style={styles.column}>
                <a
                    className="site-button download-button"
                    href={recommended.url}
                    rel="noreferrer"
                >
                    Download for {recommended.label}
                    {isPreview(recommended) && ' (Preview)'}
                </a>
                <p style={styles.assetDetail}>
                    {recommended.detail} · {formatSize(recommended.size)}
                </p>
                {others.length > 0 && (
                    <div style={styles.otherDownloads}>
                        <p>
                            <b>Other downloads:</b>
                        </p>
                        {others.map((asset) => (
                            <p key={asset.name} style={styles.otherAsset}>
                                <a href={asset.url} rel="noreferrer">
                                    {asset.label}
                                    {isPreview(asset) && ' (Preview)'}
                                </a>
                                <span style={styles.muted}>
                                    {' '}
                                    · {asset.detail} · {formatSize(asset.size)}
                                </span>
                            </p>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    const supportsVisitor =
        visitorPlatform !== null &&
        visitorPlatform !== 'mobile' &&
        app.platforms.includes(visitorPlatform);

    return (
        <div className="download-panel">
            <div style={styles.header}>
                <img src={app.icon} alt="" style={styles.icon} />
                <div style={styles.headerText}>
                    <h3>Download {app.name}</h3>
                    <p style={styles.muted}>
                        {release.status === 'ready'
                            ? `Version ${release.release.version} · ${formatDate(
                                  release.release.publishedAt
                              )} · ${app.price}`
                            : app.price}
                    </p>
                </div>
            </div>
            {visitorPlatform === 'mobile' && (
                <p style={styles.notice}>
                    {app.name} is a desktop app. Open this page on your
                    computer to install it.
                </p>
            )}
            {visitorPlatform !== 'mobile' &&
                visitorPlatform !== null &&
                !supportsVisitor && (
                    <p style={styles.notice}>
                        {app.name} isn't available for{' '}
                        {platformLabel(visitorPlatform)} yet. It runs on{' '}
                        {app.platforms.map(platformLabel).join(', ')}.
                    </p>
                )}
            {renderAssets()}
            {app.homebrew && <HomebrewCommand command={app.homebrew} />}
            <p style={styles.requirements}>
                <b>Requirements:</b> {app.requirements}
            </p>
            <p style={styles.links}>
                {release.status === 'ready' && (
                    <>
                        <a
                            href={release.release.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Release notes
                        </a>
                        {' · '}
                    </>
                )}
                <a
                    href={`https://github.com/${app.repo}/releases`}
                    target="_blank"
                    rel="noreferrer"
                >
                    All releases
                </a>
                {' · '}
                <a
                    href={`https://github.com/${app.repo}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    Source on GitHub
                </a>
            </p>
        </div>
    );
};

const HomebrewCommand: React.FC<{ command: string }> = ({ command }) => {
    const [copied, setCopied] = useState(false);

    const copy = () => {
        try {
            navigator.clipboard.writeText(command).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            });
        } catch (e) {
            // No clipboard access; the command can still be selected by hand
        }
    };

    return (
        <div style={styles.homebrew}>
            <p>
                <b>Or with Homebrew:</b>
            </p>
            <div style={styles.commandRow}>
                <code className="command-line">{command}</code>
                <button className="site-button" onClick={copy}>
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        alignItems: 'center',
        marginBottom: 16,
    },
    headerText: {
        flexDirection: 'column',
    },
    icon: {
        width: 56,
        height: 56,
        marginRight: 16,
        imageRendering: 'auto',
    },
    column: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    assetDetail: {
        fontSize: 15,
        marginTop: 6,
        color: '#444',
    },
    otherDownloads: {
        flexDirection: 'column',
        marginTop: 16,
    },
    otherAsset: {
        marginTop: 4,
    },
    muted: {
        color: '#555',
        fontSize: 15,
    },
    notice: {
        backgroundColor: '#fbffc4',
        border: '1px dashed #888',
        padding: 8,
        marginBottom: 16,
    },
    homebrew: {
        flexDirection: 'column',
        marginTop: 16,
    },
    commandRow: {
        alignItems: 'stretch',
        marginTop: 6,
        gap: 8,
        flexWrap: 'wrap',
    },
    requirements: {
        marginTop: 16,
        fontSize: 16,
    },
    links: {
        marginTop: 8,
        fontSize: 16,
    },
};

export default DownloadPanel;
