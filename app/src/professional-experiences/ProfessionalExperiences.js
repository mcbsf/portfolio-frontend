import React, { useState, useRef } from 'react';
import { Button, Row, List } from 'antd';
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
                            <Row>
                                <div className='exp-title'>
                                    <h3>{experience.company} - {experience.position}</h3>
                                </div>

                            </Row>
                            <div className='professional-exp-details' ref={(ref) => (detailsRefs.current[index] = ref)}>
                                <div className='hardskills'>
                                    <List
                                        header={<div>HardSkills</div>}
                                        itemLayout="horizontal"
                                        dataSource={experience.hardSkills}
                                        renderItem={(hardskill, index) => (
                                            <List.Item>
                                                <List.Item.Meta

                                                    title={<div className="hardskill-title" style={{ marginBottom: 0 }}>{hardskill.title}</div>}
                                                    description={<div className="hardskill-description" style={{ marginLeft: '10px' }}>{hardskill.description}</div>}
                                                />
                                            </List.Item>
                                        )}
                                    />
                                </div>
                                <div className='responsabilities'></div>
                                <Button
                                    type="primary"
                                    shape="circle"
                                    size="small"
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