import React from 'react';
// @ts-ignore
import brainlessDemo from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import brainlessUI from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import brainlessFeatures from '../../../assets/pictures/projects/software/scroll.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface ArtProjectsProps {}

const ArtProjects: React.FC<ArtProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Brainless</h1>
            <h3>AI-Native Workspace</h3>
            <br />
            <p>
                Brainless is my personal AI-powered workspace application that
                combines note-taking, project management, and intelligent
                assistance in a unified local-first environment.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Overview</h2>
                <br />
                <p>
                    Brainless was born from a simple need: I wanted a powerful
                    workspace application that respected my privacy while
                    leveraging the capabilities of modern AI. Inspired by tools
                    like Obsidian but enhanced with AI-native features, Brainless
                    maintains a 100% local architecture where all data stays on
                    your machine.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={brainlessDemo} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Brainless interface showcasing the
                            unified workspace with note-taking, chat, and project
                            management features.
                        </sub>
                    </p>
                </div>
                <p>
                    The application integrates seamlessly with Ollama, allowing
                    you to run powerful AI models entirely on your local machine.
                    This means you get intelligent assistance for writing,
                    organizing, and managing your work without ever sending your
                    data to external servers. Your thoughts, notes, and projects
                    remain completely private.
                </p>
                <br />
                <h3>Key Features:</h3>
                <ul>
                    <li>
                        <p>
                            <b>Local-First Architecture:</b> 100% privacy with
                            zero telemetry and complete data ownership
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>AI-Powered Chat:</b> Conversational interface
                            powered by local Ollama models
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Intelligent Note-Taking:</b> AI-assisted writing
                            and organization
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Project Management:</b> Integrated task tracking
                            and project organization
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Calendar Integration:</b> Seamless scheduling and
                            time management
                        </p>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Technical Architecture</h2>
                <br />
                <p>
                    Brainless is built with Electron, React, and TypeScript,
                    providing a native desktop experience across Windows, macOS,
                    and Linux. The application uses a local SQLite database for
                    data storage and integrates with Ollama's API for AI
                    capabilities.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={brainlessUI} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> The clean, minimalist interface
                                designed for focus and productivity.
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                    One of the key technical challenges was creating a responsive
                    and fluid UI while maintaining the ability to process AI
                    requests in real-time. The solution involved implementing an
                    efficient state management system with React hooks and
                    optimizing the Electron IPC communication for seamless data
                    flow between the main process and renderer.
                </p>
                <br />
                <p>
                    The AI integration works by streaming responses from Ollama,
                    providing a ChatGPT-like experience but entirely local. This
                    required careful handling of async streaming data and
                    implementing proper error handling for various model
                    configurations.
                </p>
            </div>
            <div className="text-block">
                <h2>Privacy-First Design Philosophy</h2>
                <br />
                <p>
                    Unlike many modern productivity tools that require cloud
                    accounts and send your data to remote servers, Brainless was
                    designed from the ground up with privacy as a core principle.
                    There are no analytics, no telemetry, and no external network
                    calls except for optional Ollama model downloads.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={brainlessFeatures} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Feature showcase demonstrating the
                            various capabilities of Brainless.
                        </sub>
                    </p>
                </div>
                <p>
                    This approach means your workspace is truly yours. All notes,
                    conversations, and project data are stored locally in an
                    easily accessible format. You can backup, export, or migrate
                    your data at any time without being locked into a proprietary
                    ecosystem.
                </p>
                <br />
                <h3>Technology Stack:</h3>
                <ul>
                    <li>
                        <p>
                            <b>Frontend:</b> React, TypeScript, Tailwind CSS
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Desktop Framework:</b> Electron
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Database:</b> SQLite for local data persistence
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>AI Integration:</b> Ollama API for local model
                            execution
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>State Management:</b> React hooks and context
                        </p>
                    </li>
                </ul>
                <p>
                    Brainless represents my vision for what productivity software
                    should be: powerful, intelligent, and completely respectful
                    of user privacy. It's an ongoing project that continues to
                    evolve as I use it daily for my own work and discover new
                    ways to enhance the experience.
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default ArtProjects;