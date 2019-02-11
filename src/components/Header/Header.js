import React, { Component } from 'react'

import '../../styles/header.css';

import FullName from './FullName';
import AboutMe from './AboutMe';
import Navigation from './Navigation';

export default class Header extends Component {
  render() {
    return (
      <>
      <div className="Header">
        <FullName/>
        <AboutMe/>
      </div>
      
      <div className="Line"></div>
        <Navigation/>
      </>
    )
  }
}
