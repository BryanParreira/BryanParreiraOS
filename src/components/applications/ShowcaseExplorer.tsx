import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../showcase/Home';
import About from '../showcase/About';
import Window from '../os/Window';
import Experience from '../showcase/Experience';
import Projects from '../showcase/Projects';
import Contact from '../showcase/Contact';
import Automations from '../showcase/projects/Automations';
import AppProjectPage from '../showcase/projects/AppProjectPage';
import { APPS } from '../showcase/projects/apps';
import Valerium from '../showcase/projects/Valerium';
import ProntuSMART from '../showcase/projects/ProntuSMART';
import VerticalNavbar from '../showcase/VerticalNavbar';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';

export interface ShowcaseExplorerProps extends WindowAppProps {}

// Narrower than this, the side navbar turns into a menu above the page
const COMPACT_WIDTH = 820;

const ShowcaseExplorer: React.FC<ShowcaseExplorerProps> = (props) => {
    const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });
    const pageRef = useRef<HTMLDivElement>(null);
    const [compact, setCompact] = useState(false);

    // Follows the window's own width, so a narrow window on a big screen
    // gets the same layout as a phone
    useEffect(() => {
        const page = pageRef.current;
        if (!page) return;
        const update = () => setCompact(page.clientWidth < COMPACT_WIDTH);
        update();
        if (typeof ResizeObserver === 'undefined') {
            window.addEventListener('resize', update);
            return () => window.removeEventListener('resize', update);
        }
        const observer = new ResizeObserver(update);
        observer.observe(page);
        return () => observer.disconnect();
    }, []);

    return (
        <Window
            top={24}
            left={56}
            width={initWidth}
            height={initHeight}
            windowTitle="Bryan Bernardo Parreira - Showcase 2026"
            windowBarIcon="windowExplorerIcon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2026 Bryan Bernardo Parreira'}
        >
            <Router>
                <div
                    className={compact ? 'site-page compact' : 'site-page'}
                    ref={pageRef}
                >
                    <VerticalNavbar compact={compact} />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route
                            path="/projects/Automations"
                            element={<Automations />}
                        />
                        {APPS.map((app) => (
                            <Route
                                key={app.slug}
                                path={`/projects/${app.slug}`}
                                element={<AppProjectPage app={app} />}
                            />
                        ))}
                        <Route
                            path="/projects/Valerium"
                            element={<Valerium />}
                        />
                        <Route
                            path="/projects/ProntuSMART"
                            element={<ProntuSMART />}
                        />
                    </Routes>
                </div>
            </Router>
        </Window>
    );
};

export default ShowcaseExplorer;
