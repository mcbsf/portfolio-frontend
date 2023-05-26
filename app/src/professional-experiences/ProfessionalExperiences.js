import React, { useState, useRef } from 'react';
import { Button, Row, List } from 'antd';
import './ProfessionalExperiences.css';
function ProfessionalExperiences() {
    const professionalExperiences = [
        {
            company: "Creditas",
            position: "Senior Software Engineer",
            duration: "AUG 2022 - PRESENT",
            hardSkills: [
                { 'title': 'python', 'description': 'flask, pandas, pytest' },
                { 'title': 'javascript', 'description': 'react' },
                { 'title': 'terraform', 'description': '' },
                { 'title': 'aws', 'description': '' },
                { 'title': 'gcp', 'description': '' },
                { 'title': 'circleci', 'description': '' },
                { 'title': 'postgres', 'description': '' },
                { 'title': 'sqs', 'description': '' },
                { 'title': 'metabase', 'description': '' },
                { 'title': 'kibana', 'description': '' },
                { 'title': 'prometheus', 'description': '' }
            ],
            responsibilities: [
                "Stakeholders management to create an efficient backlog",
                "Integrations between People fintech systems with ETL processes",
                "Do automations to generate efficiency on People processes"
            ],
        },
        {
            company: "Realtask",
            position: "Senior Software Engineer",
            duration: "JAN 2022 - AUG 2022",
            hardSkills: [
                {
                    'title': "python(fastapi, pandas, pytest, pyspark)",
                    'description': ''
                },
                {
                    'title': "javascript(react)",
                    'description': ''
                },
                {
                    'title': "C#(.NET)",
                    'description': ''
                },
                {
                    'title': "cloudformation",
                    'description': ''
                },
                {
                    'title': "aws",
                    'description': ''
                },
                {
                    'title': "azure devops",
                    'description': ''
                },
                {
                    'title': "jenkins",
                    'description': ''
                },
                {
                    'title': "postgres",
                    'description': ''
                },
                {
                    'title': "dynamo",
                    'description': ''
                },
                {
                    'title': "sqs",
                    'description': ''
                },
                {
                    'title': "kafka",
                    'description': ''
                },
                {
                    'title': "athena",
                    'description': ''
                },
                "glue",
                "cloudwatch"
            ],
            responsibilities: [
                "Worked in a project at BTG Pactual, one of the biggest investment banks in LATAM, as a Software Engineer focused on Data Engineering",
                "Cross project to segment and map costs to help interested areas"
            ],
        },
        {
            company: "Avantia",
            position: "Software Developer",
            duration: "JAN 2021 - JAN 2022",
            hardSkills: [
                "python(opencv, tornado)",
                "typescript(angular)",
                "aws",
                "azure devops",
                "postgres",
                "grey log"
            ],
            responsibilities: [
                "Developed and maintained video monitoring systems to manage Artificial Intelligence services signals, focused on security"
            ],
        },
        {
            company: "Euromecantil",
            position: "Software Engineer",
            duration: "JUN 2019 - JAN 2021",
            hardSkills: [
                { 'title': 'python', 'description': 'opencv, tornado' },
                { 'title': 'typescript', 'description': 'angular' },
                { 'title': 'aws', 'description': '' },
                { 'title': 'azure devops', 'description': '' },
                { 'title': 'postgres', 'description': '' },
                { 'title': 'grey log', 'description': '' }
            ],
            responsibilities: [
                "Started as a salesman and finished as IT manager in this fintech startup",
                "Planned the architecture change from monolith to microservices",
                "Managed a 3 person team to build CRM, ERP, and auditing systems"
            ],
        },
        {
            company: "VTB Solutions",
            position: "Intern Software Developer",
            duration: "FEB 2019 - JUN 2019",
            hardSkills: [
                { 'title': 'C#', 'description': '.NET' },
                { 'title': 'Power BI', 'description': '' },
                { 'title': 'MongoDB', 'description': '' }
            ],
            responsibilities: [
                "Software Developer in software factory to build ERP and CRM for several clients"
            ],
        },
    ];

    const [hide, setHide] = useState(Array(professionalExperiences.length).fill(false));

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
            <h2>Professional Experience</h2>
            {professionalExperiences.map((experience, index) => (

                <div className="experience">
                    <h3>{experience.company} - {experience.position}
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
                        <div>
                            <Row>
                                <div className='exp-title'>
                                    <h3>{experience.company} - {experience.position}</h3>
                                </div>

                            </Row>

                            <div className='professional-exp-details' ref={(ref) => (detailsRefs.current[index] = ref)}>

                                <div className='hardskills'>

                                        <List
                                            header={<div>HardSkills</div>}
                                            itemLayout="horizontal"
                                            dataSource={experience.hardSkills}
                                            renderItem={(hardskill, index) => (
                                                <List.Item>
                                                    <List.Item.Meta

                                                        title={<div className="hardskill-title" style={{ marginBottom: 0 }}>{hardskill.title}</div>}
                                                        description={<div className="hardskill-description" style={{ marginLeft: '10px' }}>{hardskill.description}</div>}
                                                    />
                                                </List.Item>
                                            )}
                                        />

                                </div>
                                <div className='responsabilities'></div>
                                <Button
                                    type="primary"
                                    shape="circle"
                                    size="small"
                                    className='collapse-btn'
                                    onClick={() => expand(index)}
                                >
                                    x
                                </Button>
                            </div>
                        </div>
                        : null}
                </div>
            ))}
        </div>
    );
};

export default ProfessionalExperiences;