import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Header from './components/header'
import {slide as Menu} from 'react-burger-menu'
import About from './components/about'
import Projects from './components/projects'
import Front from './components/front'
import Bot from './components/bot'

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
      <div className="App">
        <BurgerMenu  isOpen={false} right pageWrapId="other" outerContainerId={"App"}/>
          <div id="other">
            <Bot/>
            <Sidebar/>
            <Header/>
            <Front/>
            <About/>
            <Projects/>
          </div>
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
          <a className="menu-item" id="#">About Me</a>
          <a className="menu-item" id="#>">Projects</a>
          <a className="menu-item" id="#">Contact</a>
      </Menu>
  )
}

export default App;
