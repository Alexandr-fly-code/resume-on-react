import React, { Component } from 'react';

import Experience from './Experience';
import Skills from './Skills';

import Education from './Education';

import Hobbies from './Hobbies';
import Language from './Language';

import Projects from './Projects';


import '../../styles/content/Content.css';

export default class Content extends Component {
  render() {
    return (
      <div className="Content">
      <Projects/>
      
        <div className="Experience_skills">
          <Experience/>
          <Skills/>

        </div>
        <Education 
          // background="Education"
          sectionName="Education"
          positionOrNameProject="Middle" 
          startOrBeginProject="Jan 2017 - Dec 2015" 
          stackTechnology={null}
          stack={null}
          nameCompanyOrProject="Works In Lorem Ipsum - United States"
          description="Porttitor amet massa Done cporttitor dolor et nisl lorem ipsum dolor molaternpretium iscon fringilla delislibero lorem ipsum sollicitudin est porttitor. tempus id fringilla. onsectetur cing elit.Nulla lorem lectus ornare diam in molestie pretium clelislibero lorem."/>
        

        <div className="Hobbies_Language">
          <Hobbies/>
          <Language/>
        </div>
      </div>
    )
  }
}
