import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import ResumeDownload from '../ResumeDownload';
import DownloadPanel from './DownloadPanel';
import { APPS, AppProject, AppScreenshot } from './apps';
import { platformLabel } from '../../../hooks/useLatestRelease';

export interface AppProjectPageProps {
    app: AppProject;
}

const Screenshot: React.FC<{ shot: AppScreenshot; figure: number }> = ({
    shot,
    figure,
}) => (
    <div className="captioned-image">
        <a href={shot.src} target="_blank" rel="noreferrer">
            <img src={shot.src} alt={shot.alt} className="app-screenshot" />
        </a>
        <div style={styles.caption}>
            <sub>
                <b>Figure {figure}:</b> {shot.caption}
            </sub>
        </div>
    </div>
);

const AppProjectPage: React.FC<AppProjectPageProps> = ({ app }) => {
    const navigate = useNavigate();
    const pageRef = useRef<HTMLDivElement>(null);

    // Each project scrolls on its own; start at the top when switching
    useEffect(() => {
        pageRef.current?.scrollTo(0, 0);
    }, [app.slug]);

    const index = APPS.indexOf(app);
    const prev = APPS[(index - 1 + APPS.length) % APPS.length];
    const next = APPS[(index + 1) % APPS.length];

    const [heroShot, ...moreShots] = app.screenshots;

    return (
        <div className="site-page-content" ref={pageRef}>
            <div className="app-hero">
                <img src={app.icon} alt="" className="app-hero-icon" />
                <div style={styles.heroText}>
                    <h1>{app.name}</h1>
                    <h3>{app.tagline}</h3>
                    <div style={styles.badges}>
                        {app.platforms.map((platform) => (
                            <span key={platform} className="platform-badge">
                                {platformLabel(platform)}
                                {app.previewPlatforms?.includes(platform) &&
                                    ' (preview)'}
                            </span>
                        ))}
                        <span className="platform-badge">{app.price}</span>
                    </div>
                </div>
            </div>
            <br />
            <p>{app.intro}</p>
            <br />
            <DownloadPanel app={app} />
            <div className="text-block">
                <h2>Overview</h2>
                <br />
                {app.overview.map((paragraph, i) => (
                    <React.Fragment key={i}>
                        <p>{paragraph}</p>
                        <br />
                    </React.Fragment>
                ))}
                {heroShot && <Screenshot shot={heroShot} figure={1} />}
                <h3>Key Features:</h3>
                <br />
                <div className="feature-grid">
                    {app.features.map((feature) => (
                        <div key={feature.title} className="feature-card">
                            <h4>{feature.title}</h4>
                            <p>{feature.body}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-block">
                <h2>Technical Architecture</h2>
                <br />
                {app.architecture.map((paragraph, i) => (
                    <React.Fragment key={i}>
                        <p>{paragraph}</p>
                        <br />
                    </React.Fragment>
                ))}
                {moreShots.map((shot, i) => (
                    <Screenshot key={shot.src} shot={shot} figure={i + 2} />
                ))}
                <h3>Technology Stack:</h3>
                <ul>
                    {app.stack.map((item) => (
                        <li key={item.label}>
                            <p>
                                <b>{item.label}:</b> {item.value}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="text-block">
                <h2>Install</h2>
                <br />
                <ol>
                    {app.installSteps.map((step) => (
                        <li key={step}>
                            <p>{step}</p>
                        </li>
                    ))}
                </ol>
                {app.notes?.map((note) => (
                    <React.Fragment key={note}>
                        <p style={styles.note}>
                            <b>Note:</b> {note}
                        </p>
                        <br />
                    </React.Fragment>
                ))}
            </div>
            <div className="project-pager">
                <button
                    className="site-button"
                    onClick={() => navigate(`/projects/${prev.slug}`)}
                >
                    ‹ {prev.name}
                </button>
                <button
                    className="site-button"
                    onClick={() => navigate('/projects')}
                >
                    All Projects
                </button>
                <button
                    className="site-button"
                    onClick={() => navigate(`/projects/${next.slug}`)}
                >
                    {next.name} ›
                </button>
            </div>
            <br />
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    heroText: {
        flexDirection: 'column',
        minWidth: 0,
    },
    badges: {
        flexWrap: 'wrap',
        gap: 8,
        marginTop: 12,
    },
    caption: {
        width: '80%',
        justifyContent: 'center',
    },
    note: {
        fontSize: 16,
    },
};

export default AppProjectPage;
