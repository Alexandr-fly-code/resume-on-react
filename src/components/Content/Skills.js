import React from 'react';
import SkillBar from 'react-skillbars';
import '../../styles/content/skills.css';

import SectionName from './SectionName';


const Skills = () => {
    const skills = [
        {type: "Javascript", level: 100},
        {type: "React", level: 100},
        {type: "Redux", level: 100},
        {type: "Saga", level: 100},
        {type: "HTML5", level: 100},
        {type: "CSS", level: 100},
        {type: "BEM", level: 100},
        {type: "Git", level: 100},
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
