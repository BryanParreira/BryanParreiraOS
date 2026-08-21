import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            
            {/* Grovic Data */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Grovic Data</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://grovicdata.com/'}
                        >
                            <h4>grovicdata.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Co-Founder</h3>
                        <b>
                            <p>January 2026 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Technology company turning raw data into strategic intelligence through
                    data engineering, AI automation, and full-stack development, building
                    products that centralize operations and eliminate manual work for
                    businesses in food service, healthcare, and real estate.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Co-founded and help build the company's product line, working
                            across data engineering, AI/automation, and full-stack development
                            from database to user interface.
                        </p>
                    </li>
                    <li>
                        <p>
                            Helping design automation pipelines and real-time analytics/KPI
                            dashboards that integrate with existing ERP, CRM, and BI systems.
                        </p>
                    </li>
                </ul>
            </div>

            {/* Valerium */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Valerium</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://valerium.grovicdata.com/'}
                        >
                            <h4>valerium.grovicdata.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Developer & Security</h3>
                        <b>
                            <p>January 2026 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    A business management platform built on Open Finance that unifies
                    banking, invoicing, CRM, and AI-driven financial insights for small
                    and medium businesses in Brazil.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Contributing to the platform's finance and CRM features, including
                            automatic bank transaction syncing, invoicing, and receipt
                            reconciliation.
                        </p>
                    </li>
                    <li>
                        <p>
                            Helping build the AI assistant layer for financial insights,
                            forecasting, and anomaly detection.
                        </p>
                    </li>
                    <li>
                        <p>
                            Reviewing authentication and data handling flows to keep
                            financial data secure across the platform.
                        </p>
                    </li>
                </ul>
            </div>

            {/* ProntuSMART */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>ProntuSMART</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://prontusmart.grovicdata.com'}
                        >
                            <h4>prontusmart.grovicdata.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Developer & Security</h3>
                        <b>
                            <p>January 2026 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    A digital health records system for clinics and hospitals covering
                    appointment scheduling, patient flow, insurance billing, and clinical
                    supervision.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Contributing to the patient record and clinical evolution features
                            used by clinics to track patients through their visits.
                        </p>
                    </li>
                    <li>
                        <p>
                            Helping build the reporting and supervisor sign-off workflow for
                            clinical staff.
                        </p>
                    </li>
                    <li>
                        <p>
                            Reviewing access controls and record-handling practices to keep
                            patient data secure and compliant.
                        </p>
                    </li>
                </ul>
            </div>

            {/* Homelab & Networking */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Homelab & Networking</h1>
                        <h4>Linux, Raspberry Pi & Self-Hosting</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Personal Projects</h3>
                        <b>
                            <p>Ongoing</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Hands-on with Linux systems, self-hosted infrastructure, and home networking,
                    building practical skills that feed directly into my Cybersecurity studies.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Run a homelab self-hosting services on Linux and Raspberry Pi,
                            managing everything from setup to ongoing maintenance.
                        </p>
                    </li>
                    <li>
                        <p>
                            Built automation workflows with n8n to connect and streamline
                            self-hosted services and personal tools.
                        </p>
                    </li>
                    <li>
                        <p>
                            Configure and harden home routers and network segments, and run
                            services inside VMs for testing and isolation.
                        </p>
                    </li>
                    <li>
                        <p>
                            Practice wardriving to survey and better understand wireless network
                            exposure as part of learning offensive and defensive security concepts.
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