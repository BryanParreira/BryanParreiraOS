import parlaIcon from '../../../assets/pictures/projects/icons/parla.png';
import notizIcon from '../../../assets/pictures/projects/icons/notiz.png';
import runeIcon from '../../../assets/pictures/projects/icons/rune.png';
import orbitIcon from '../../../assets/pictures/projects/icons/orbit.png';
import parla1 from '../../../assets/pictures/projects/software/parla1.png';
import parla2 from '../../../assets/pictures/projects/software/parla2.png';
import notiz1 from '../../../assets/pictures/projects/software/notiz1.png';
import notiz2 from '../../../assets/pictures/projects/software/notiz2.png';
import notiz3 from '../../../assets/pictures/projects/software/notiz3.png';
import rune1 from '../../../assets/pictures/projects/software/rune1.png';
import rune2 from '../../../assets/pictures/projects/software/rune2.png';
import rune3 from '../../../assets/pictures/projects/software/rune3.png';
import orbit1 from '../../../assets/pictures/projects/software/orbit1.png';
import orbit2 from '../../../assets/pictures/projects/software/orbit2.png';
import orbit3 from '../../../assets/pictures/projects/software/orbit3.png';
import orbit4 from '../../../assets/pictures/projects/software/orbit4.png';

export type Platform = 'mac' | 'windows' | 'linux';

export interface AppScreenshot {
    src: string;
    alt: string;
    caption: string;
}

export interface AppProject {
    // Used in the route, /projects/<slug>
    slug: string;
    name: string;
    tagline: string;
    icon: string;
    // GitHub owner/name; downloads come from its latest release
    repo: string;
    platforms: Platform[];
    // Platforms whose builds are still in preview
    previewPlatforms?: Platform[];
    requirements: string;
    price: string;
    intro: string;
    overview: string[];
    features: { title: string; body: string }[];
    architecture: string[];
    stack: { label: string; value: string }[];
    screenshots: AppScreenshot[];
    // Shown under the download buttons
    installSteps: string[];
    homebrew?: string;
    notes?: string[];
}

