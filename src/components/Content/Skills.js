import React from 'react';
import SkillBar from 'react-skillbars';
import '../../styles/content/skills.css';

import SectionName from './SectionName';


const Skills = () => {
    const skills = [
        {type: "Javascript"},
        {type: "React"},
        {type: "Redux"},
        {type: "Saga"},
        {type: "HTML5"},
        {type: "CSS"},
        {type: "SCSS"},
        {type: "SASS"},
        {type: "BEM"},
        {type: "Git"},
        {type: "Bitbucket"},
        {type: "Jira"},
        {type: "Figma"}
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
