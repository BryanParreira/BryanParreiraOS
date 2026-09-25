import React from 'react';
import ResumeDownload from '../ResumeDownload';
import notiz1 from '../../../assets/pictures/projects/software/notiz1.png';
import notiz2 from '../../../assets/pictures/projects/software/notiz2.png';
import notiz3 from '../../../assets/pictures/projects/software/notiz3.png';

export interface NotizProjectProps {}

const NotizProject: React.FC<NotizProjectProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Notiz</h1>
            <h3>Local-First AI Meeting Assistant</h3>
            <br />
            <p>
                Your meetings. Your machine. Your notes. Notiz is a
                local-first AI meeting assistant for macOS that listens,
                transcribes, and writes up your meetings on your own hardware,
                into plain Markdown files you own. It's the new version of my
                earlier project, Velo.
            </p>
            <br />
            <p>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href={'https://github.com/BryanParreira/Notiz'}
                >
                    github.com/BryanParreira/Notiz
                </a>
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Overview</h2>
                <br />
                <p>
                    <i>Notiz</i> is German for "note", a short record of what
                    happened, written down so it's worth keeping. No bot joins
                    your call: Notiz captures the audio your Mac is already
                    playing and recording, so it works with Zoom, Meet, Teams,
                    or two people talking across a table, with nothing to
                    invite and nobody else in the room.
                </p>
                <br />
                <div className="captioned-image">
                    <img
                        src={notiz1}
                        alt="Notiz Quick Actions"
                        style={styles.image}
                    />
                    <div style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> The quick-action menu for starting
                            a new note or recording.
                        </sub>
                    </div>
                </div>
                <h3>Key Features:</h3>
                <ul>
                    <li>
                        <p>
                            <b>Transcription Your Way:</b> Run fully
                            on-device, or plug in a cloud transcriber like
                            Deepgram, AssemblyAI, Soniox, ElevenLabs, OpenAI,
                            local Ollama, or any custom endpoint.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Bring-Your-Own Model:</b> Write notes with
                            OpenAI, Anthropic, Google, Mistral, OpenRouter or
                            Azure, or stay fully offline with Ollama, LM
                            Studio, or a local GGUF (Llama 3.2, Gemma 3, Qwen
                            2.5) downloaded from inside the app.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Everything Is a File:</b> Every session is a
                            .md file in a folder you choose. Grep it, sync it
                            with iCloud or git. No proprietary database, no
                            export button to hunt for.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Stays Out of the Way:</b> Lives in the menu
                            bar, follows your calendar, and can pull task
                            context from GitHub while you work.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Privacy by Design:</b> No account, no
                            analytics, no crash reporting. AI requests go
                            straight from your machine to the provider you
                            configured, never proxied through a server of
                            mine.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Technical Architecture</h2>
                <br />
                <p>
                    Notiz is a Tauri app with a Rust core and a React front
                    end, organized as a pnpm + Turborepo monorepo. Audio
                    capture, transcription, speaker diarization and the local
                    model runtime are Rust crates, with platform glue living
                    in Tauri plugins so the native pipeline and the UI stay
                    cleanly separated.
                </p>
                <br />
                <div className="captioned-image">
                    <img
                        src={notiz2}
                        alt="Notiz Settings"
                        style={styles.image}
                    />
                    <div style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> Settings panel covering app
                            behavior, transcription, and meeting automation.
                        </sub>
                    </div>
                </div>
                <div className="captioned-image">
                    <img
                        src={notiz3}
                        alt="Notiz AI Chat"
                        style={styles.image}
                    />
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
                            <b>Core:</b> Rust, Tauri
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>UI:</b> React, TypeScript, TinyBase (data),
                            Zustand (UI state), TipTap (editor)
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Monorepo Tooling:</b> pnpm workspaces, Turborepo
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Platform:</b> macOS 14.2+, Apple silicon
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>License:</b> MIT (a fork of Hyprnote by
                            Fastrepl)
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

export default NotizProject;
