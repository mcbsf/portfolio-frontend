import React, { useState, useRef } from 'react';
import './AcademicExperiences.css';
import { AcademicExperiencesDataStructure } from './AcademicExperiencesDataStructure';
import QuestionBtn from '../../assets/mario-question.png';

function AcademicExperiences() {
    const academicExperiences = AcademicExperiencesDataStructure;
    const [expandedIndex, setExpandedIndex] = useState(null);
    const detailsRefs = useRef([]);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
        if (expandedIndex !== index) {
            setTimeout(() => {
                detailsRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 50);
        }
    };

    const isAnyExpanded = expandedIndex !== null;

    return (
        <div className="experience-section">
            {!isAnyExpanded && <h2>Academic Experience</h2>}

            {academicExperiences.map((experience, index) => (
                <div key={index} className="experience-item">
                    {/* Collapsed view - list of experiences */}
                    {!isAnyExpanded && (
                        <article className="experience-list-item">
                            <div className="experience-header">
                                <div className="experience-info">
                                    <h3>{experience.course} – <span className="position-label">{experience.school}</span></h3>
                                    <p className="duration">{experience.duration}</p>
                                </div>
                                <button
                                    className="experience-expand-btn"
                                    onClick={() => toggleExpand(index)}
                                    aria-label={`Expand ${experience.course} details`}
                                    title="Click to see details"
                                >
                                    <img src={QuestionBtn} alt="" />
                                </button>
                            </div>
                        </article>
                    )}

                    {/* Expanded view - detail panel */}
                    {expandedIndex === index && (
                        <article
                            className="experience-detail-panel"
                            ref={(ref) => (detailsRefs.current[index] = ref)}
                        >
                            {/* Panel header */}
                            <div className="detail-header">
                                <h3>{experience.course} – {experience.school}</h3>
                                <button
                                    className="detail-close-btn"
                                    onClick={() => toggleExpand(index)}
                                    aria-label="Close details"
                                    title="Close"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Panel content */}
                            <div className="detail-content">
                                <div className="academic-description">
                                    {experience.description}
                                </div>
                            </div>
                        </article>
                    )}
                </div>
            ))}
        </div>
    );
}

export default AcademicExperiences;