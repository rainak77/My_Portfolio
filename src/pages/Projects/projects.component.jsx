import React, { useState } from 'react';
import data_projects from "../../assets/data/projects-data";
import ProjectCard from '../../components/project-card/ProjectCard';
import './projects.style.css';

export const Projects = () => {
    const [projects, setProjects] = useState(data_projects);
    const [active, setActive] = useState('All');

    const handleFilterCategory = (name) => {
        const new_array = data_projects.filter(project => project.category.includes(name));
        setProjects(new_array);
        setActive(name);
    };
    return (
        <div className="pt-3 pb-3" id="skills">
            <h1 className="text-center font-details-b pb-4">PROJECTS</h1>
            <div className="container projects">
                <div className="projects__navbar">
                    <div className={active === 'All' ? 'active_item' : null} onClick={() => { setProjects(data_projects); setActive('All'); }}> All </div>
                    <div className={active === 'react.js' ? 'active_item' : null} onClick={() => handleFilterCategory('react.js')}>React.js</div>
                    <div className={active === 'Asp.net' ? 'active_item' : null} onClick={() => handleFilterCategory('Asp.net')}>Asp.net </div>
                    <div className={active === 'node.js' ? 'active_item' : null} onClick={() => handleFilterCategory('node.js')}>node</div>
                </div>

                <div className="row">
                    {

                        projects.map(project =>
                            <ProjectCard key={project.name} project={project} />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

