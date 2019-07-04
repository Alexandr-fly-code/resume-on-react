import React from 'react';
import '../../styles/content/experience.css';
import SectionName from './SectionName';

const Experience = ({...rest}) => {

    const { experience } = rest.experience;
   
    return (
        <div className="Experience">
            <SectionName name="Experience"/>
            <div className="wrap_colum_exp expirience_fix">
                
                <div className="right_exp">
                {experience.map((el, indx) => 
                <>
                    <div className="company_name" key={indx}>{el.name} 
                            <span className="developer_position" >{el.position} </span>
                            <p>({el.workPeriod})</p>
                        </div>
                    <ul>
                        {el.activity.map((item, index) => <ol className="description" key={index}>{item}</ol>)}
                    </ul>
                </>
                )}        
                </div>
        
            </div>


            
          </div>
    );

}

export default Experience;
