import React from 'react';
import ResumeDownload from '../ResumeDownload';
import parla1 from '../../../assets/pictures/projects/software/parla1.png';
import parla2 from '../../../assets/pictures/projects/software/parla2.png';

export interface ParlaProjectProps {}

const ParlaProject: React.FC<ParlaProjectProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Parla</h1>
            <h3>Fast, Private Dictation for macOS</h3>
            <br />
            <p>
                Hold a key, say what you want to write, let go. Parla types it
                into whatever app you're using, with speech recognition and
                text cleanup running entirely on your Mac. No account, no
                subscription, and it works on a plane.
            </p>
            <br />
            <p>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href={'https://github.com/BryanParreira/Parla'}
                >
                    github.com/BryanParreira/Parla
                </a>
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Overview</h2>
                <br />
                <p>
                    Most dictation apps send your voice to a server. Parla
                    doesn't. Speech recognition runs on the Mac's Neural
                    Engine, and cleanup runs on Apple Intelligence on the same
                    machine. Most dictations are typed about a second after
                    you let go, and Parla shows the time for every one.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={parla1} alt="Parla Home" style={styles.image} />
                    <div style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> The home screen, with the
                            dictation key and stats on words dictated,
                            speaking speed and time saved.
                        </sub>
                    </div>
                </div>
                <h3>Key Features:</h3>
                <ul>
                    <li>
                        <p>
                            <b>Hold to Talk / Hands-Free:</b> Hold the
                            dictation key and release, or double-tap to keep
                            recording until you tap again or go quiet.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Enhance:</b> Strips "um", "uh" and false
                            starts, and keeps only your final version when you
                            correct yourself, all on-device.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Command Mode:</b> Select text, hold a second
                            key and say "make this shorter" or "turn this into
                            a list". The selection is rewritten in place.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Match the App:</b> Casual in chat, polished in
                            email, untouched in code editors. Parla only looks
                            at which app is in front, never what's on screen.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Multilingual:</b> 25 European languages with
                            automatic detection, plus custom vocabulary,
                            snippets, searchable history and a quiet mode that
                            mutes media while you speak.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Technical Architecture</h2>
                <br />
                <p>
                    Parla is a Tauri app split across three layers: a React UI
                    for the main window and recording overlay, a Rust layer
                    for hotkeys, pasting, settings, history and snippets, and
                    a Swift library for audio capture, speech recognition and
                    Apple Intelligence. Speech runs on NVIDIA Parakeet TDT v3
                    as a Core ML model, and Parla transcribes while you pause
                    so it's often finished by the time you let go.
                </p>
                <br />
                <div className="captioned-image">
                    <img
                        src={parla2}
                        alt="Parla Settings"
                        style={styles.image}
                    />
                    <div style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> Settings for choosing the
                            dictation key and hands-free shortcuts.
                        </sub>
                    </div>
                </div>
                <h3>Technology Stack:</h3>
                <ul>
                    <li>
                        <p>
                            <b>App Framework:</b> Tauri, Rust
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>UI:</b> React, TypeScript, Vite
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Native:</b> Swift, Core ML, Apple Foundation
                            Models
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Speech Model:</b> NVIDIA Parakeet TDT v3
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Platform:</b> macOS 15+, Apple silicon
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>License:</b> Source-available (PolyForm Strict
                            1.0.0)
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

export default ParlaProject;
