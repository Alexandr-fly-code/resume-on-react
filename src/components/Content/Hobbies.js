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

    const altProps = {
        photo: 'Photography',
        code: 'Code',
        tennis: 'Tennis',
        music: 'Music',
        little: 'Little tennis',
    }
    const { photo, code, tennis, music, little } = altProps;
    return (
        <div className="Hobbies">

        <SectionName name="Hobbies"/>

            <ul className="wrap_hobbies">
                
                <li className="item_hobbies"><img src={Photography} alt={photo}/>Photo</li>
                <li className="item_hobbies"><img src={Code} alt={code}/>Code</li>
                <li className="item_hobbies"><img src={Tennis} alt={tennis}/>Tennis</li>
                <li className="item_hobbies"><img src={Music} alt={music}/>Music</li>
                <li className="item_hobbies"><img src={Little} alt={little}/>Little tennis</li>
            </ul>
        </div>
    );
}

export default Hobbies;
