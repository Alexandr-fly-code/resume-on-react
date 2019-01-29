import React, { Component } from 'react';

import Experience from './Experience';
import Skills from './Skills';

import '../../styles/content/Content.css';

export default class Content extends Component {
  render() {
    return (
      <div className="Content">
        <div className="Experience_skills">
          
          <Experience/>
          <Skills/>
          
        </div>
        
      </div>
    )
  }
}
