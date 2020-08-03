import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Header from './components/header'

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
        <Sidebar/>
        <Header/>
      </div>
    )
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

export default App;
