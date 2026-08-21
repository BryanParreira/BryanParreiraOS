import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/workingoncomputer.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Bryan Parreira</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a Cybersecurity Student & Developer currently working
                    on my projects! In May of 2024 I graduated from Riverland
                    Community College with my AS in Computer Tech.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email {' '}
                    <a href="mailto:bryan.parreira@mnsu.edu">
                        here
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    From a young age, I have had a curiosity about how things
                    worked. This naturally led me to become absolutely obsessed
                    with Lego and I fell in love with building things. In
                    elementary school, I joined the Lego Robotics team at my
                    local middle school, which was my first real exposure to
                    programming.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={meNow} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me developing this
                            website :)
                        </sub>
                    </p>
                </div>

                <p>
                    For a while, my path pointed somewhere else entirely. I set
                    my sights on becoming a Registered Nurse and joining the
                    military as a combat medic, and I worked toward it by
                    earning my CNA and working hands-on patient care at a
                    nursing home. My wife and family weren't on board with the
                    military route though, and looking back, that pushback sent
                    me back to what I'd always genuinely loved: technology.
                </p>
                <br />
                <p>
                    I went back to Riverland Community College to study
                    Computer Technology, and from there the direction became
                    clear. I'm now headed into a Cybersecurity Certificate
                    program at Minnesota State University, Mankato, building on
                    the hands-on troubleshooting, networking, and systems work
                    I picked up along the way. You can see some of what I'm
                    building and working on now on my{' '}
                    <Link to="/experience">Experience</Link> page.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond work, I spend a lot of my free time running
                            my homelab, tinkering with Linux and Raspberry Pi,
                            and building out{' '}
                            <Link to="/projects/Automations">automations</Link>{' '}
                            for my own tools. Some other hobbies I enjoy are
                            working out, cooking, and (unsurprisingly) playing
                            video games.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={me} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, April 2022
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. If you find the easter egg make sure to let me know
                    on twitter
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email {' '}
                    <a href="mailto:bryan.parreira@mnsu.edu">
                       here
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
        maxWidth: '500px'
    },    
    topImage: {
        height: 'auto',
        width: '100%',
        maxWidth: '600px', // Add this if you use this style
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
