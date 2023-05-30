import React, { useState, useRef } from 'react';
import { SocialIcon } from 'react-social-icons';
import './Projects.css';
import { ProjectsDataStructure } from './ProjectsDataStructure'
import { Card } from 'antd';

function Projects() {
    const projects = ProjectsDataStructure;

    return (
        <div>
            <h2>Projects</h2>
            <div className="projects">
                {projects.map((project, index) => (
                        
                        <Card 
                            className='col-sm-6'
                            title=<div>
                                    {project.title}
                                    <SocialIcon className='icon' url={project.githubUrl} bgColor="black" fgColor="white" /> 
                                </div>
                            bordered={false} style={{ width: 300 }}>
                            {project.description}
                            
                        </Card>

                ))}

            </div>
        </div>
    );
};

export default Projects;