export const APPS: AppProject[] = [
    {
        slug: 'Parla',
        name: 'Parla',
        tagline: 'Fast, Private Dictation',
        icon: parlaIcon,
        repo: 'BryanParreira/Parla',
        platforms: ['mac', 'windows', 'linux'],
        previewPlatforms: ['windows', 'linux'],
        requirements:
            'macOS 15+ on Apple silicon. Windows 10/11 and Linux (X11) in preview.',
        price: 'Free',
        intro: "Hold a key, say what you want to write, let go. Parla types it into whatever app you're using, with speech recognition and text cleanup running entirely on your computer. No account, no subscription, and it works on a plane.",
        overview: [
            "Most dictation apps send your voice to a server. Parla doesn't. Speech recognition runs on the Mac's Neural Engine, and cleanup runs on Apple Intelligence on the same machine. Most dictations are typed well under a second after you let go, and Parla shows the time for every one.",
            'It works in any app that takes text: Slack, Mail, Notion, VS Code or your browser. Speak any of 25 European languages and Parla detects which one, or switch on Whisper for 99 languages including Chinese, Japanese, Arabic and Hindi.',
        ],
        features: [
            {
                title: 'Hold to Talk / Hands-Free',
                body: 'Hold the dictation key and release, or double-tap to keep recording until you tap again or go quiet. Hold Shift as you let go to send a chat message.',
            },
            {
                title: 'Modes',
                body: 'Voice to Text, Message, Email, Note, or your own Custom mode with its own instructions. A mode can translate, switch on by itself in chosen apps, and have its own shortcut.',
            },
            {
                title: 'Enhance',
                body: 'Strips "um", "uh" and false starts, and keeps only your final version when you correct yourself, all on-device. Choose Light, Standard or Polished.',
            },
            {
                title: 'Command Mode',
                body: 'Select text, hold a second key and say "make this shorter" or "turn this into a list". The selection is rewritten in place.',
            },
            {
                title: 'Never in Passwords',
                body: 'Parla refuses to listen while a password field has focus, or while a password manager or banking app is in front.',
            },
            {
                title: 'History, Snippets & Stats',
                body: 'Searchable history stored only on your machine, custom vocabulary, spoken snippets, a command line tool with MCP support, and stats on words, speed and time saved.',
            },
        ],
        architecture: [
            'Parla is a Tauri app split across three layers: a React UI for the main window and recording overlay, a Rust layer for hotkeys, pasting, settings, history and snippets, and a Swift library for audio capture, speech recognition and Apple Intelligence.',
            "Speech runs on NVIDIA Parakeet TDT v3 as a Core ML model on the Neural Engine, and Parla transcribes while you pause so it's often finished by the time you let go. On Windows and Linux, a small local Qwen2.5 model handles Enhance and Command Mode on the CPU.",
        ],
        stack: [
            { label: 'App Framework', value: 'Tauri, Rust' },
            { label: 'UI', value: 'React, TypeScript, Vite' },
            {
                label: 'Native',
                value: 'Swift, Core ML, Apple Foundation Models',
            },
            {
                label: 'Speech Models',
                value: 'NVIDIA Parakeet TDT v3, optional Whisper large-v3 turbo',
            },
            { label: 'License', value: 'Source-available (PolyForm Strict 1.0.0)' },
        ],
        screenshots: [
            {
                src: parla1,
                alt: 'Parla Home',
                caption:
                    'The home screen, with the dictation key and stats on words dictated, speaking speed and time saved.',
            },
            {
                src: parla2,
                alt: 'Parla Settings',
                caption:
                    'Settings for choosing the dictation key and hands-free shortcuts.',
            },
        ],
        installSteps: [
            'Download the installer for your system above.',
            'On a Mac, open the .dmg and drag Parla into Applications.',
            'Open Parla and grant Microphone and Accessibility access. It downloads its speech models once (about 720 MB), then works fully offline.',
        ],
        notes: [
            'The Windows installer isn\'t code-signed yet. If Windows shows "Windows protected your PC", click More info, then Run anyway.',
            'On Linux, use an X11 session. Make the AppImage executable with chmod +x, or install the .deb on Ubuntu, Debian, Mint or Pop!_OS.',
        ],
    },
    {
        slug: 'Notiz',
        name: 'Notiz',
        tagline: 'Local-First AI Meeting Assistant',
        icon: notizIcon,
        repo: 'BryanParreira/Notiz',
        platforms: ['mac'],
        requirements: 'macOS 14.2+ on Apple silicon.',
        price: 'Free & open source',
        intro: "Your meetings. Your machine. Your notes. Notiz is a local-first AI meeting assistant for macOS that listens, transcribes, and writes up your meetings on your own hardware, into plain Markdown files you own. It's the new version of my earlier project, Velo.",
        overview: [
            'Notiz is German for "note": a short record of what happened, written down so it\'s worth keeping.',
            "No bot joins your call: Notiz captures the audio your Mac is already playing and recording, so it works with Zoom, Meet, Teams, or two people talking across a table, with nothing to invite and nobody else in the room.",
        ],
        features: [
            {
                title: 'Transcription Your Way',
                body: 'Run fully on-device, or plug in a cloud transcriber like Deepgram, AssemblyAI, Soniox, ElevenLabs, OpenAI, local Ollama, or any custom endpoint.',
            },
            {
                title: 'Bring-Your-Own Model',
                body: 'Write notes with OpenAI, Anthropic, Google, Mistral, OpenRouter or Azure, or stay fully offline with Ollama, LM Studio, or a local GGUF (Llama 3.2, Gemma 3, Qwen 2.5) downloaded from inside the app.',
            },
            {
                title: 'Everything Is a File',
                body: 'Every session is a .md file in a folder you choose. Grep it, sync it with iCloud or git. No proprietary database, no export button to hunt for.',
            },
            {
                title: 'Stays Out of the Way',
                body: 'Lives in the menu bar, follows your calendar, and can pull task context from GitHub while you work.',
            },
            {
                title: 'Privacy by Design',
                body: 'No account, no analytics, no crash reporting. AI requests go straight from your machine to the provider you configured, never proxied through a server of mine.',
            },
        ],
        architecture: [
            'Notiz is a Tauri app with a Rust core and a React front end, organized as a pnpm + Turborepo monorepo. Audio capture, transcription, speaker diarization and the local model runtime are Rust crates, with platform glue living in Tauri plugins so the native pipeline and the UI stay cleanly separated.',
        ],
        stack: [
            { label: 'Core', value: 'Rust, Tauri' },
            {
                label: 'UI',
                value: 'React, TypeScript, TinyBase (data), Zustand (UI state), TipTap (editor)',
            },
            { label: 'Monorepo Tooling', value: 'pnpm workspaces, Turborepo' },
            { label: 'License', value: 'MIT (a fork of Hyprnote by Fastrepl)' },
        ],
        screenshots: [
            {
                src: notiz1,
                alt: 'Notiz Quick Actions',
                caption:
                    'The quick-action menu for starting a new note or recording.',
            },
            {
                src: notiz2,
                alt: 'Notiz Settings',
                caption:
                    'Settings panel covering app behavior, transcription, and meeting automation.',
            },
            {
                src: notiz3,
                alt: 'Notiz AI Chat',
                caption:
                    'The AI chat interface answering questions directly inside a note.',
            },
        ],
        installSteps: [
            'Download the .dmg above.',
            'Open it and drag Notiz into Applications.',
            'Launch Notiz, pick a folder for your notes, and choose a transcription and note-writing model.',
        ],
    },
    {
        slug: 'Rune',
        name: 'Rune',
        tagline: 'The Terminal, Refined',
        icon: runeIcon,
        repo: 'BryanParreira/Rune',
        platforms: ['mac'],
        requirements:
            'macOS 14+ on Apple silicon or Intel. Signed and notarized by Apple.',
        price: 'Free',
        intro: "A native macOS terminal with command blocks, a modern input editor, a private AI that runs entirely on your Mac, and a warm paper look that's easy on the eyes.",
        overview: [
            'Every command in Rune is a block: output is grouped with the command that produced it, its folder and how long it took. Failed commands stand out in red with their exit code, and you can copy, re-run, compare or bookmark any block.',
            'Input sits at the bottom like a chat box, with multi-line editing, history suggestions, typo fixes and a completion menu for git, docker, npm, brew, kubectl and more. It loads your own zsh, bash or fish setup exactly as it is and never edits your dotfiles.',
        ],
        features: [
            {
                title: 'Command Blocks',
                body: 'Copy a command, its output, both, Markdown for an issue, or a picture of the block in your theme. Jump between blocks with ⌘↑ and ⌘↓.',
            },
            {
                title: 'Compare & Watch',
                body: 'Diff a command against its previous run, or watch it re-run every few seconds and highlight the lines that changed.',
            },
            {
                title: 'Recall',
                body: 'Press ⌃R to search every command and its output across all your sessions. Stored only on your Mac, with secrets removed.',
            },
            {
                title: 'A Private AI',
                body: 'Press ⌘↵ to ask a question instead of running it. Rune answers with the context of where you are, using any model you have in Ollama. Prompts never leave your machine.',
            },
            {
                title: 'Works Over SSH',
                body: 'Keep the input box, blocks and AI when ssh, docker exec or kubectl exec lands you on another machine. Nothing is saved on the server.',
            },
            {
                title: 'Private by Design',
                body: 'API keys and passwords in output are masked on screen, in copies and in Recall. Programs can\'t read your clipboard, and sudo can accept Touch ID.',
            },
        ],
        architecture: [
            'Rune is a native Swift app built with AppKit and SwiftUI on top of SwiftTerm, with Sparkle for signed, verified updates. New tabs and splits open instantly even with a heavy zsh setup, and huge outputs stream by at about a million lines in two seconds.',
            'There are no accounts, analytics or telemetry. The only network request is a daily update check that downloads a public feed and sends nothing about you.',
        ],
        stack: [
            { label: 'Language', value: 'Swift' },
            { label: 'UI', value: 'AppKit, SwiftUI' },
            { label: 'Terminal Engine', value: 'SwiftTerm' },
            { label: 'Updates', value: 'Sparkle (EdDSA-signed)' },
            { label: 'AI', value: 'Ollama, on-device' },
            { label: 'License', value: 'Proprietary, source published for transparency' },
        ],
        screenshots: [
            {
                src: rune1,
                alt: 'Rune in the Paper theme',
                caption:
                    'The Paper theme: git history, a file listing and a failed command, each in its own block.',
            },
            {
                src: rune2,
                alt: 'Rune Recall',
                caption: 'Recall searching past commands and their output.',
            },
            {
                src: rune3,
                alt: 'Rune in the Paper Night theme',
                caption: 'Paper Night keeps the same warmth after sunset.',
            },
        ],
        installSteps: [
            'Download the .dmg above, or install with Homebrew.',
            'Open it and drag Rune into Applications.',
            'Launch Rune. No account, no setup. For AI, install Ollama and pull a model such as qwen2.5-coder:3b.',
        ],
        homebrew: 'brew install --cask bryanparreira/tap/rune',
    },
    {
        slug: 'Orbit',
        name: 'Orbit',
        tagline: 'Virtual Machines at Native Speed',
        icon: orbitIcon,
        repo: 'BryanParreira/Orbit',
        platforms: ['mac'],
        requirements:
            'macOS 26+ on Apple silicon. Signed and notarized by Apple.',
        price: 'Free',
        intro: 'Virtual machines at native speed for Apple silicon. macOS, Linux and Windows guests in a quiet, native Mac app.',
        overview: [
            "Linux and macOS guests run on Apple's own hypervisor with paravirtual disks, network and graphics. Nothing is emulated unless you ask for it. Pick a system and Orbit downloads the newest release, verifies its checksum, sizes the machine for your Mac and boots it. Two steps, not six.",
            "Quit with machines running and they're suspended to disk; next launch they're back in under a second, mid-task. Orbit also takes what you already have: ISOs, macOS restore images, and disks from UTM, VMware, VirtualBox or Hyper-V.",
        ],
        features: [
            {
                title: 'Two-Step Setup',
                body: 'Choose macOS, Ubuntu, Fedora, Debian, Kali, Alpine, Windows 11 and more. Orbit fetches the latest release from the official source and picks smart defaults.',
            },
            {
                title: 'Suspend & Resume',
                body: 'Memory is saved on quit and restored on launch, measured at 0.6 s for a Linux guest on an M4.',
            },
            {
                title: 'Instant Snapshots & Clones',
                body: 'APFS clones take no time and no space until the machine changes. Disposable sessions throw every change away when you close the machine.',
            },
            {
                title: 'Rosetta & Nested Virtualization',
                body: 'Run x86-64 Linux binaries in ARM guests at near-native speed, and KVM inside Linux guests on M3 and newer.',
            },
            {
                title: 'QEMU When You Need It',
                body: "For Windows 11 on ARM, FreeBSD or any x86-64 system, Orbit switches to QEMU and can install it for you.",
            },
            {
                title: 'Safe by Design',
                body: 'No account or analytics, nothing installed on your system, no admin password. Guests get only what you share, and clipboard and microphone are off by default.',
            },
        ],
        architecture: [
            "Orbit is a native SwiftUI app with two engines: Apple's Virtualization framework for macOS and ARM64 Linux guests, adapted from UTM, and a QEMU backend with its own argument builder and QMP client for everything else.",
            'Each machine is a .orbitvm package holding its config, disks, firmware, saved state and snapshots. Native machines use Apple\'s sparse ASIF disk format, and imported disks in formats the engine can\'t read are converted without touching the original.',
        ],
        stack: [
            { label: 'Language', value: 'Swift, SwiftUI' },
            {
                label: 'Engines',
                value: 'Apple Virtualization framework, QEMU',
            },
            { label: 'Storage', value: 'APFS clones, ASIF, QCOW2' },
            { label: 'Updates', value: 'Sparkle (EdDSA-signed)' },
            { label: 'Credits', value: 'Engine adapted from UTM (Apache 2.0)' },
        ],
        screenshots: [
            {
                src: orbit1,
                alt: 'Orbit library',
                caption: 'The Orbit library with a running Alpine Linux machine.',
            },
            {
                src: orbit2,
                alt: 'Choosing a system in Orbit',
                caption:
                    'Choosing a system: macOS, Ubuntu, Fedora, Debian, Alpine, Windows 11 and more.',
            },
            {
                src: orbit3,
                alt: 'Configuring a new machine',
                caption: 'Reviewing the settings Orbit picked for a new Ubuntu machine.',
            },
            {
                src: orbit4,
                alt: 'A guest running in Orbit',
                caption: 'A guest running in an Orbit display window.',
            },
        ],
        installSteps: [
            'Download the .dmg above.',
            'Open it and drag Orbit into Applications.',
            'Launch Orbit and create your first machine. QEMU is optional and only needed for Windows, FreeBSD and x86-64 guests.',
        ],
        notes: [
            'Orbit is an early release. Linux guests, suspend and resume, snapshots and the QEMU engine are tested end to end; macOS and Windows 11 guests are implemented but still being tested.',
        ],
    },
];

export const getApp = (slug: string) => APPS.find((app) => app.slug === slug);
