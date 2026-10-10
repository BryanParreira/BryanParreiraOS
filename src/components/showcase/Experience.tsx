import React from 'react';
import { useNavigate } from 'react-router';
import ResumeDownload from './ResumeDownload';
import { APPS } from './projects/apps';

export interface ExperienceProps {}

interface Role {
    title: string;
    role: string;
    dates: string;
    link?: { href: string; label: string };
    summary: string;
    highlights: string[];
    // Project pages on this site that go with this role
    projects?: { slug: string; label: string }[];
    products?: Role[];
}

const WORK: Role[] = [
    {
        title: 'Grovic Data',
        role: 'Co-Founder',
        dates: 'January 2026 - Present',
        link: { href: 'https://grovicdata.com/', label: 'grovicdata.com' },
        summary:
            'Technology company turning raw data into strategic intelligence through data engineering, AI automation, and full-stack development, building products that centralize operations and eliminate manual work for businesses in food service, healthcare, and real estate.',
        highlights: [
            "Co-founded and help build the company's product line, working across data engineering, AI/automation, and full-stack development from database to user interface.",
            'Helping design automation pipelines and real-time analytics/KPI dashboards that integrate with existing ERP, CRM, and BI systems.',
        ],
        products: [
            {
                title: 'Valerium',
                role: 'Developer & Security',
                dates: 'January 2026 - Present',
                link: {
                    href: 'https://valerium.grovicdata.com/',
                    label: 'valerium.grovicdata.com',
                },
                summary:
                    'A business management platform built on Open Finance that unifies banking, invoicing, CRM, and AI-driven financial insights for small and medium businesses in Brazil.',
                highlights: [
                    "Contributing to the platform's finance and CRM features, including automatic bank transaction syncing, invoicing, and receipt reconciliation.",
                    'Helping build the AI assistant layer for financial insights, forecasting, and anomaly detection.',
                    'Reviewing authentication and data handling flows to keep financial data secure across the platform.',
                ],
                projects: [{ slug: 'Valerium', label: 'Valerium' }],
            },
            {
                title: 'ProntuSMART',
                role: 'Developer & Security',
                dates: 'January 2026 - Present',
                link: {
                    href: 'https://prontusmart.grovicdata.com',
                    label: 'prontusmart.grovicdata.com',
                },
                summary:
                    'A digital health records system for clinics and hospitals covering appointment scheduling, patient flow, insurance billing, and clinical supervision.',
                highlights: [
                    'Contributing to the patient record and clinical evolution features used by clinics to track patients through their visits.',
                    'Helping build the reporting and supervisor sign-off workflow for clinical staff.',
                    'Reviewing access controls and record-handling practices to keep patient data secure and compliant.',
                ],
                projects: [{ slug: 'ProntuSMART', label: 'ProntuSMART' }],
            },
        ],
    },
    {
        title: 'Independent Developer',
        role: 'Desktop Apps',
        dates: '2026 - Present',
        link: {
            href: 'https://github.com/BryanParreira',
            label: 'github.com/BryanParreira',
        },
        summary:
            'Designing, building and shipping my own free, privacy-first desktop apps. Everything runs on the user\'s own machine, with no accounts and no tracking.',
        highlights: [
            'Shipped four apps: Parla (dictation), Notiz (meeting notes), Rune (terminal) and Orbit (virtual machines).',
            'Built native apps in Swift (AppKit, SwiftUI) and cross-platform apps with Rust and Tauri, running speech and language models on-device.',
            'Handle the full release pipeline: code signing, Apple notarization, installers, and signed automatic updates.',
        ],
        projects: APPS.map((app) => ({ slug: app.slug, label: app.name })),
    },
    {
        title: 'Homelab & Networking',
        role: 'Personal Projects',
        dates: 'Ongoing',
        summary:
            'Hands-on with Linux systems, self-hosted infrastructure, and home networking, building practical skills that feed directly into my Cybersecurity studies.',
        highlights: [
            'Run a homelab self-hosting services on Linux and Raspberry Pi, managing everything from setup to ongoing maintenance.',
            'Built automation workflows with n8n to connect and streamline self-hosted services and personal tools.',
            'Configure and harden home routers and network segments, and run services inside VMs for testing and isolation.',
            'Practice wardriving to survey and better understand wireless network exposure as part of learning offensive and defensive security concepts.',
        ],
    },
];

const EDUCATION: { school: string; program: string; dates: string }[] = [
    {
        school: 'Minnesota State University, Mankato',
        program: 'Cybersecurity Certificate',
        dates: 'In progress',
    },
    {
        school: 'Riverland Community College',
        program: 'A.S. in Computer Technology',
        dates: 'Graduated May 2024',
    },
];

const RoleEntry: React.FC<{ role: Role; nested?: boolean }> = ({
    role,
    nested,
}) => {
    const navigate = useNavigate();

    return (
        <div className={nested ? 'xp-entry xp-entry-nested' : 'xp-entry'}>
            <div className="header-row" style={styles.titleRow}>
                {nested ? <h3>{role.title}</h3> : <h2>{role.title}</h2>}
                {role.link && (
                    <a rel="noreferrer" target="_blank" href={role.link.href}>
                        <p>{role.link.label}</p>
                    </a>
                )}
            </div>
            <div className="header-row" style={styles.titleRow}>
                <h4>{role.role}</h4>
                <span className="date-badge">{role.dates}</span>
            </div>
            <br />
            <p>{role.summary}</p>
            <ul style={styles.highlights}>
                {role.highlights.map((highlight) => (
                    <li key={highlight}>
                        <p>{highlight}</p>
                    </li>
                ))}
            </ul>
            {role.projects && (
                <div style={styles.projectLinks}>
                    {role.projects.map((project) => (
                        <button
                            key={project.slug}
                            className="site-button"
                            onClick={() =>
                                navigate(`/projects/${project.slug}`)
                            }
                        >
                            {project.label} ›
                        </button>
                    ))}
                </div>
            )}
            {role.products?.map((product) => (
                <RoleEntry key={product.title} role={product} nested />
            ))}
        </div>
    );
};

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Experience</h1>
            <h3>Work, Projects & Education</h3>
            <br />
            <ResumeDownload />
            <h4 className="section-label">Work</h4>
            {WORK.map((role) => (
                <RoleEntry key={role.title} role={role} />
            ))}
            <h4 className="section-label">Education</h4>
            {EDUCATION.map((item) => (
                <div key={item.school} className="xp-entry">
                    <div className="header-row" style={styles.titleRow}>
                        <h3>{item.school}</h3>
                        <span className="date-badge">{item.dates}</span>
                    </div>
                    <p>{item.program}</p>
                </div>
            ))}
        </div>
    );
};

const styles: StyleSheetCSS = {
    titleRow: {
        justifyContent: 'space-between',
        alignItems: 'baseline',
        columnGap: 16,
    },
    highlights: {
        marginTop: 16,
        marginBottom: 0,
    },
    projectLinks: {
        flexWrap: 'wrap',
        gap: 8,
        marginTop: 4,
    },
};

export default Experience;
