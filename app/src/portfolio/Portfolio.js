import React from 'react';
import './Portfolio.css';
import { SocialIcon } from 'react-social-icons';
import ProfilePhoto from '../assets/profile.png';
import ChatBot from './chat-bot/ChatBot';
import ProfessionalExperiences from './professional-experiences/ProfessionalExperiences';
import AcademicExperiences from './academic-experiences/AcademicExperiences';
import Projects from './projects/Projects';
import ScientificResearches from './scientific-research/ScientificResearches';
import Volunteerings from './volunteerings/Volunteerings';

function Portfolio() {
    return (
        <main className="portfolio">
            {/* Bio card that overlaps header and main content */}
            <div className="bio-container">
                <article className="bio-card">
                    <div className="bio-photo">
                        <img src={ProfilePhoto} alt="Mario Cardoso" />
                    </div>
                    <div className="bio-content">
                        <h1 className="bio-title">It's me, Mario!</h1>
                        <div className="bio-text">
                            <p>
                                Senior Software Engineer with a passion for building and maintaining complex web applications. I leverage my Software Engineering expertise to deliver high-quality and impactful projects, be it automating processes for massive growth (40% increase for a startup!) or building real-time auditing systems for one of the biggest banks in LATAM, BTG Pactual.
                            </p>
                            <p>
                                I have over five years in Software Engineering processes, ten years of general experience in IT, and fifteen if we consider coding scripts for game hacking and VPN configuration as a teenager.
                            </p>
                        </div>
                        <nav className="bio-social">
                            <SocialIcon url="mailto:mariocbsf@gmail.com" bgColor="red" fgColor="white" />
                            <SocialIcon url="https://www.github.com/mcbsf" bgColor="black" fgColor="white" />
                            <SocialIcon url="https://www.linkedin.com/in/mario-cardoso-95393b175/" fgColor="white" />
                        </nav>
                    </div>
                </article>
            </div>

            {/* Floating chatbot */}
            <ChatBot />

            {/* Main content sections */}
            <section id="professional-experience" className="portfolio-section">
                <ProfessionalExperiences />
            </section>

            <section id="academic-experience" className="portfolio-section">
                <AcademicExperiences />
            </section>

            <section id="projects" className="portfolio-section">
                <Projects />
            </section>

            <section id="scientific-research" className="portfolio-section">
                <ScientificResearches />
            </section>

            <section id="volunteering" className="portfolio-section">
                <Volunteerings />
            </section>
        </main>
    );
}

export default Portfolio;
