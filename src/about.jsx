// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import profileImage from "../src/assets/profile.jpg";
import resumeImage from "../src/assets/resume/resume.jpg";
import './default.css';

export default function About() {
    const [showResume, setShowResume] = useState(false);

    const handleToggleResume = () => {
        setShowResume(!showResume);
    };

    return (
        <div className="page-container">
            <div className="page-content">
                <div className="image-container">
                    <img src={ profileImage } alt="Profile" className="profile-image" />
                </div>
                <h2>About Me</h2>

                <div className="text-content">

                    <p>
                        I am a software developer with a keen interest in artificial intelligence and programming.
                        Originally from Brazil and now based in Toronto, Canada, I am pursuing a fast-track diploma in Artificial Intelligence -
                        Software Engineering Technology at Centennial College. My journey in technology began with a passion for problem-solving
                        and the creative potential of code. Over the years, I've developed expertise in various programming languages and AI tools,
                        always eager to stay ahead of the curve in the rapidly evolving tech landscape.
                    </p>

                    <p>
                        With a strong focus on delivering innovative and efficient solutions, I aim to make an impact through technology, whether
                        it's by building intelligent systems, contributing to the open-source community, or developing new AI-driven applications.
                        My portfolio reflects my dedication to continuous learning and improvement, as well as my commitment to pushing the boundaries
                        of what's possible with AI and software development.
                    </p>

                    <button onClick={handleToggleResume} className="resume-button">
                        {showResume ? 'Hide Resume' : 'Show Resume'}
                    </button>
                    <a href="../src/assets/resume/resume.pdf" download>
                        <button className={"downloadBt"}>Download PDF</button>
                    </a>
                    {showResume && <img src={resumeImage} alt="Resume" className="resume-image" />}
                </div>
            </div>
        </div>
    );
}