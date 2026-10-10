import React from 'react';
import { useNavigate } from 'react-router';
import software from '../../assets/pictures/projects/software.gif';
import valeriumImage from '../../assets/pictures/projects/software/Valerium2.png';
import prontusmartImage from '../../assets/pictures/projects/software/Prontusmart1.png';
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

interface WorkCardProps {
    title: string;
    tagline: string;
    meta: string;
    route: string;
    image?: string;
    site?: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
    title,
    tagline,
    meta,
    route,
    image,
    site,
}) => {
    const navigate = useNavigate();
    const openDetails = () => navigate(`/projects/${route}`);

    return (
        <div
            className="big-button-container app-card"
            onClick={openDetails}
            role="link"
        >
            {image ? (
                <img src={image} alt="" className="work-card-image" />
            ) : (
                <img src={software} alt="" style={styles.workIcon} />
            )}
            <h2>{title}</h2>
            <p style={styles.version}>{meta}</p>
            <h4 style={styles.workTagline}>{tagline}</h4>
            <div style={styles.spacer} />
            <div style={styles.cardButtons}>
                {site && (
                    <a
                        className="site-button download-button"
                        href={site}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Visit Site
                    </a>
                )}
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

const Projects: React.FC<ProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Projects</h1>
            <h3>& Hobbies</h3>
            <br />
            <p>
                Here's what I've been building: my own desktop apps, the
                platforms I help build at Grovic Data, and automation work.
                Click any project to see screenshots and how it works.
            </p>
            <h4 className="section-label">Apps</h4>
            <p style={styles.sectionIntro}>
                Free to download. Each one runs entirely on your own machine,
                no account needed.
            </p>
            <div className="app-grid">
                {APPS.map((app) => (
                    <AppCard key={app.slug} app={app} />
                ))}
            </div>
            <h4 className="section-label">Grovic Data Products</h4>
            <p style={styles.sectionIntro}>
                Platforms I build with my team at Grovic Data, where I'm a
                co-founder.
            </p>
            <div className="app-grid">
                <WorkCard
                    title="Valerium"
                    meta="Web platform · Developer & Security"
                    tagline="Open Finance Business Management Platform"
                    route="Valerium"
                    image={valeriumImage}
                    site="https://valerium.grovicdata.com/"
                />
                <WorkCard
                    title="ProntuSMART"
                    meta="Web platform · Developer & Security"
                    tagline="Digital Health Records System"
                    route="ProntuSMART"
                    image={prontusmartImage}
                    site="https://prontusmart.grovicdata.com"
                />
            </div>
            <h4 className="section-label">Automation</h4>
            <p style={styles.sectionIntro}>
                Workflows that take repetitive business work off people's
                plates.
            </p>
            <div className="app-grid">
                <WorkCard
                    title="Automations"
                    meta="n8n workflows"
                    tagline="Business Process Automation"
                    route="Automations"
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
    sectionIntro: {
        marginBottom: 16,
    },
    workIcon: {
        width: 56,
        height: 56,
        marginBottom: 12,
    },
    workTagline: {
        marginTop: 8,
    },
};

export default Projects;
