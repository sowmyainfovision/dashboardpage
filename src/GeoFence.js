import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import geoimage from './Geo_fences.png';
class GeoFence extends Component {

      render()   
  {
    return (
        <div>
            <div className="icon">
        <div className="dashboardcircle">
        <img className="img" src={geoimage} alt="geoimage"></img>
        </div>&nbsp;&nbsp;
        <b>GeoFence</b>
        </div>
        <div className="info">
       <div className="alignright"> 
      <div className="dashboardstatslargetext">
      54
      </div>
      <br></br> 
      <br></br>
        <b className="dashboardcardlargetext">Total</b>
       <div>
     
       <br></br>
       <b className="dashboardcardsmalltext">54</b>&nbsp;
      <b className="dashboardcardsmalltext">updated</b>
      </div>
      </div>
       </div>
       </div>
        
    );
}
}

export default GeoFence;


