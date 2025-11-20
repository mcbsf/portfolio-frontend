import React from 'react';
import './Experience.css';
import QuestionBtn from '../../assets/mario-question.png';

function Experience({
    index,
    experience,
    isExpanded,
    onToggleExpand,
    detailRef,
    classPrefix,
    titleContent,
    subtitleContent,
    durationText,
    expandedContent,
}) {
    return (
        <div className="experience-item">
            {/* Collapsed view - list of experiences */}
            {!isExpanded && (
                <article className="expandable-item">
                    <div className="expandable-header">
                        <div className="expandable-info">
                            <h3>
                                {titleContent} – <span className="expandable-position-label">{subtitleContent}</span>
                            </h3>
                            <p className="expandable-duration">{durationText}</p>
                        </div>
                        <button
                            className="expandable-expand-btn"
                            onClick={() => onToggleExpand(index)}
                            aria-label={`Expand ${titleContent} details`}
                            title="Click to see details"
                        >
                            <img src={QuestionBtn} alt="" />
                        </button>
                    </div>
                </article>
            )}

            {/* Expanded view - detail panel */}
            {isExpanded && (
                <article
                    className={`${classPrefix}-detail-panel`}
                    ref={detailRef}
                >
                    {expandedContent}
                </article>
            )}
        </div>
    );
}

export default Experience;
