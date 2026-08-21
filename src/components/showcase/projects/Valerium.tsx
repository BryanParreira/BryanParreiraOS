import React from 'react';
import ResumeDownload from '../ResumeDownload';
import valerium1 from '../../../assets/pictures/projects/software/Valerium1.png';
import valerium2 from '../../../assets/pictures/projects/software/Valerium2.png';
import valerium3 from '../../../assets/pictures/projects/software/Valerium3.png';

export interface ValeriumProjectProps {}

const ValeriumProject: React.FC<ValeriumProjectProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Valerium</h1>
            <h3>Open Finance Business Management Platform</h3>
            <br />
            <p>
                A business management platform built on Open Finance that
                unifies banking, invoicing, CRM, and AI-driven financial
                insights for small and medium businesses. Built with my team
                at{' '}
                <a
                    rel="noreferrer"
                    target="_blank"
                    href={'https://grovicdata.com/'}
                >
                    Grovic Data
                </a>
                .
            </p>
            <br />
            <p>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href={'https://valerium.grovicdata.com/'}
                >
                    valerium.grovicdata.com
                </a>
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Overview</h2>
                <br />
                <p>
                    Valerium consolidates finance, operations, and customer
                    management into one system, built on Brazil's
                    Central-Bank-regulated Open Finance rails so businesses can
                    sync bank transactions automatically instead of chasing
                    down receipts and reconciling books by hand.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={valerium1} alt="Valerium Sign In" style={styles.image} />
                    <div style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Valerium's sign-in screen.
                        </sub>
                    </div>
                </div>
                <div className="captioned-image">
                    <img src={valerium2} alt="Valerium Scheduling" style={styles.image} />
                    <div style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> Weekly scheduling view for
                            tracking jobs and appointments.
                        </sub>
                    </div>
                </div>
                <h3>Finance & Accounting:</h3>
                <ul>
                    <li>
                        <p>
                            <b>Open Finance Sync:</b> Automatic bank
                            transaction syncing across multiple accounts.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Invoicing:</b> Invoice creation with online
                            payment via PIX or card.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Inbox:</b> Automatic receipt reconciliation.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Pre-Accounting:</b> Self-reconciling books that
                            automatically categorize transactions.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Operations, CRM & Intelligence</h2>
                <br />
                <p>
                    Beyond bookkeeping, Valerium handles customer management,
                    time tracking, document storage, and contracts with
                    e-signature, layering an AI assistant on top for revenue
                    forecasting and anomaly detection.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={valerium3} alt="Valerium Analytics" style={styles.image} />
                    <div style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Revenue and burn-rate analytics
                            dashboard.
                        </sub>
                    </div>
                </div>
                <h3>Capabilities:</h3>
                <ul>
                    <li>
                        <p>
                            <b>CRM:</b> Customer management and enrichment.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Contracts:</b> Document storage and e-signature.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>AI Assistant:</b> Business insights, forecasting,
                            and anomaly detection (e.g. flagging outflows
                            trending above normal).
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Integrations:</b> 100+ tools including
                            QuickBooks, Xero, Stripe, Gmail, Slack, HubSpot,
                            and AI platforms via API, CLI, and MCP.
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

export default ValeriumProject;
