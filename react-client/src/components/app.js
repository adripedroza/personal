import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import AboutPage from './pages/aboutPage.js';
import SkillsPage from './pages/skillsPage.js';
import ExperiencePage from './pages/experiencePage.js';
import EducationPage from './pages/educationPage.js';
import WorkPage from './pages/workPage.js';
import ContactPage from './pages/contactPage.js';
import SideBar from './navigation/sideBar.js';

class App extends Component {
    constructor(){
        super();
        this.state = {render:'homepage'}
    }

   onPageChange(key, event) {
      this.setState({[key]: event.target.value})
   }

    _renderSubComp(){
        console.log(this.state);
        switch(this.state.render){
          case 'about': return <AboutPage />
          case 'skills': return <SkillsPage />
          case 'experience': return <ExperiencePage />
          case 'education': return <EducationPage />
          case 'work': return <WorkPage />
          case 'contact': return <ContactPage />
          default: return <HomePage />
        }
    }

  render() {
    return (
      <div>
        <div>
          <SideBar onValueChange={this.onPageChange.bind(this, 'render')} />
        </div>
        {this._renderSubComp()}
      </div>
    )
  }
}

export default App;
