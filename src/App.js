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
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
           height:'120px',
           display:'flex',
           flexDirection:'column',
           color: 'white',
           marginTop:10,
           marginLeft:25,
           paddingTop:'10px',
                                                    
  },
  

  chartCard: {
    height:'333px',
    display:'flex',
    flexDirection:'column',
    color: 'white',
    marginTop:5,
    marginLeft:25,
    paddingTop:'2px',
                                        
},

mapCard: {
  height:'310px',
  display:'flex',
  flexDirection:'column',
  color: 'white',
  marginLeft:25,
      },
  
 };


function SimpleCard(props) {
  const { classes } = props;
   return (
    
      <div className="App">
     
       <Grid container spacing={8}>
          
                    
           <Grid item xs={12} sm={12} md={6} lg={3}>
 
  <Card className={classes.card} style={{backgroundColor:'#ad33ff'}}>
  <CardContent>
    <Users />
    </CardContent>
  </Card>
  
  </Grid>
   <Grid item xs={12} sm={12} md={6} lg={3}>


<Card className={classes.card} style={{backgroundColor:'#00bfff'}}>
  <CardContent>
    <Tasks />
    </CardContent>
  </Card>


</Grid>
<Grid item xs={12} sm={12} md={6} lg={3}>


<Card className={classes.card} style={{backgroundColor:'#ffcc00'}}>
 <CardContent>
    <Groups />
    </CardContent>
  </Card>
  
  </Grid>
  
  <Grid item xs={12} sm={12} md={6} lg={3}>

  <Card className={classes.card} style={{backgroundColor:'#ff4da6'}}>
  <CardContent>
    <GeoFence />
    </CardContent>
  </Card>

  </Grid>
 
  </Grid>
 
 <br></br>
  <Grid container spacing={8}>
<Grid item xs={12} sm={12} md={12} lg={12}>
<Card className={classes.mapCard}>
  <CardContent>
    
    </CardContent>
  </Card>
  </Grid>
  </Grid>

   
 <br></br>
<Grid container spacing={8}>
<Grid item xs={12} sm={12} md={12} lg={6}> 
    <Card className={classes.chartCard}>
       <CardContent>
       <Typography style={{fontSize:'20px',textAlign:'left',marginLeft:'10px'}}><b>Tasks Overview</b></Typography>
         <Piegraph />
    </CardContent>
  
  </Card>
  </Grid>       
   
<Grid item xs={12} sm={12} md={12} lg={6}> 
    <Card className={classes.chartCard}>
    
    <CardContent>
      
    </CardContent>
  
  </Card>
  </Grid>   

</Grid>

</div>


 
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
