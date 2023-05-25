import React from 'react';
import './Portfolio.css';
import { SocialIcon } from 'react-social-icons';
import ProfilePhoto from '../assets/profile.png';
import ProfessionalExperiences from '../professional-experiences/ProfessionalExperiences';
function Portfolio() {
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
    const professionalExperiences = [
        {
            company: "Creditas",
            position: "Senior Software Engineer",
            duration: "AUG 2022 - PRESENT",
            hardSkills:
                "python(flask, pandas, pytest), javascript(react), terraform, aws, gcp, circleci, postgres, sqs, metabase, kibana, prometheus",
            responsibilities: [
                "Stakeholders management to create an efficient backlog",
                "Integrations between People fintech systems with ETL processes",
                "Do automations to generate efficiency on People processes",
            ],
        },
        {
            company: "Realtask",
            position: "Senior Software Engineer",
            duration: "JAN 2022 - AUG 2022",
            hardSkills:
                "python(fastapi, pandas, pytest, pyspark), javascript(react), C#(.NET), cloudformation, aws, azure devops, jenkins, postgres, dynamo, sqs, kafka, athena, glue, cloudwatch",
            responsibilities: [
                "Worked in a project at BTG Pactual, one of the biggest investment banks in LATAM, as a Software Engineer focused on Data Engineering",
                "Cross project to segment and map costs to help interested areas",
            ],
        },
        {
            company: "Avantia",
            position: "Software Developer",
            duration: "JAN 2021 - JAN 2022",
            hardSkills: "python(opencv, tornado), typescript(angular), aws, azure devops, postgres, grey log",
            responsibilities: [
                "Developed and maintained video monitoring systems to manage Artificial Intelligence services signals, focused on security",
            ],
        },
        {
            company: "Euromecantil",
            position: "Software Engineer",
            duration: "JUN 2019 - JAN 2021",
            hardSkills: "python(pandas), php(laravel), javascript(vuejs), digital ocean, postgres",
            responsibilities: [
                "Started as a salesman and finished as IT manager in this fintech startup",
                "Planned the architecture change from monolith to microservices",
                "Managed a 3 person team to build CRM, ERP, and auditing systems",
            ],
        },
        {
            company: "VTB Solutions",
            position: "Intern Software Developer",
            duration: "FEB 2019 - JUN 2019",
            hardSkills: "C#(.NET), Power BI, MongoDB",
            responsibilities: [
                "Software Developer in software factory to build ERP and CRM for several clients",
            ],
        },
    ];

    return (
        <div className="portfolio">

            <div class='overlay-content'>
                <div className='profile-photo'>
                    <img src={ProfilePhoto} alt="Some Title" />
                </div>
                <div className='profile-data'>
                    <h1>Hello, I'm Mario!</h1>
                    <div className='text'>
                        Senior Software Engineer with a passion for leveraging my skills and experience to contribute to the growth and success of dynamic organizations. With 5+ years of experience in engineering, I bring a strong understanding of software development methodologies and best practices.
                    </div>
                    <div className='icons'>
                        <SocialIcon className='icon' url="https://www.linkedin.com/in/mario-cardoso-95393b175/" fgColor="white" />
                        <SocialIcon className='icon' url="mailto:mariocbsf@gmail.com" bgColor="red" fgColor="white" />
                        <SocialIcon className='icon' url="https://www.github.com/mcbsf" bgColor="black" fgColor="white" />
                    </div>
                </div>

            </div>
            <div className='experiences'>
                <section id="professional-experience" className="portfolio-section">
                    <ProfessionalExperiences></ProfessionalExperiences>
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
