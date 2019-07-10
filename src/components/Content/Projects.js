import React from 'react';
import Education from './Education';

import SectionName from './SectionName';
import PropTypes from 'prop-types';

import '../../styles/content/projects.css';

const Projects = ({...rest}) => {

    return (
        <div className="Projects">
            <div className="projects_text">
        <SectionName name="Projects"/></div>
        {rest.projects.project.map(({name, description, stack, github, demo, link}) =>
            <Education 
                positionOrNameProject={null} 
                startOrBeginProject={null} 
                sectionName="Projects"
                stackTechnology={stack} 
                stack="Stack Technology"
                nameCompanyOrProject={name}
                description={description}
                github={github}
                demo={demo}
                key={name}
                link={link}
            />
            )}
        </div>
    )

}

Projects.propTypes = {
    rest: PropTypes.object,
}


export default Projects;
