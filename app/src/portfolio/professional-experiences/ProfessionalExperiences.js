import React, { useState, useRef } from 'react';
import { Button, List } from 'antd';
import './ProfessionalExperiences.css';
import { ProfessionalExperiencesDataStructure } from './ProfessionalExperiencesDataStructure'
import QuestionBtn from '../../assets/mario-question.png';

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
            }
        }, 10);
    };
    return (
        <div>
            {hide.every(v => v === false) ?<h2>Professional Experience</h2>:null}
            {professionalExperiences.map((experience, index) => (
                
                <div className="experience">
                    {hide.every(v => v === false) ?
                        
                        <div>
                            
                    <h3>{experience.company} - &nbsp;<span className='description'>{experience.position} </span>
                        <div 
                            className='question-photo question-main'
                            onClick={() => {
                                expand(index);
                            }}
                        >
                            <img src={QuestionBtn} alt="Some Title" />
                        </div>
                        
                    </h3>
                    <p>{experience.duration}</p>
                    </div>:null}

                    {hide[index] ?
                        <div className='prof-experience-box' ref={(ref) => (detailsRefs.current[index] = ref)}>

                            <div className='exp-title'>
                                <span className='whitespace'>asd</span>

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
                                <h3>{experience.company} - {experience.position}</h3>
                            </div>


                            <div className='professional-exp-details' >
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
                                        pagination={{
                                            position: "bottom",
                                            size: "small",
                                            pageSize: 4,
                                            align: "center"
                                            
                                        }}
                                    />
                                </div>
                                <div className='blank' />
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
                            </div>
                        </div>
                        : null}
                </div>
            ))}
        </div>
    );
};

export default ProfessionalExperiences;