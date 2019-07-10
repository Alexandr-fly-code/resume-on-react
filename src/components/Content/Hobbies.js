import React from 'react';

import '../../styles/content/hobbies.css';
import Photography from '../../img/photo-camera.svg';
import Music from '../../img/headphones.svg';
import Code from '../../img/html.svg';
import Tennis from '../../img/tennis-ball.svg';
import Little from '../../img/pin-pong.svg';

import SectionName from './SectionName';

const Hobbies = () => {
    const hobbiesItems = [
      {className: 'item_hobbies', src: Photography, altOrText: 'Photo', id: 1},
      {className: 'item_hobbies', src: Code, altOrText: 'Code', id: 2},
      {className: 'item_hobbies', src: Tennis, altOrText: 'Tennis', id: 3},
      {className: 'item_hobbies', src: Music, altOrText: 'Music', id: 4},
      {className: 'item_hobbies', src: Little, altOrText: 'Ping-pong', id: 5},
    ] 

    function drawingHobbiesItems() {
      return (
        <ul className="wrap_hobbies">
          {
            hobbiesItems.map(({
              className, 
              src, 
              altOrText,
              id
            }) => 
            <li className={className} key={id}>
              <img src={src} alt={altOrText}/>
              {altOrText}
            </li>
          )}
        </ul>
      )
    }

    return (
        <div className="Hobbies">

        <SectionName name="Hobbies"/>
           {drawingHobbiesItems()} 
        </div>
    );
}

export default Hobbies;
