import React from 'react';

import '../../styles/content/experienceAndSkills.css';

import Experience from './Experience';
import Skills from './Skills';


const ExperienceAndSkills = ({props}) => {

    console.log(props)
    return (
        <div className="Experience_skills" >
            <Experience 
                positionOrNameProject="Front End developer" 
                startOrBeginProject="2015" 
                sectionName="Projects"
                stackTechnology={null} 
                stack={null}
                nameCompanyOrProject="Projects"
                description="description"/>
            <Skills/>
        </div>
    );
}

export default ExperienceAndSkills;
