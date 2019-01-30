import React from 'react';

import '../../styles/content/hobbies.css';
import Photography from '../../img/photo-camera.svg';
import Music from '../../img/headphones.svg';
import Code from '../../img/html.svg';
import Basketball from '../../img/basketball.svg';
import Tennis from '../../img/tennis-ball.svg';
import Little from '../../img/pin-pong.svg';

import SectionName from './SectionName';

const Hobbies = () => {
    return (
        <div className="Hobbies">

        <SectionName name="Hobbies"/>

            <ul className="wrap_hobbies">
                
                <li className="item_hobbies"><img src={Photography} alt="Photography"/>Photo</li>
                <li className="item_hobbies"><img src={Code} alt="code"/>Code</li>
                <li className="item_hobbies"><img src={Tennis} alt="Tennis"/>Tennis</li>
                <li className="item_hobbies"><img src={Music} alt="Photography"/>Music</li>
                <li className="item_hobbies"><img src={Little} alt="Little"/>Little tennis</li>
            </ul>
        </div>
    );
}

export default Hobbies;
