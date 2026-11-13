import parlaIcon from '../../../assets/pictures/projects/icons/parla.png';
import notizIcon from '../../../assets/pictures/projects/icons/notiz.png';
import runeIcon from '../../../assets/pictures/projects/icons/rune.png';
import orbitIcon from '../../../assets/pictures/projects/icons/orbit.png';
import bastionIcon from '../../../assets/pictures/projects/icons/bastion.png';
import parla1 from '../../../assets/pictures/projects/software/parla1.png';
import parla2 from '../../../assets/pictures/projects/software/parla2.png';
import rune1 from '../../../assets/pictures/projects/software/rune1.png';
import rune2 from '../../../assets/pictures/projects/software/rune2.png';
import rune3 from '../../../assets/pictures/projects/software/rune3.png';
import orbit1 from '../../../assets/pictures/projects/software/orbit1.png';
import orbit2 from '../../../assets/pictures/projects/software/orbit2.png';
import orbit3 from '../../../assets/pictures/projects/software/orbit3.png';
import orbit4 from '../../../assets/pictures/projects/software/orbit4.png';
import bastion1 from '../../../assets/pictures/projects/software/bastion-monitor-light.png';
import bastion2 from '../../../assets/pictures/projects/software/bastion-rules-light.png';
import bastion3 from '../../../assets/pictures/projects/software/bastion-connections-light.png';
import bastion4 from '../../../assets/pictures/projects/software/bastion-monitor-dark.png';

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
    // GitHub owner/name; downloads come from its latest release. Left out
    // for apps with no public release yet.
    repo?: string;
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
        tagline: 'Notes, Calendar & Inbox, All Local',
        icon: notizIcon,
        repo: 'BryanParreira/Notiz',
        platforms: ['mac'],
        requirements: 'macOS 14.2+ on Apple silicon.',
        price: 'Free & open source',
        intro: 'Your notes, your calendar and your inbox in one quiet Mac app, with nothing leaving your machine. Notiz keeps every note as a plain Markdown file in a folder you choose, with no account, no AI and no server.',
        overview: [
            'Notiz is German for "note": a short record of what happened, written down so it\'s worth keeping. It has a warm, paper-like look, a compact sidebar and a calm editor.',
            'Notes sit next to the calendar and the mail that give them context. Connect your calendar and email the same simple way, with a provider preset and your credentials or a private link, or skip both and just write.',
        ],
        features: [
            {
                title: 'Everything Is a File',
                body: 'Every note is a .md file in a folder you choose. Grep it, sync it with iCloud or git. No proprietary database, no export button to hunt for.',
            },
            {
                title: 'A Calm Editor',
                body: 'A rich-text editor with real checkboxes, 21 ready-made templates and instant search across all your notes.',
            },
            {
                title: 'Calendar',
                body: 'Reads your Apple calendars, private iCal links, or Google and Microsoft calendars you connect directly. Optional, and never needed to open the app.',
            },
            {
                title: 'Inbox',
                body: 'Read-only mail over IMAP, shown as real HTML with images, like Gmail. Your app password stays in the macOS Keychain.',
            },
            {
                title: 'Menu Bar Panel',
                body: 'Left-click the menu bar icon for a quick panel, right-click for the menu. Notiz stays within reach without getting in the way.',
            },
            {
                title: 'Local by Design',
                body: 'No Notiz server, no account, no analytics, no crash reporting and no AI. The app can only talk to your own mail server or calendar link.',
            },
        ],
        architecture: [
            'Notiz is a Tauri app with a Rust core and a React front end, organized as a pnpm + Turborepo monorepo. Mail, calendar and note storage are Rust crates, with platform glue living in Tauri plugins.',
            'The app\'s content security policy only allows connections to the machine itself, so it cannot phone home even by accident. Email is read-only, and calendar access goes through Apple EventKit or iCal links you provide.',
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
        screenshots: [],
        installSteps: [
            'Download the .dmg above.',
            'Open it and drag Notiz into Applications.',
            'Launch Notiz, pick a folder for your notes, and optionally connect a calendar and your email.',
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
    {
        slug: 'Bastion',
        name: 'Bastion',
        tagline: 'See What Your Mac Shares',
        icon: bastionIcon,
        repo: 'BryanParreira/bastion',
        platforms: ['mac'],
        requirements:
            'macOS 15+. Signed and notarized by Apple. Approve the network extension once to turn blocking on.',
        price: 'Free',
        intro: 'A network firewall and privacy guard for macOS. See which app talks to whom, allow or deny each connection, and get told the moment anything turns on your camera or microphone.',
        overview: [
            "Every app on your Mac decides for itself where your data goes, and macOS doesn't show you. Bastion shows live traffic per app and per domain, lets you allow or deny each connection with one click, and keeps a history you can search.",
            'There is no account and no cloud. Rules, history and logs stay on your Mac, and the only network calls are ones you start yourself, such as downloading a blocklist.',
        ],
        features: [
            {
                title: 'Network Monitor',
                body: 'Live sent and received traffic per app and domain, with a timeline from 5 minutes to a week. Click an app for its code signature, team and connections.',
            },
            {
                title: 'Rules & Blocklists',
                body: 'Allow or deny per app, domain or port, from once to forever. Schedules, Wi-Fi profiles, ad and tracker blocklists, and import from Little Snitch.',
            },
            {
                title: 'Privacy Report',
                body: 'Every app gets an A to F grade from its last 7 days of traffic: ad and analytics services, signing and upload volume.',
            },
            {
                title: 'Camera & Mic Guard',
                body: 'An overlay and notification the moment a camera or microphone turns on, with a log of which app was in front and what was uploaded.',
            },
            {
                title: 'Autopilot',
                body: 'Turns your history into a starter rule set you review line by line, and can hold programs that have never connected before until you allow them.',
            },
            {
                title: 'Security Audit',
                body: 'A read-only scan of about 25 settings, from FileVault to launch items, scored 0 to 100 with plain-language fix steps. Bastion never changes your system.',
            },
        ],
        architecture: [
            'Bastion has two parts. A SwiftUI app owns the rules, history and interface. A macOS Network Extension (a content filter, the same mechanism commercial firewalls use) evaluates your rules inside the system and reports per-flow byte counts. They talk over XPC, with each side checking the other\'s code signature.',
            'Until you approve the extension, Bastion runs in observe mode and records without blocking. Camera and microphone state comes straight from CoreMediaIO and CoreAudio.',
        ],
        stack: [
            { label: 'Language', value: 'Swift, SwiftUI' },
            {
                label: 'Filtering',
                value: 'Network Extension (NEFilterDataProvider), XPC',
            },
            { label: 'Devices', value: 'CoreMediaIO, CoreAudio' },
            { label: 'Signing', value: 'Developer ID, hardened runtime, notarized' },
        ],
        screenshots: [
            {
                src: bastion1,
                alt: 'Bastion Network Monitor',
                caption: 'The Network Monitor: live traffic per app and domain.',
            },
            {
                src: bastion2,
                alt: 'Bastion Rules',
                caption: 'Rules for allowing or denying apps, domains and ports.',
            },
            {
                src: bastion3,
                alt: 'Bastion Connections',
                caption: 'Every connection, with where it went.',
            },
            {
                src: bastion4,
                alt: 'Bastion Network Monitor in dark mode',
                caption: 'The Network Monitor in dark appearance.',
            },
        ],
        installSteps: [
            'Download the .dmg and drag Bastion into Applications. It must live there for the network filter to load.',
            'Open it and follow the guided setup.',
            'To turn blocking on, switch Bastion on under System Settings, General, Login Items & Extensions, Network Extensions, then click Allow.',
        ],
        notes: [
            'Bastion is a pre-release. It monitors outgoing connections only; incoming-connection monitoring is not built yet.',
            'If you use Little Snitch, remove it first. Two content filters at once can conflict.',
        ],
    },
];

export const getApp = (slug: string) => APPS.find((app) => app.slug === slug);
