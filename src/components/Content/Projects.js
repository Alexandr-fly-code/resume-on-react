import React from 'react';
import Education from './Education';

import SectionName from './SectionName';

import '../../styles/content/projects.css';

import { projects } from '../data/projects';

const Projects = () => {

    // console.log(projects.projects)

    const stack = {
        serpstat: "react, redux, redux-saga",
    }

    const { serpstat } = stack;
    const { project } = projects;

    return (
        <div className="Projects">
        <p className="projects_text"><SectionName name="Projects"/></p>
        {project.map(({name, description, stack, github, demo}) =>
            <Education 
                // background="Projects"
                positionOrNameProject={null} 
                startOrBeginProject={null} 
                sectionName="Projects"
                stackTechnology={stack} 
                stack="Stack Technology"
                nameCompanyOrProject={name}
                description={description}
                github={github}
                demo={demo}
            />
            )}
        </div>
    );
}

export default Projects;
