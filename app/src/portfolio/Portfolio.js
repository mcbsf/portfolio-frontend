import React from 'react';
import './Portfolio.css';
import { SocialIcon } from 'react-social-icons';
import ProfilePhoto from '../assets/profile.jpg'
const Portfolio = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id tincidunt felis, eu ornare sapien.',
            imageUrl: 'project1.jpg',
            liveUrl: 'https://www.example.com/project1',
            githubUrl: 'https://www.github.com/project1',
        },
        {
            title: 'Project 2',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            imageUrl: 'project2.jpg',
            liveUrl: 'https://www.example.com/project2',
            githubUrl: 'https://www.github.com/project2',
        },
        // Add more projects here
    ];

    return (
        <div className="portfolio">

            <div class='overlay-content'>
                <div className='profile-photo'>
                    <img src={ProfilePhoto} alt="Some Title" />
                </div>
                <div className='profile-data'>
                    <h1>Hello, I'm Mario!</h1>
                    <div class='text'>
                        Some intro about me
                    </div>
                    <div>
                        <SocialIcon className='icon' url="https://www.linkedin.com/in/mario-cardoso-95393b175/" fgColor="white" />
                        <SocialIcon className='icon' url="mailto:mariocbsf@gmail.com" bgColor="red" fgColor="white" />
                        <SocialIcon className='icon' url="https://www.github.com/mcbsf" bgColor="black" fgColor="white" />
                    </div>
                </div>

            </div>
            <div className='experiences'>
                <section id="professional-experience" className="portfolio-section">
                    <h2>Professional Experience</h2>
                    {/* Add your professional experience content here */}
                </section>
                <section id="academic-experience" className="portfolio-section">
                    <h2>Academic Experience</h2>
                    {/* Add your academic experience content here */}
                </section>
                <section id="scientific-research" className="portfolio-section">
                    <h2>Scientific Research</h2>
                    {/* Add your scientific research content here */}
                </section>
                <section id="projects" className="portfolio-section">
                    <h2>Projects</h2>
                    <div className="projects">
                        {projects.map((project, index) => (
                            <div className="project" key={index}>
                                <div className="project-image">
                                    <img src={project.imageUrl} alt={project.title} />
                                </div>
                                <div className="project-details">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-links">
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            Live Demo
                                        </a>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section id="volunteering" className="portfolio-section">
                    <h2>Volunteering</h2>
                    {/* Add your volunteering content here */}
                </section>
            </div>

        </div>
    );
};

export default Portfolio;
