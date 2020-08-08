import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Header from './components/header'
import {stack as Menu} from 'react-burger-menu'
import {BrowserRouter as Router, Route} from "react-router-dom";
import {NavHashLink as Link} from 'react-router-hash-link';

import About from './components/about'
import Projects from './components/projects'


import Front from './components/front'

class App extends Component{
  state =  {
    loading: true
  }

  componentDidMount() {
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render() {

    const { loading } = this.state;
    
    if(loading) { 
      return null 
    }
  
    return (
      <div>
        <Router>
          <Header/>
          <Sidebar/>
          <Front/>
        
          <div className="App">
            <BurgerMenu  isOpen={false} right  pageWrapId="other" outerContainerId={"App"}/>
              <div id="other" >
              </div>
          </div> 
          <Route path="/#about" exact component={About} />
          <Route path="/#projects" exact component={Projects} />
        </Router>
      </div>
    )
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

function BurgerMenu(props) {
  return(
      <Menu {...props}>
          <Link smooth to="/#about" href="./#">About Me</Link>
          <Link smooth to="/#projects" href="./#">Projects</Link>
      </Menu>
  )
}

export default App;
