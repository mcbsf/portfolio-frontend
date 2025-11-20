import React, { useState, useRef } from 'react';
import './AcademicExperiences.css';
import '../Experience/Experience.css';
import { AcademicExperiencesDataStructure } from './AcademicExperiencesDataStructure';
import Experience from '../Experience/Experience';

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
                <Experience
                    key={index}
                    index={index}
                    experience={experience}
                    isExpanded={expandedIndex === index}
                    onToggleExpand={toggleExpand}
                    detailRef={(ref) => (detailsRefs.current[index] = ref)}
                    classPrefix="academic"
                    titleContent={experience.course}
                    subtitleContent={experience.school}
                    durationText={experience.duration}
                    expandedContent={
                        <div>
                            {/* Panel header */}
                            <div className="academic-detail-header">
                                <h3>{experience.course} – {experience.school}</h3>
                                <button
                                    className="academic-detail-close-btn"
                                    onClick={() => toggleExpand(index)}
                                    aria-label="Close details"
                                    title="Close"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Panel content */}
                            <div className="academic-detail-content">
                                <div className="academic-description">
                                    {experience.description}
                                </div>
                            </div>
                        </div>
                    }
                />
            ))}
        </div>
    );
}

export default AcademicExperiences;