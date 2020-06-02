import React, { Component } from 'react';

import './App.css';
import { render } from '@testing-library/react';
import Begin from './component/Begin'
import Welcome from './component/Welcome'
import Hello from './component/Hello'
import Greet from './component/Greet'
import Super from './component/Super';
import Message from './component/Message';
import Reuse from './component/Reuse';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';

class App extends Component{

  render(){

      return (

      <div className="App">
         

         <ParentComponent/>
        {/*<EventBind/>*/}
        {/*<FunctionClick/>*/} 
        {/*<ClassClick/>*/}
          
        {/* <Begin/> */}
        {/* <Welcome/>*/}
        {/*  <Hello/>*/} 

       {/*<Greet name="Smit" heroname="Manoj bajpai"/>
            
      
       
       <Greet name="Chintan" heroname="amitabh bachhan">
         <button>Action</button>
       </Greet>
      
      <Greet name="Mahi" heroname="Govinda">

        <button>Submit</button>
      </Greet>

      <Super name="Mahakal" heroname='mahadev'></Super>
      <Super name="Akshay" heroname='khiladi'></Super>
      <Super name="ajay" heroname='prem'></Super>*/}

         {/*<Message/>*/}
        {/*<Reuse/>*/}
         {/*<Counter/>*/}
       </div>
     );
   }
   }  
export default App
