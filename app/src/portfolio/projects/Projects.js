import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Projects.css';
import { ProjectsDataStructure } from './ProjectsDataStructure';
import { Card } from 'antd';

function Projects() {
    const projects = ProjectsDataStructure;

    return (
        <div>
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        className="project-card"
                        title={
                            <div className="card-title">
                                {project.title}
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="card-github-link"
                                    aria-label={`GitHub repository for ${project.title}`}
                                >
                                    <SocialIcon
                                        url={project.githubUrl}
                                        bgColor="black"
                                        fgColor="white"
                                    />
                                </a>
                            </div>
                        }
                        bordered={false}
                    >
                        <p className="card-description">{project.description}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Projects;