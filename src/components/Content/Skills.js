import React from 'react';
import SkillBar from 'react-skillbars';
import '../../styles/content/skills.css';

import SectionName from './SectionName';


const Skills = () => {
    const skills = [
        {type: "Javascript", level: 80},
        {type: "React", level: 80},
        {type: "Redux", level: 76},
        {type: "Saga", level: 65},
        {type: "HTML5", level: 90},
        {type: "CSS", level: 85},
        {type: "BEM", level: 80},
        {type: "Git", level: 70},
      ];

      
    return (
        <div className="Skills">
            <SectionName name="Skills"/>

            <SkillBar skills={skills} animationDelay={1000}
            colors = {{
                bar: '#222222',
                background: "red"
            }}/>
          </div>
    );
}

export default Skills;
