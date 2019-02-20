import React, { Component } from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';


import Header from './components/Header/Header';
import Content from './components/Content/Content';

import ExperienceAndSkills from './components/Content/ExperienceAndSkills';
import Hobbies from './components/Content/Hobbies';
import Projects from './components/Content/Projects';

import { projects } from './components/data/projects';
import { educations } from './components/data/educations';
import { experiences } from './components/data/experience';
import { objective } from './components/data/objective';
import { contacts } from './components/data/contacts';


import './App.css';

class App extends Component {

  state = {
    projects: null,
    educations: null,
    experiences: null,
    objective: null,
    contacts: null,
  }

  componentDidMount(){
    this.setState({
      projects,
      educations,
      experiences,
      objective,
      contacts,
    });
  }

  render() {
    const { projects, experiences, educations, objective, contacts } = this.state;
    

    if( projects && experiences && educations && objective && contacts !== null ){

    return (
      <div className="App">
        <Header dataObjective={objective} dataContacts={contacts}/>
          <Switch>
            <Route  exact path="/" render={() => <Content data={this.state}/>}/>
            <Route  path="/expskills" render={props => <ExperienceAndSkills {...props} experience={experiences} />}/>
            {/* <Route  path="/education" component={Education}/> */}
            <Route  path="/hobbies" component={Hobbies}/>
            <Route path="/projects" render={props => <Projects {...props} projects={projects} />}/>
          </Switch>

      </div>
    );
  }else {
    return null;
  }
  }
}

export default withRouter(App);
