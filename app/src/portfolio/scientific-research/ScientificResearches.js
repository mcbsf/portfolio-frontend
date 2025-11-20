import React, { useState, useRef } from 'react';
import './ScientificResearches.css';
import { ScientificResearchesDataStructure } from './ScientificResearchesDataStructure';
import QuestionBtn from '../../assets/mario-question.png';

function ScientificResearches() {
    const scientificResearches = ScientificResearchesDataStructure;
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
            {!isAnyExpanded && <h2>Scientific Researches</h2>}

            {scientificResearches.map((experience, index) => (
                <div key={index} className="experience-item">
                    {/* Collapsed view - list of researches */}
                    {!isAnyExpanded && (
                        <article className="experience-list-item">
                            <div className="experience-header">
                                <div className="experience-info">
                                    <h3>{experience.title} – <span className="position-label">{experience.location}</span></h3>
                                    <p className="duration">{experience.duration}</p>
                                </div>
                                <button
                                    className="experience-expand-btn"
                                    onClick={() => toggleExpand(index)}
                                    aria-label={`Expand ${experience.title} details`}
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
                                <h3>{experience.title} – {experience.location}</h3>
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
                                <div className="research-description">
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

export default ScientificResearches;