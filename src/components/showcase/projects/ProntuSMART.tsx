import React from 'react';
import ResumeDownload from '../ResumeDownload';
import prontusmart1 from '../../../assets/pictures/projects/software/Prontusmart1.png';
import prontusmart2 from '../../../assets/pictures/projects/software/Prontusmart2.png';
import prontusmart3 from '../../../assets/pictures/projects/software/Prontusmart3.png';

export interface ProntuSmartProjectProps {}

const ProntuSmartProject: React.FC<ProntuSmartProjectProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>ProntuSMART</h1>
            <h3>Digital Health Records System</h3>
            <br />
            <p>
                A digital health records system for clinics and hospitals,
                built with my team at{' '}
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
                    href={'https://prontusmart.grovicdata.com'}
                >
                    prontusmart.grovicdata.com
                </a>
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Overview</h2>
                <br />
                <p>
                    ProntuSMART centralizes the day-to-day operations of a
                    clinic or hospital, from booking a patient's next
                    appointment to tracking them through their visit and
                    handling the billing that follows.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={prontusmart1} alt="ProntuSMART Dashboard" style={styles.image} />
                    <div style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Clinical dashboard showing active
                            patients, pending evaluations, and recent activity.
                        </sub>
                    </div>
                </div>
                <div className="captioned-image">
                    <img src={prontusmart2} alt="ProntuSMART Patient Record" style={styles.image} />
                    <div style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> A patient's clinical record,
                            showing evolutions, functional indicators, and
                            treatment goals.
                        </sub>
                    </div>
                </div>
                <div className="captioned-image">
                    <img src={prontusmart3} alt="ProntuSMART Reports" style={styles.image} />
                    <div style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Report queue awaiting review and
                            supervisor sign-off.
                        </sub>
                    </div>
                </div>
                <h3>Core Capabilities:</h3>
                <ul>
                    <li>
                        <p>
                            <b>Appointment Scheduling:</b> Booking and calendar
                            management for clinics and hospitals.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Patient Flow Management:</b> Tracking patients
                            through visits, from intake to discharge.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Insurance Billing:</b> Handling billing and
                            insurance workflows tied to patient visits.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Clinical Supervision:</b> Tools for clinical
                            oversight and record-keeping.
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
        maxWidth: 480,
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default ProntuSmartProject;
