import React, { useState, useRef } from 'react';
import { Button, List } from 'antd';
import './ProfessionalExperiences.css';
import { ProfessionalExperiencesDataStructure } from './ProfessionalExperiencesDataStructure'
function ProfessionalExperiences() {
    const professionalExperiences = ProfessionalExperiencesDataStructure;

    const [hide, setHide] = useState(Array(professionalExperiences.length).fill(false));

    const detailsRefs = useRef([]);
    const expand = (index) => {
        setHide((prevHide) => {
            const updatedHide = [...prevHide];
            updatedHide[index] = !updatedHide[index];
            if (updatedHide[index]) {
                scrollToDetails(index);
            }
            return updatedHide;
        });

    }
    const scrollToDetails = (index) => {
        setTimeout(() => {
            const detailsRef = detailsRefs.current[index];
            if (detailsRef) {
                console.log(detailsRef)
                detailsRef.scrollIntoView({ behavior: 'smooth' });
            }
        }, 10);
    };
    return (
        <div>
            <h2>Professional Experience</h2>
            {professionalExperiences.map((experience, index) => (

                <div className="experience">
                    <h3>{experience.company} - {experience.position}
                        <Button
                            type="primary"
                            shape="circle"
                            size="small"
                            className="expand-btn"
                            onClick={() => {
                                expand(index);
                            }}
                        >
                            {hide[index] ? '-' : '+'}
                        </Button>
                    </h3>
                    <p>{experience.duration}</p>

                    {hide[index] ?
                        <div>
                            <div className='exp-title'>
                                <h3>{experience.company} - {experience.position}</h3>
                            </div>

                            <div className='professional-exp-details' ref={(ref) => (detailsRefs.current[index] = ref)}>
                                <div className='hardskills'>
                                    <List
                                        size='small'
                                        header={
                                            <h1>
                                                <span className='hardskills-style'>HardSkills</span>
                                            </h1>}
                                        itemLayout="horizontal"
                                        className='custom-experience-list'
                                        dataSource={experience.hardSkills}
                                        renderItem={(hardskill, index) => (
                                            <List.Item
                                                className='exp-grid'
                                            >
                                                <List.Item.Meta

                                                    title={<div className="hardskill-title">{hardskill.title}</div>}
                                                    description={<div className="hardskill-description">{hardskill.description}</div>}
                                                />
                                            </List.Item>
                                        )}
                                    />
                                </div>
                                <div className='blank'/> 
                                <div className='responsabilities'>
                                    <List
                                        size='small'
                                        header={
                                            <h1>
                                                <span className='responsabilities-style'>Responsabilities</span>
                                            </h1>}
                                        itemLayout="horizontal"
                                        className='custom-experience-list-responsabilities'
                                        dataSource={experience.responsibilities}
                                        renderItem={(responsability, index) => (
                                            <List.Item
                                                className='exp-grid'
                                            >
                                                <List.Item.Meta

                                                    title={<div className="hardskill-title">{responsability}</div>}
                                                />
                                            </List.Item>
                                        )}
                                    />
                                </div>
                                <Button
                                    type="primary"
                                    danger
                                    shape="circle"
                                    size="middle"
                                    className='collapse-btn'
                                    onClick={() => expand(index)}
                                >
                                    x
                                </Button>
                            </div>
                        </div>
                        : null}
                </div>
            ))}
        </div>
    );
};

export default ProfessionalExperiences;