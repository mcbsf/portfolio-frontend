import React, { useState, useRef } from 'react';
import { List } from 'antd';
import './ProfessionalExperiences.css';
import { ProfessionalExperiencesDataStructure } from './ProfessionalExperiencesDataStructure';
import QuestionBtn from '../../assets/mario-question.png';

function ProfessionalExperiences() {
    const professionalExperiences = ProfessionalExperiencesDataStructure;
    const [expandedIndex, setExpandedIndex] = useState(null);
    const detailsRefs = useRef([]);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
        if (expandedIndex !== index) {
            setTimeout(() => {
                detailsRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 50);
        }
    };

    const isAnyExpanded = expandedIndex !== null;

    return (
        <div className="experience-section">
            {!isAnyExpanded && <h2>Professional Experience</h2>}

            {professionalExperiences.map((experience, index) => (
                <div key={index} className="experience-item">
                    {/* Collapsed view - list of experiences */}
                    {!isAnyExpanded && (
                        <article className="experience-list-item">
                            <div className="experience-header">
                                <div className="experience-info">
                                    <h3>{experience.company} – <span className="position-label">{experience.position}</span></h3>
                                    <p className="duration">{experience.duration}</p>
                                </div>
                                <button
                                    className="experience-expand-btn"
                                    onClick={() => toggleExpand(index)}
                                    aria-label={`Expand ${experience.company} details`}
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
                                <h3>{experience.company} – {experience.position}</h3>
                                <button
                                    className="detail-close-btn"
                                    onClick={() => toggleExpand(index)}
                                    aria-label="Close details"
                                    title="Close"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Panel content - two columns */}
                            <div className="detail-content">
                                {/* Hard Skills column */}
                                <div className="detail-column">
                                    <h4 className="detail-section-header hardskills-header">Hard Skills</h4>
                                    <List
                                        dataSource={experience.hardSkills}
                                        pagination={{ pageSize: 4, position: 'bottom', size: 'small' }}
                                        renderItem={(skill) => (
                                            <List.Item className="skill-item">
                                                <div className="skill-content">
                                                    <span className="skill-title">{skill.title}</span>
                                                    <span className="skill-description">{skill.description}</span>
                                                </div>
                                            </List.Item>
                                        )}
                                    />
                                </div>

                                {/* Responsibilities column */}
                                <div className="detail-column">
                                    <h4 className="detail-section-header responsibilities-header">Responsibilities</h4>
                                    <ul className="responsibilities-list">
                                        {experience.responsibilities.map((resp, i) => (
                                            <li key={i} className="responsibility-item">{resp}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </article>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ProfessionalExperiences;