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
import Contact from './components/contact';
import ChatBot from './chat'
import {animation} from './components/animations'


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
          <ChatBot/>
          <Header/>
          <Sidebar/>
          <Front/>
        
          <div className="App">
            <BurgerMenu style={animation.slideInLeft}  isOpen={false} right  pageWrapId="other" outerContainerId={"App"}/>
              <div id="other" >
              </div>
          </div> 
          <Route path="/#about" exact component={About} />
          <Route path="/#projects" exact component={Projects} />
          <Route path="/#contact" exact component={Contact} />
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
          <Link smooth to="/#contact" href="./#">Contact</Link>
          {/* <a href='/#'>Certificates</a> */}
      </Menu>
  )
}

export default App;
