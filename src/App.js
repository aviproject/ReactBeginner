import React, { Component } from 'react';

import './App.css';
import { render } from '@testing-library/react';
import Begin from './component/Begin'
import Welcome from './component/Welcome'

class App extends Component{
  render(){
      return (
      <div className="App"> 
    <Begin/> 
    <Welcome/>
      </div>
  
  );
}
}  
export default App;
