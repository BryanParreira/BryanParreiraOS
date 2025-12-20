import React from 'react';
// @ts-ignore
import workflowDemo from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import leadGeneration from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import automation from '../../../assets/pictures/projects/software/scroll.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface AutomationProjectsProps {}

const AutomationProjects: React.FC<AutomationProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>n8n Automation</h1>
            <h3>Business Process Automation</h3>
            <br />
            <p>
                Advanced workflow automation systems built with n8n for
                WebVisionRank and client projects, handling everything from lead
                generation to customer relationship management.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Workflow Automation at Scale</h2>
                <br />
                <p>
                    For WebVisionRank and various client projects, I've developed
                    sophisticated automation systems using n8n that streamline
                    complex business processes. These workflows handle thousands
                    of operations daily, from prospecting and lead qualification
                    to customer communication and data management.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={workflowDemo} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Complex n8n workflow showing the
                            interconnected nodes that power automated business
                            processes.
                        </sub>
                    </p>
                </div>
                <p>
                    The beauty of n8n is its flexibility - I can integrate
                    virtually any service or API, create custom logic with
                    JavaScript, and build workflows that adapt to changing
                    business needs. What would take hours of manual work is
                    executed in seconds, allowing businesses to scale their
                    operations without proportionally scaling their team.
                </p>
                <br />
                <h3>Core Capabilities:</h3>
                <ul>
                    <li>
                        <p>
                            <b>Lead Generation:</b> Automated prospecting and
                            qualification systems
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Email Campaigns:</b> Sophisticated drip campaigns
                            with AI-powered personalization
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>CRM Integration:</b> Seamless data flow between
                            multiple business systems
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Data Processing:</b> Automated data cleaning,
                            enrichment, and transformation
                        </p>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Storm-Based Roofing Lead Generation</h2>
                <br />
                <p>
                    One of my most successful automation projects is the
                    storm-based lead generation system built for Ridgeline
                    Roofing MN. This system automatically identifies potential
                    customers based on weather events and manages the entire
                    outreach process from initial contact to appointment
                    scheduling.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={leadGeneration} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> Storm tracking workflow that
                                monitors weather data and triggers targeted
                                outreach campaigns.
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                    The system works by monitoring weather APIs for storm events
                    in target areas. When a storm is detected, it automatically
                    identifies properties in the affected area using geographic
                    data, enriches the data with property owner information, and
                    initiates a personalized outreach campaign.
                </p>
                <br />
                <p>
                    What makes this system particularly effective is the timing.
                    Homeowners are most receptive to roofing services immediately
                    after storm damage, and this automation ensures Ridgeline
                    Roofing is one of the first companies to reach out with
                    relevant, timely offers for inspection and repair services.
                </p>
                <br />
                <h3>System Components:</h3>
                <ul>
                    <li>
                        <p>
                            <b>Weather Monitoring:</b> Real-time storm tracking
                            across multiple data sources
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Geographic Targeting:</b> Property identification
                            in affected areas
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Data Enrichment:</b> Automated property owner
                            lookup and contact information gathering
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Multi-Channel Outreach:</b> Email, SMS, and direct
                            mail coordination
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Response Tracking:</b> Automated follow-up and
                            lead scoring
                        </p>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>AI-Powered Personalization</h2>
                <br />
                <p>
                    Modern automation isn't just about executing repetitive
                    tasks - it's about doing so intelligently. I've integrated AI
                    capabilities into many workflows to personalize
                    communications at scale. Using local AI models through Ollama
                    or cloud-based APIs when appropriate, the systems can
                    generate personalized email content, analyze customer
                    responses, and adapt messaging based on engagement patterns.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={automation} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> AI-enhanced workflow showing
                            personalization logic and response handling.
                        </sub>
                    </p>
                </div>
                <p>
                    This combination of automation and AI creates experiences
                    that feel personal despite being completely automated.
                    Recipients get relevant, timely messages that address their
                    specific situation, while businesses benefit from the
                    efficiency of automation at scale.
                </p>
                <br />
                <h3>Automation Results:</h3>
                <ul>
                    <li>
                        <p>
                            <b>Efficiency Gains:</b> 95%+ reduction in manual
                            processing time
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Response Rates:</b> 3-5x improvement over manual
                            outreach campaigns
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Scalability:</b> Handle 1000+ leads per day per
                            workflow
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Accuracy:</b> Near-zero error rate with proper
                            validation
                        </p>
                    </li>
                </ul>
                <p>
                    These automation projects demonstrate how the right tools and
                    systems can transform business operations. By eliminating
                    repetitive manual work and ensuring consistent, timely
                    execution, businesses can focus their human talent on
                    high-value activities while automation handles the rest.
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default AutomationProjects;