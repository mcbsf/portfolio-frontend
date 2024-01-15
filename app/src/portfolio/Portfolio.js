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
        <div className="portfolio">
            
            <div class='overlay-content'>
                <div className='profile-photo'>
                    <img src={ProfilePhoto} alt="Some Title" />
                </div>
                <div className='profile-data'>
                    <h1 className='hello'>It's me, Mario!</h1>
                    <div className='text'>
                        <p>
                        Senior Software Engineer with a passion for building and maintaining complex web applications. I leverage my Software Engineering expertise to deliver high-quality and impactful projects, be it automating processes for massive growth (40% increase for a startup!) or building real-time auditing systems for one of the biggest banks in LATAM, BTG Pactual.
                        </p>
                        <p>
                        I have over five years in Software Engineering processes, ten years of general experience in IT, and fifteen if we consider coding scripts for game hacking and VPN configuration as a teenager.
                        </p>
                    </div>
                    <div className='icons'>
                        <SocialIcon className='icon' url="mailto:mariocbsf@gmail.com" bgColor="red" fgColor="white" />
                        <SocialIcon className='icon' url="https://www.github.com/mcbsf" bgColor="black" fgColor="white" />
                        <SocialIcon className='icon' url="https://www.linkedin.com/in/mario-cardoso-95393b175/" fgColor="white" />
                    </div>
                </div>

            </div>
            <ChatBot></ChatBot>
            <div className='experiences'>
                <section id="professional-experience" className="portfolio-section">
                    <ProfessionalExperiences></ProfessionalExperiences>
                </section>
                <section id="academic-experience" className="portfolio-section">
                    {/* Add your academic experience content here */}

                    <AcademicExperiences></AcademicExperiences>
                </section>
                <section id="projects" className="portfolio-section">
                    <Projects></Projects>
                </section>
                <section id="scientific-research" className="portfolio-section">
                    {/* Add your scientific research content here */}
                    <ScientificResearches></ScientificResearches>
                </section>
                <section id="volunteering" className="portfolio-section">
                    <Volunteerings></Volunteerings>
                </section>
            </div>

        </div>
    );
};

export default Portfolio;
