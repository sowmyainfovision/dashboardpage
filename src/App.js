import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './App.css';
import Users from './Users.js';
import Tasks from './Tasks.js';
import GeoFence from './GeoFence.js';
import Groups from './Groups.js';
import Piegraph from './Pie';


const styles = {
  card: {
           height:'130px',
           display:'flex',
           flexDirection:'column',
           width:'310px',
           color: 'white',
           marginTop:10,
           marginLeft:25,
           paddingTop:'10px',
                                                    
  },

  chartCard: {
    height:'320px',
    display:'flex',
    flexDirection:'column',
    width:'730px',
    color: 'white',
    marginTop:5,
    marginBottom:5,
    marginLeft:25,
   textAlign:'center',
   paddingTop:'2px',
                                        
},

mapCard: {
  height:'250px',
  display:'flex',
  flexDirection:'column',
  width:'auto',
  color: 'white',
   
  },
 };

function SimpleCard(props) {
  const { classes } = props;
  
  return (
      <div className="App">
         
         <div className="cardrow">
    
    <div className="carddivwrapper">
    <Card className={classes.card} style={{backgroundColor:'#ad33ff'}}>
  <CardContent>
    <Users />
    </CardContent>
  </Card>
  </div>
  
  <div className="carddivwrapper"> 

<Card className={classes.card} style={{backgroundColor:'#00bfff'}}>
  <CardContent>
    <Tasks />
    </CardContent>
  </Card>

</div>

<div className="carddivwrapper">

<Card className={classes.card} style={{backgroundColor:'#ffcc00'}}>
 <CardContent>
    <Groups />
    </CardContent>
  </Card>
  </div>


<div className="carddivwrapper">

 <Card className={classes.card} style={{backgroundColor:'#ff4da6'}}>
  <CardContent>
    <GeoFence />
    </CardContent>
  </Card>
  </div>
</div>
&nbsp;
<div className="maprow">
<Card className={classes.mapCard}>
  <CardContent>
    
    </CardContent>
  </Card>
</div>

<div className="chartrow">
<div className="rowwrapper">
    
<Card className={classes.chartcard} style={{backgroundColor:'white'}}>
 <div className="chart">
 <b>Tasks Overview</b>
 <Piegraph />
 </div>
 </Card>
    
  </div>
  &nbsp;
  &nbsp;
 
  <div className="rowwrapper">
    <Card className={classes.chartCard}>
    
    <CardContent>
      
    </CardContent>
  
  </Card>
  </div>

</div>

</div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
