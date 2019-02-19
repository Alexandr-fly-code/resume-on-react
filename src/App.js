import React, { Component } from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';


import Header from './components/Header/Header';
import Content from './components/Content/Content';

import ExperienceAndSkills from './components/Content/ExperienceAndSkills';
import Hobbies from './components/Content/Hobbies';
import Projects from './components/Content/Projects';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

       <Switch>
          <Route  exact path="/" component={Content}/>
          <Route  path="/expskills" component={ExperienceAndSkills}/>
          {/* <Route  path="/education" component={Education}/> */}
          <Route  path="/hobbies" component={Hobbies}/>
          <Route path="/projects" component={Projects}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
