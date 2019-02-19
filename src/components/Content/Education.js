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
        github,
        demo,
        // background,
    }
) => {
    return (
        <div className="Education_section">
            <SectionName name={sectionName === "Projects" ? null: sectionName}/>
            <div className="wrap_colum_exp">
            
                <div className="left_exp">
                    <p className="developer_position">{positionOrNameProject}</p>
                    <p className="start_work">{startOrBeginProject}</p>
                    <p className="developer_position">{stack}</p>
                    <p className="start_work">{stackTechnology}</p>
                    
                </div>
                <div className="right_exp">
                    <p className={sectionName !== "Projects" ? "company_name" : "company_name_blue"}>{nameCompanyOrProject}</p>
                    <p className="description">{description}</p>

                { sectionName === "Projects" ? github !== null || demo !== null ? 
                    <>
                        <p>Github : <a className="description" href={github} target="_blank" rel="noopener noreferrer" className="demo_link">{github}</a></p>
                        <p>Demo : <a className="description" href={demo} target="_blank" rel="noopener noreferrer" className="demo_link">{demo}</a></p>
                    </>
                    : null
                    : null
                }
                </div>
            
            </div>
        </div>
    );
}

export default Education;
