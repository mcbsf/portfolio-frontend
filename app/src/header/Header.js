
import './Header.css';
import React, { useState, useEffect } from 'react';

function HeaderLike() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Collapse header when scrolled past hero section (e.g., 100px)
            setIsCollapsed(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`portfolio-header ${isCollapsed ? 'collapsed' : 'expanded'}`}>
                <nav className="portfolio-nav">
                    <ul className="nav-list">
                        <li><a href="#bio">Who Am I</a></li>
                        <li><a href="#professional-experience">Professional Experience</a></li>
                        <li><a href="#academic-experience">Academic Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#scientific-research">Scientific Research</a></li>
                        <li><a href="#volunteering">Volunteering</a></li>
                    </ul>
                </nav>
            </header>
            <div className="header-hero" id="bio"></div>
        </>
    );
}

export default HeaderLike;
