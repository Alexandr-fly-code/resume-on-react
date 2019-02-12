import React from 'react';

import Experience from './Experience';
import Skills from './Skills';

const ExperienceAndSkills = () => {
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
