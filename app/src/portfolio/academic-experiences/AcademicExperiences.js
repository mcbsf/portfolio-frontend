import React, { useState, useRef } from 'react';
import { Button } from 'antd';
import './AcademicExperiences.css';
import { AcademicExperiencesDataStructure } from './AcademicExperiencesDataStructure';
import QuestionBtn from '../../assets/mario-question.png';

function AcademicExperiences() {
    const academicExperiences = AcademicExperiencesDataStructure;

    const [hide, setHide] = useState(Array(academicExperiences.length).fill(false));

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
                //detailsRef.scrollIntoView({ behavior: 'smooth' });
                
            }
        }, 10);
    };
    return (
        <div>
            <h2>Academic Experience</h2>
            {academicExperiences.map((experience, index) => (

                <div className="experience">
                    <h3>{experience.course} -&nbsp; <span className='description'> {experience.school}</span>
                    <div
                            className='question-photo'
                            onClick={() => {
                                expand(index);
                            }}
                        >
                            <img src={QuestionBtn} alt="Some Title" />
                        </div>
                    </h3>
                    <p>{experience.duration}</p>

                    {hide[index] ?
                        <div className='academic-experience-box' ref={(ref) => (detailsRefs.current[index] = ref)}>

                            <div className='exp-title'>

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


                            <div className='academic-exp-details' >
                                <p className='academic-description'>{experience.description}</p>
                            </div>
                        </div>
                        : null}
                </div>
            ))}
        </div>
    );
};

export default AcademicExperiences;