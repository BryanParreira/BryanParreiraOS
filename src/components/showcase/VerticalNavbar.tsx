import React, { useEffect, useState } from 'react';
import { Link } from '../general';
import { useLocation } from 'react-router';
import { APPS } from './projects/apps';

export interface VerticalNavbarProps {
    // Narrow window: show a header with a menu instead of the side column
    compact?: boolean;
}

const PROJECT_LINKS = [
    ...APPS.map((app) => app.slug),
    'Automations',
    'Valerium',
    'ProntuSMART',
];

const VerticalNavbar: React.FC<VerticalNavbarProps> = ({ compact }) => {
    const location = useLocation();
    const [projectsExpanded, setProjectsExpanded] = useState(false);
    const [isHome, setIsHome] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    useEffect(() => {
        if (location.pathname.includes('/projects')) {
            setProjectsExpanded(true);
        } else {
            setProjectsExpanded(false);
        }
        if (location.pathname === '/') {
            setIsHome(true);
        } else {
            setIsHome(false);
        }
        setMenuOpen(false);
        return () => {};
    }, [location.pathname]);

    const links = (
        <div style={compact ? styles.compactLinks : styles.links}>
            <Link containerStyle={styles.link} to="" text="HOME" />
            <Link containerStyle={styles.link} to="about" text="ABOUT" />
            <Link
                containerStyle={styles.link}
                to="experience"
                text="EXPERIENCE"
            />
            <Link
                containerStyle={Object.assign(
                    {},
                    styles.link,
                    projectsExpanded && styles.expandedLink
                )}
                to="projects"
                text="PROJECTS"
            />
            {
                // if current path contains projects
                projectsExpanded && (
                    <div style={styles.insetLinks}>
                        {PROJECT_LINKS.map((slug) => (
                            <Link
                                key={slug}
                                containerStyle={styles.insetLink}
                                to={`projects/${slug}`}
                                text={slug}
                            />
                        ))}
                    </div>
                )
            }
            <Link containerStyle={styles.link} to="contact" text="CONTACT" />
        </div>
    );

    if (isHome) return <></>;

    if (compact) {
        return (
            <div style={styles.compactNavbar}>
                <div style={styles.compactHeader}>
                    <div style={styles.compactTitle}>
                        <h1 style={styles.compactHeaderText}>
                            Bryan Parreira
                        </h1>
                        <h4>Showcase '26</h4>
                    </div>
                    <button
                        className="site-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? 'Close' : 'Menu'}
                    </button>
                </div>
                {menuOpen && links}
            </div>
        );
    }

    return (
        <div style={styles.navbar}>
            <div style={styles.header}>
                <h1 style={styles.headerText}>Bryan</h1>
                <h1 style={styles.headerText}>Parreira</h1>
                <h3 style={styles.headerShowcase}>Showcase '26</h3>
            </div>
            {links}
            <div style={styles.spacer} />
        </div>
    );
};

const styles: StyleSheetCSS = {
    navbar: {
        width: 300,
        height: '100%',
        flexDirection: 'column',
        padding: 48,
        boxSizing: 'border-box',
        position: 'fixed',
        overflowX: 'hidden',
        overflowY: 'auto',
    },
    header: {
        flexDirection: 'column',
        marginBottom: 48,
    },
    headerText: {
        fontSize: 38,
        lineHeight: 1,
    },
    headerShowcase: {
        marginTop: 12,
    },
    link: {
        marginBottom: 28,
    },
    expandedLink: {
        marginBottom: 16,
    },
    insetLinks: {
        flexDirection: 'column',
        marginLeft: 32,
        marginBottom: 16,
    },
    insetLink: {
        marginBottom: 8,
    },
    links: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
    },
    compactNavbar: {
        flexDirection: 'column',
        flexShrink: 0,
        borderBottom: '2px solid black',
        padding: '12px 16px',
        maxHeight: '70%',
        overflowY: 'auto',
    },
    compactHeader: {
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
    },
    compactTitle: {
        flexDirection: 'column',
        minWidth: 0,
    },
    compactHeaderText: {
        fontSize: 30,
        lineHeight: 1,
    },
    compactLinks: {
        flexDirection: 'column',
        marginTop: 16,
    },
    spacer: {
        flex: 1,
    },
};

export default VerticalNavbar;
