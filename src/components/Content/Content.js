import React, { Component } from 'react';

import Experience from './Experience';
import Skills from './Skills';

import Education from './Education';

import Hobbies from './Hobbies';
import Language from './Language';

import Projects from './Projects';

import { educations } from '../data/educations';

import SectionName from '../Content/SectionName';


import '../../styles/content/Content.css';

export default class Content extends Component {
  render() {
    const { education } = educations;
    return (
      <div className="Content">
      <Projects/>
      
        <div className="Experience_skills">
        
          <Experience/>
          <Skills/>

        </div>
        <div className="Education">
        
        <SectionName name="Education"/>
        {education.map(({educationalInstitution, professionalDirection, yearsOfStudy }) => 
          
          <Education 
            sectionName={null}
            positionOrNameProject={null} 
            startOrBeginProject={yearsOfStudy} 
            stackTechnology={null}
            stack={null}
            nameCompanyOrProject={educationalInstitution}
            description={professionalDirection}
            key={yearsOfStudy}/>
            
        )}
        </div>

        

        <div className="Hobbies_Language">
          <Hobbies/>
          <Language/>
        </div>
      </div>
    )
  }
}
