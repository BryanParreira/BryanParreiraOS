import React from 'react';
import ResumeDownload from '../ResumeDownload';
import velo1 from '../../../assets/pictures/projects/software/velo1.png';
import velo2 from '../../../assets/pictures/projects/software/velo2.png';
import velo3 from '../../../assets/pictures/projects/software/velo3.png';

export interface VeloProjectProps {}

const VeloProject: React.FC<VeloProjectProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Velo</h1>
            <h3>Local-First AI Meeting Assistant</h3>
            <br />
            <p>
                A local-first AI meeting assistant for Mac that handles
                recording, transcription, and note-taking entirely on-device.
                Open source, built for privacy.
            </p>
            <br />
            <p>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href={'https://github.com/BryanParreira/Velo'}
                >
                    github.com/BryanParreira/Velo
                </a>
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Overview</h2>
                <br />
                <p>
                    Velo records and transcribes meetings without any of the
                    audio ever leaving your machine. Transcription runs
                    on-device through Argmax, Whisper, or Ollama, and notes are
                    saved as plain markdown files with no proprietary format
                    or account required.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={velo1} alt="Velo Quick Actions" style={styles.image} />
                    <div style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Velo's quick-action menu for
                            starting a new note or recording.
                        </sub>
                    </div>
                </div>
                <h3>Key Features:</h3>
                <ul>
                    <li>
                        <p>
                            <b>On-Device Transcription:</b> No cloud
                            dependency, powered by Argmax, Whisper, or Ollama.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Bring-Your-Own LLM:</b> Works with OpenAI,
                            Anthropic, Gemini, Ollama, or LM Studio for note
                            generation.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Plain Markdown Notes:</b> No lock-in, no
                            proprietary formatting.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Privacy by Design:</b> No accounts, no
                            telemetry, and AI queries go straight to your
                            chosen provider, never through Velo's servers.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Technical Architecture</h2>
                <br />
                <p>
                    Velo is built as a Rust and TypeScript monorepo managed
                    with pnpm workspaces and Turborepo, structured as a set of
                    crates, packages, and apps to keep the native audio
                    pipeline and the UI cleanly separated.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={velo2} alt="Velo Settings" style={styles.image} />
                    <div style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> Settings panel covering app
                            behavior, transcription, and meeting automation.
                        </sub>
                    </div>
                </div>
                <div className="captioned-image">
                    <img src={velo3} alt="Velo AI Chat" style={styles.image} />
                    <div style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> The AI chat interface answering
                            questions directly inside a note.
                        </sub>
                    </div>
                </div>
                <h3>Technology Stack:</h3>
                <ul>
                    <li>
                        <p>
                            <b>Core:</b> Rust
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>UI:</b> TypeScript
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Monorepo Tooling:</b> pnpm workspaces, Turborepo
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Platform:</b> macOS 14.2+
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>License:</b> MIT
                        </p>
                    </li>
                </ul>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    image: {
        width: '100%',
        maxWidth: 700,
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default VeloProject;
