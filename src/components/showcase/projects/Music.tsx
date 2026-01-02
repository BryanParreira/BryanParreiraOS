import React from 'react';
import ResumeDownload from '../ResumeDownload';
import nexusproj from '../../../assets/pictures/projects/software/nexusproj.png';
import nexusdash from '../../../assets/pictures/projects/software/nexusdash.png';
import nexusteam from '../../../assets/pictures/projects/software/nexusteam.png';

export interface NexusProjectsProps {}

const NexusProjects: React.FC<NexusProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Nexus</h1>
            <h3>Next-Generation Project Management Ecosystem</h3>
            <br />
            <p>
                Nexus is a comprehensive, web-based workspace designed to centralize 
                fragmented creative and technical workflows. It combines project 
                management, real-time utilities, and a custom windowing system 
                into a single, high-performance dashboard.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>The Virtual Desktop Environment</h2>
                <br />
                <p>
                    Unlike traditional project management tools that rely on 
                    static tabs, Nexus utilizes a custom-built windowing engine. 
                    This allows users to multitask across several modules 
                    simultaneously—such as managing tasks, monitoring terminal 
                    outputs, and taking notes—within a unified OS-style interface.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={nexusdash} alt="Nexus Dashboard Interface" style={styles.image} />
                    <div style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> The Nexus windowing system in action, 
                            demonstrating dynamic resizing, layering, and 
                            workspace persistence logic.
                        </sub>
                    </div>
                </div>
                <p>
                    Built with React and Framer Motion, the environment provides 
                    a fluid, native-feeling experience. The core architecture 
                    manages the z-index, focus states, and spatial positioning of 
                    every application, ensuring that the workspace remains 
                    organized even during complex project sprints.
                </p>
                <br />
                <h3>Core Platform Features:</h3>
                <ul>
                    <li>
                        <p>
                            <b>Integrated Terminal:</b> A command-driven interface 
                            to control system preferences and automate tasks.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Contextual Note-Taking:</b> A markdown-ready editor 
                            linked directly to active project milestones.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Audio Workstation:</b> Built-in music and 
                            soundscape management to maintain focus during deep work.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Dynamic Theming:</b> Fully customizable CSS-in-JS 
                            themes, ranging from Glassmorphism to high-contrast modes.
                        </p>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h2>Project Orchestration & Tasks</h2>
                <br />
                <p>
                    At the heart of Nexus is a robust task management engine 
                    designed for power users. It moves beyond simple to-do lists 
                    by integrating project dependencies, time-tracking, and 
                    automated status updates through the Nexus "Kernel."
                </p>
                <br />
                <div className="captioned-image">
                    <img src={nexusteam} alt="Nexus Team Management Interface" style={styles.image} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> Advanced project workflow 
                                showing the interaction between the Kanban 
                                board and the system-level command palette.
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                    The system is engineered for speed. Using global keyboard 
                    shortcuts and a command palette (Cmd+K), users can create 
                    tasks, assign deadlines, and move projects through the 
                    pipeline without ever touching their mouse. This "keyboard-first" 
                    philosophy is central to the Nexus productivity model.
                </p>
                <br />
                <p>
                    The data layer utilizes a synchronized state management 
                    system that ensures all open windows—whether it's the 
                    calendar or the task list—reflect real-time changes 
                    instantaneously across the dashboard.
                </p>
                <br />
                <h3>Management Capabilities:</h3>
                <ul>
                    <li>
                        <p>
                            <b>State Persistence:</b> Automatic local-storage 
                            synchronization so your workspace layout is never lost.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Command Palette:</b> Instant access to every 
                            functionality within the app via a unified search bar.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Resource Tracking:</b> Built-in utilities to 
                            monitor project time, file attachments, and external links.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Modular App Loading:</b> Lazy-loading architecture 
                            that only boots the tools you need, keeping memory usage low.
                        </p>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h2>The Nexus Intelligence Layer</h2>
                <br />
                <p>
                    Modern project management requires more than just organization—it 
                    requires intelligence. Nexus integrates with local AI models 
                    (via Ollama) to provide users with a private, on-device assistant 
                    capable of summarizing notes and suggesting task prioritizations.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={nexusproj} alt="Nexus Project Interface" style={styles.image} />
                    <div style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> AI-assisted project summary and 
                            automated daily briefing generated within the 
                            Nexus environment.
                        </sub>
                    </div>
                </div>
                <p>
                    By keeping the data local, Nexus offers a privacy-focused 
                    alternative to cloud-heavy management tools. The assistant 
                    can scan your current workspace "context" and provide 
                    relevant insights based on the windows you have open and 
                    the tasks you are currently tackling.
                </p>
                <br />
                <h3>Performance & Results:</h3>
                <ul>
                    <li>
                        <p>
                            <b>Workflow Velocity:</b> Significant reduction in 
                            context-switching time through a unified UI.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Technical Stack:</b> Built with React 18, 
                            TypeScript, and Zustand for high-scale state management.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Privacy:</b> On-device processing ensures all 
                            sensitive project data stays within the browser.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>User Engagement:</b> An immersive, gamified 
                            experience that makes project management feel like 
                            an interactive OS.
                        </p>
                    </li>
                </ul>
                <p>
                    Nexus represents the future of personal and professional 
                    productivity. By consolidating every tool a developer or 
                    creative professional needs into a single, high-performance 
                    desktop environment, it eliminates the noise of the modern 
                    web and allows for true deep work.
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    image: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default NexusProjects;