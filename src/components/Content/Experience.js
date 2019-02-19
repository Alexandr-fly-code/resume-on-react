import React from 'react';
import '../../styles/content/experience.css';
import SectionName from './SectionName';

import { experiences } from '../data/experience';


const Experience = () => {

    const { experience } = experiences;
   
    return (
        <div className="Experience">
            <SectionName name="Experience"/>
            <div className="wrap_colum_exp expirience_fix">
                
                <div className="right_exp">
                {experience.map(el => 
                <>
                    <div className="company_name">{el.name} 
                            <span className="developer_position" >{el.position} </span>
                            <p>({el.workPeriod})</p>
                        </div>
                    <ul>
                        {el.activity.map(item => <ol className="description" >{item}</ol>)}
                    </ul>
                </>
                )}        
                </div>
        
            </div>


            
          </div>
    );
}

export default Experience;
