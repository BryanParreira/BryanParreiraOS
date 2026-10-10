import React from 'react';
import { useNavigate } from 'react-router';
import software from '../../assets/pictures/projects/software.gif';
import { APPS, AppProject } from './projects/apps';
import useLatestRelease, {
    detectPlatform,
    platformLabel,
} from '../../hooks/useLatestRelease';

export interface ProjectsProps {}

const visitorPlatform = detectPlatform();

const AppCard: React.FC<{ app: AppProject }> = ({ app }) => {
    const navigate = useNavigate();
    const release = useLatestRelease(app.repo);

    const openDetails = () => navigate(`/projects/${app.slug}`);

    // Straight to the installer for the visitor's system when there is one
    let downloadUrl = `https://github.com/${app.repo}/releases/latest`;
    let downloadLabel = 'Download';
    if (release.status === 'ready') {
        const asset = release.release.assets.find(
            (a) => a.platform === visitorPlatform
        );
        if (asset) {
            downloadUrl = asset.url;
            downloadLabel = `Download for ${asset.label}`;
        }
    }

    return (
        <div
            className="big-button-container app-card"
            onClick={openDetails}
            role="link"
        >
            <div style={styles.cardHeader}>
                <img src={app.icon} alt="" style={styles.appIcon} />
                <div style={styles.cardTitle}>
                    <h2>{app.name}</h2>
                    <p style={styles.version}>
                        {release.status === 'ready'
                            ? `v${release.release.version}`
                            : app.price}
                    </p>
                </div>
            </div>
            <h4 style={styles.tagline}>{app.tagline}</h4>
            <p style={styles.platforms}>
                {app.platforms.map(platformLabel).join(' · ')}
            </p>
            <div style={styles.spacer} />
            <div style={styles.cardButtons}>
                <a
                    className="site-button download-button"
                    href={downloadUrl}
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                >
                    {downloadLabel}
                </a>
                <button
                    className="site-button"
                    onClick={(e) => {
                        e.stopPropagation();
                        openDetails();
                    }}
                >
                    Details
                </button>
            </div>
        </div>
    );
};

interface ProjectBoxProps {
    title: string;
    subtitle: string;
    route: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ title, subtitle, route }) => {
    const navigation = useNavigate();

    return (
        <div
            onClick={() => navigation(`/projects/${route}`)}
            className="big-button-container project-box"
            role="link"
        >
            <img src={software} style={styles.projectLinkImage} alt="" />
            <div style={styles.projectText}>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
    );
};

const Projects: React.FC<ProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Projects</h1>
            <h3>& Hobbies</h3>
            <br />
            <p>
                Here's what I've been building. The apps below are free to
                download and run entirely on your own machine, no account
                needed. Click any of them to see screenshots, how it works and
                every download option.
            </p>
            <br />
            <h2>Apps</h2>
            <br />
            <div className="app-grid">
                {APPS.map((app) => (
                    <AppCard key={app.slug} app={app} />
                ))}
            </div>
            <br />
            <h2>Other Work</h2>
            <br />
            <div style={styles.projectLinksContainer}>
                <ProjectBox
                    title="Automations"
                    subtitle="Business Process Automation"
                    route="Automations"
                />
                <ProjectBox
                    title="Valerium"
                    subtitle="Open Finance Business Management Platform"
                    route="Valerium"
                />
                <ProjectBox
                    title="ProntuSMART"
                    subtitle="Digital Health Records System"
                    route="ProntuSMART"
                />
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    cardHeader: {
        alignItems: 'center',
        marginBottom: 12,
    },
    appIcon: {
        width: 64,
        height: 64,
        marginRight: 16,
        imageRendering: 'auto',
    },
    cardTitle: {
        flexDirection: 'column',
    },
    version: {
        fontSize: 15,
        color: '#555',
    },
    tagline: {
        marginBottom: 4,
    },
    platforms: {
        fontSize: 15,
        color: '#555',
    },
    spacer: {
        flex: 1,
        minHeight: 16,
    },
    cardButtons: {
        flexWrap: 'wrap',
        gap: 8,
    },
    projectLinksContainer: {
        flexDirection: 'column',
        width: '100%',
    },
    projectText: {
        justifyContent: 'center',
        flexDirection: 'column',
        minWidth: 0,
    },
    projectLinkImage: {
        width: 56,
        height: 56,
        marginRight: 24,
        flexShrink: 0,
    },
};

export default Projects;
