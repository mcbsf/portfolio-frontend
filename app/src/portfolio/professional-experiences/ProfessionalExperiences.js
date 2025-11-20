import React, { useState, useRef } from 'react';
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

                            {/* Panel content - two columns with aligned headers */}
                            <div className="detail-content">
                                {/* Headers row */}
                                <div className="headers-row">
                                    <h4 className="detail-section-header hardskills-header">Hard Skills</h4>
                                    <h4 className="detail-section-header responsibilities-header">Responsibilities</h4>
                                </div>
                                
                                {/* Tables row */}
                                <div className="tables-row">
                                    {/* Hard Skills table - left column */}
                                    <div className="table-column">
                                        <table className="skills-table">
                                            <tbody>
                                                {experience.hardSkills.map((skill, i) => (
                                                    <tr key={i} className="skill-row">
                                                        <td className="skill-title-cell">{skill.title}</td>
                                                        <td className="skill-description-cell">{skill.description}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Responsibilities table - right column */}
                                    <div className="table-column">
                                        <table className="responsibilities-table">
                                            <tbody>
                                                {experience.responsibilities.map((resp, i) => (
                                                    <tr key={i} className="responsibility-row">
                                                        <td className="responsibility-cell">{resp}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
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