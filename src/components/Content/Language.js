import React from 'react';
import '../../styles/content/language.css';
import Bars from 'react-bars';


import SectionName from './SectionName';

const Language = () => {
    const skills = [
        {label:'Ukrainian', value:100},
        {label:'Russian', value: 100},
        {label:'English', value:25},
       
      ];
    return (
        <div className="Language">
            <SectionName name="Language"/>
            <Bars data={skills}/>
            
        </div>
    );
}

export default Language;
