import React, { useState, useRef } from 'react';
import { Button } from 'antd';
import './ScientificResearches.css';
import { ScientificResearchesDataStructure } from './ScientificResearchesDataStructure';
import QuestionBtn from '../../assets/mario-question.png';
function ScientificResearches() {
    const volunteerings = ScientificResearchesDataStructure;

    const [hide, setHide] = useState(Array(volunteerings.length).fill(false));

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
            <h2>Scientific Researches</h2>
            {volunteerings.map((experience, index) => (

                <div className="experience">


                    <h3>{experience.title} -&nbsp;<span className='description'>{experience.location}</span>
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

export default ScientificResearches;