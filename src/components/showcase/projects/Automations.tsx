import React from 'react';
// @ts-ignore
import ResumeDownload from '../ResumeDownload';
import auto1 from '../../../assets/pictures/projects/software/auto1.png';
import auto3 from '../../../assets/pictures/projects/software/auto3.png';

export interface AutomationProjectsProps {}

const AutomationProjects: React.FC<AutomationProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Automation</h1>
            <h3>Business Process Automation</h3>
            <br />
            <p>
                Advanced workflow automation systems built with n8n, handling
                everything from lead generation to customer relationship
                management.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Workflow Automation at Scale</h2>
                <br />
                <p>
                    I've developed sophisticated automation systems using n8n
                    that streamline complex business processes. These
                    workflows handle thousands of operations daily, from
                    prospecting and lead qualification to customer
                    communication and data management.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={auto1} alt="Automation" style={styles.image} />
                    <div style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Complex n8n workflow showing the
                            interconnected nodes that power automated business
                            processes.
                        </sub>
                    </div>
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
                    <img src={auto3} alt="Automation" style={styles.image} />
                    <div style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> AI-enhanced workflow showing
                            personalization logic and response handling.
                        </sub>
                    </div>
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