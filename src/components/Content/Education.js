import React from 'react';

import '../../styles/content/education.css';

import SectionName from './SectionName';

const Education = (
    {
        positionOrNameProject,
        startOrBeginProject,
        stackTechnology,
        stack,
        nameCompanyOrProject,
        description,
        sectionName,
        // background,
    }
) => {
    return (
        <div className="Education">
            <SectionName name={sectionName}/>
            <div className="wrap_colum_exp">
            
                <div className="left_exp">
                    <p className="developer_position">{positionOrNameProject}</p>
                    <p className="start_work">{startOrBeginProject}</p>
                    <p className="developer_position">{stack}</p>
                    <p className="start_work">{stackTechnology}</p>
                    
                </div>
                <div className="right_exp">
                    <p className="company_name">{nameCompanyOrProject}</p>
                    <p className="description">{description}</p>
                </div>
            
            </div>
        </div>
    );
}

export default Education;
