import React from 'react';
import Mailto from 'react-protected-mailto';
import SectionName from '../Content/SectionName';

import PropTypes from 'prop-types';

import '../../styles/abouMe.css';

const AboutMe = ({dataObjective, dataContacts}) => {
    const { phone, email, skype, area } = dataContacts;
    const { text } = dataObjective;
    return (
        <div className="AboutMe">
            <div className="TopAboutMe">
                <ul className="wrap_contact">
                    <SectionName name="Contacts"/>
                        <li>
                            <span className="color_text">Phone</span> 
                            <span className="color_info">: {phone}</span></li>
                        <li>
                            <span className="color_text">Area</span> 
                            <span className="color_info">: {area}</span></li>
                        <li>
                            <span className="color_text">Email</span> 
                            <span className="color_info">:
                    <Mailto
                        email={email}
                        headers={
                            {subject:'alexandr1997stupak@gmail.com'},
                            {cc:'alexandr1997stupak@gmail.com'}
                        }/></span></li>
                    <li>
                        <span className="color_text">Skype</span> 
                        <span className="color_info">: {skype}</span></li>

                    <li>
                        <span className="color_text">Linkedin</span> 
                        <a className="color_info color_active" href="https://www.linkedin.com/in/alexandr-stupak-b1454916a/" target="_blank" rel="noopener noreferrer">: go to profile :)</a></li>
                </ul>
            </div>
            <div className="BottomAboutMe">
                <p className="name_about_me">
                    objective
                </p>
                <p className="text_about_me">
                        {text}
                </p>
            </div>
        </div>
    );
};


AboutMe.propTypes = {
    dataObjective: PropTypes.object,
    dataContacts: PropTypes.object,
  }
export default AboutMe;