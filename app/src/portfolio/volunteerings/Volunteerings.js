import React, { useState, useRef } from 'react';
import { Button } from 'antd';
import './Volunteerings.css';
import { VolunteeringsDataStructure } from './VolunteeringsDataStructure'
function Volunteerings() {
    const volunteerings = VolunteeringsDataStructure;

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
                detailsRef.scrollIntoView({ behavior: 'smooth' });
                
            }
        }, 10);
    };
    return (
        <div>
            <h2>Volunteerings</h2>
            {volunteerings.map((experience, index) => (

                <div className="experience">
                    
                    
                    <h3>{experience.title} -&nbsp;<span className='description'>{experience.location}</span>
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
                        <div className='volunteering-experience-box' ref={(ref) => (detailsRefs.current[index] = ref)}>

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


                            <div className='volunteering-exp-details' >
                                <p className='volunteering-description'>{experience.description}</p>
                            </div>
                        </div>
                        : null}
                </div>
            ))}
        </div>
    );
};

export default Volunteerings;