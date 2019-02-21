import React, { Component } from 'react';

import Experience from './Experience';
import Skills from './Skills';

import Education from './Education';

import Hobbies from './Hobbies';
import Language from './Language';

import Projects from './Projects';


import SectionName from '../Content/SectionName';

import PropTypes from 'prop-types';


import '../../styles/content/Content.css';
export default class Content extends Component {
  
  render() {
    const { projects, experiences, educations } = this.props.data;
    const { education } = educations;
    return (
      <div className="Content">

      <Projects projects={projects}/>
        <div className="Experience_skills">
        
        <Experience experience={experiences}/>
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



Content.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape({
    contacts: PropTypes.objectOf(PropTypes.shape({
      phone: PropTypes.string,
      email: PropTypes.string,
      skype: PropTypes.string,
      area: PropTypes.string,
    })),
    educations: PropTypes.objectOf(PropTypes.shape({
      education: PropTypes.array,
    })),
    experiences: PropTypes.objectOf(PropTypes.shape({
      experience: PropTypes.array,
    })),
    objective: PropTypes.objectOf(PropTypes.shape({
      text: PropTypes.string,
    })),
    projects: PropTypes.arrayOf(PropTypes.shape({
      project: PropTypes.array,
    }))
  }))
}