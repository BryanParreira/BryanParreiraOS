import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            
            {/* WebVisionRank */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>WebVisionRank</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://webvisionrank.com/'}
                        >
                            <h4>www.webvisionrank.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Founder & Full-Stack Developer</h3>
                        <b>
                            <p>2023 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Digital marketing and AI business solutions company specializing in 
                    intelligent automation, modern web applications, and AI-powered tools. 
                    Built with React, TypeScript, Node.js, and integrating cutting-edge AI technologies.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Developed and deployed full-stack web applications with modern 
                            React architectures, TypeScript, and Node.js backends, serving 
                            clients across multiple industries.
                        </p>
                    </li>
                    <li>
                        <p>
                            Engineered AI-powered workflow automation systems using n8n, 
                            creating intelligent agents for lead generation, weather monitoring, 
                            and B2B outreach that process real-time data and generate personalized communications.
                        </p>
                    </li>
                    <li>
                        <p>
                            Designed and implemented computer vision systems using MediaPipe 
                            for real-time holistic tracking (face, pose, and hand landmarks), 
                            enabling advanced interactive applications.
                        </p>
                    </li>
                    <li>
                        <p>
                            Architected and maintained CI/CD pipelines with automated deployment 
                            to VPS infrastructure, implementing comprehensive monitoring and 
                            performance optimization strategies.
                        </p>
                    </li>
                    <li>
                        <p>
                            Built responsive marketing websites and web applications using 
                            React Router, integrating modern UI/UX design principles and 
                            ensuring cross-platform compatibility.
                        </p>
                    </li>
                </ul>
            </div>

            {/* Brainless */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Brainless</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://github.com/BryanParreira/Brainless'}
                        >
                            <h4>github.com/BryanParreira/Brainless</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Lead Developer & Architect</h3>
                        <b>
                            <p>2024 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Privacy-focused AI workspace application built with Electron, React, and 
                    TypeScript, featuring local-first architecture with Ollama integration for 
                    on-device AI processing. A comprehensive productivity suite combining chat, 
                    canvas, calendar, and document editing in a unified interface.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Architected a sophisticated multi-modal interface featuring integrated 
                            chat, visual canvas (Palette), calendar system (Chronos), and rich 
                            document editor (Zenith) with seamless component interoperability.
                        </p>
                    </li>
                    <li>
                        <p>
                            Implemented "Synapse" context intelligence system for advanced AI 
                            context management, eliminating hallucinations through intelligent 
                            prompt engineering and context optimization.
                        </p>
                    </li>
                    <li>
                        <p>
                            Optimized React component rendering and state management, reducing 
                            unnecessary re-renders by over 60% and significantly improving 
                            application performance through strategic memoization and effect optimization.
                        </p>
                    </li>
                    <li>
                        <p>
                            Developed comprehensive macOS code signing and notarization pipeline, 
                            navigating complex Apple distribution requirements for secure application delivery.
                        </p>
                    </li>
                    <li>
                        <p>
                            Engineered local AI model integration with Ollama, enabling privacy-focused 
                            AI capabilities without cloud dependencies, supporting multiple model 
                            architectures and real-time streaming responses.
                        </p>
                    </li>
                </ul>
            </div>

            {/* Network & Security */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Network Engineering & Security</h1>
                        <h4>Linux & Cisco Infrastructure</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Systems & Security Engineer</h3>
                        <b>
                            <p>2023 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Specialized in Linux system administration, Cisco network infrastructure, 
                    and security assessment. Conducted ethical hacking and penetration testing 
                    to help organizations identify and remediate vulnerabilities across their 
                    network and server environments.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Performed comprehensive penetration testing and vulnerability assessments 
                            for organizations, identifying critical security flaws in network 
                            configurations, system hardening, and access control mechanisms.
                        </p>
                    </li>
                    <li>
                        <p>
                            Managed and configured Linux server environments (Ubuntu, Debian) 
                            including VPS infrastructure, implementing security best practices, 
                            automated deployments, and system monitoring solutions.
                        </p>
                    </li>
                    <li>
                        <p>
                            Designed and implemented Cisco network infrastructure with focus on 
                            network segmentation, VLAN configuration, routing protocols, and 
                            firewall security to protect enterprise environments.
                        </p>
                    </li>
                    <li>
                        <p>
                            Developed security testing methodologies and created detailed vulnerability 
                            reports with actionable remediation strategies, helping organizations 
                            strengthen their security posture and comply with industry standards.
                        </p>
                    </li>
                    <li>
                        <p>
                            Researched emerging threats and attack vectors, staying current with 
                            the latest security tools, penetration testing frameworks, and defensive 
                            strategies across Linux and network environments.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    indent: {
        marginLeft: 24,
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;