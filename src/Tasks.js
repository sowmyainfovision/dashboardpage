import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import task from './task.png';
class Tasks extends Component {

      render()   
  {
    return (
        <div>
             <div className="icon">
        <div className="dashboardcircle">
        <img className="img" src={task} alt="taskimage"></img>
        </div>&nbsp;&nbsp;
        <b>Tasks</b>
        </div>
        <div className="info">
        <div className="alignright">
      <div className="dashboardstatslargetext">
      470
       </div>
       <br></br> 
          <b  className="dashboardcardlargetext">Total</b>
          
          <br></br>
          <div>
      <b className="dashboardcardsmalltext">75</b>&nbsp;
      <b className="dashboardcardsmalltext">done</b>
      </div>
     
       </div>
       </div>
        </div>
        
              );
}
}

export default Tasks;