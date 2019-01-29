import React from 'react';

import '../../styles/abouMe.css';

const AboutMe = () => {
    return (
        <div className="AboutMe">
            <div className="TopAboutMe">
                <ul className="wrap_contact">
                    <li><span className="color_text">Phone</span> <span className="color_info">: +380630767672</span></li>
                    <li><span className="color_text">Area</span> <span className="color_info">: Kiev</span></li>
                    <li><span className="color_text">Email</span> <span className="color_info">: alexandr1997stupak@gmail.com</span></li>
                </ul>
            </div>
            <div className="BottomAboutMe">
                <p className="name_about_me">
                    About Me
                </p>
                <p className="text_about_me">
                    Porttitor amet massa Done cporttitor dolor et nisl lorem ipsum dolor molaternpretium iscon fringilla delislibero lorem ipsum sollicitudin est porttitor. tempus id fringilla. onsectetur cing elit.Nulla lorem lectus ornare diam in molestie pretium clelislibero lorem.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;