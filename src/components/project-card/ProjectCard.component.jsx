import React from 'react';
import github from "../../assets/icons/github.svg";
import './projectCard.styles.css'

const ProjectCard = ({ project: { name, image, deployed_url, github_url } }) => {
    return (
        <div className="projectcard col-md-6 col-lg-4 my-2">
            <figure className="projectcard__wrapper">
                <a href={deployed_url} rel="noreferrer" target='_blank'>
                    <img src={image}
                        alt={name}
                        className='projectCard__image' />
                </a>
                <div className="projectCard__title">
                    <a href={github_url} rel="noreferrer" target='_blank'>
                        <img src={github}
                            alt={"github link"}
                            className='projectCard__icon' />
                    </a>
                    {name}
                </div>
            </figure>
        </div>
    );
};

export default ProjectCard;