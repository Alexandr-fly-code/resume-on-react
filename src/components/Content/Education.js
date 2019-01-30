import React from 'react';

import '../../styles/content/education.css';

import SectionName from './SectionName';

const Education = () => {
    return (
        <div className="Education">
            <SectionName name="Education"/>
            <div className="wrap_colum_exp">
            
                <div className="left_exp">
                    <p className="developer_position">SENIOR WEB DEVELOPER</p>
                    <p className="start_work">Jan 2017 - Dec 2015</p>
                </div>
                <div className="right_exp">
                    <p className="company_name">Works In Lorem Ipsum - United States</p>
                    <p className="description">Porttitor amet massa Done cporttitor dolor et nisl lorem ipsum dolor molaternpretium iscon fringilla delislibero lorem ipsum sollicitudin est porttitor. tempus id fringilla. onsectetur cing elit.Nulla lorem lectus ornare diam in molestie pretium clelislibero lorem.</p>
                </div>
            
            </div>
        </div>
    );
}

export default Education;
