import React from 'react';

import '../../styles/content/experienceAndSkills.css';

import Experience from './Experience';
import Skills from './Skills';


const ExperienceAndSkills = ({...rest}) => {
    return (
        <div className="Experience_skills" >
            <Experience 
                experience={rest.experience}
                />
            <Skills/>
        </div>
    );
}

export default ExperienceAndSkills;
