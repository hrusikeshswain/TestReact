import React from 'react';
import { Text, View, StyleSheet } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';
  
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);  


const useStyles = makeStyles((theme) => ({
   container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  button: {
    
    width: '10%',
	marginRight:'30px',
    height: 40
  }
})); 



  
const About = () => {
	
const classes = useStyles(); 	
	
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Left',
        alignItems: 'Left',
        height: '100vh',
		width:'100vh'
      }}
    >
	 <div>
	 <h1 style={{float : 'left', paddingRight : '5px',textAlign:'left',fontFamily:'verdana',color:'black',paddingTop:'50px',paddingLeft:'0px'}}> Eric Kleppen </h1>
	 <hr  style={{color: 'transparent',backgroundColor: 'transparent',borderColor : 'transparent',height: '0vh',marginTop:'10vh',width:'200vh'}}/>
	 <div className={classes.container}>
      <text  className={classes.button} style={{backgroundColor:'green',color:'white',padding:'10px'}}>Follow</text >
	  <text  className={classes.button} >Followers</text >
      <text  className={classes.button} >Lists</text >
	  <text  className={classes.button} >About</text >
      </div>
	  <hr  style={{color: 'gray',backgroundColor: 'gray',borderColor : 'gray',height: '0.01vh',marginTop:'10vh',width:'200vh'}}/>
      
	  <div style={{display: 'flex',color: 'white',backgroundColor: 'white',justifyContent:'center'}}>
	  
	  
	    <div style={{display: 'flex',width: '70%',backgroundColor: 'white',alignItems:'left', height: '50vh', flexDirection: 'column'}}>
		   <h1 style={{float : 'left', paddingRight : '5px',textAlign:'left',fontFamily:'verdana',color:'black',paddingLeft:'30%'}}> About Eric Kleppen </h1>
		    <p style={{float : 'left', paddingRight : '5px',textAlign:'left',fontFamily:'verdana',color:'black',paddingLeft:'30%'}}> Software Product Analyst in Data Science. <br />pythondashboards.com Top writer in <br />Business www.linkedin.com/in/erickleppen01/ </p>
		</div>
		<div style={{display: 'flex',width: '30%',backgroundColor: 'white',justifyContent:'center', alignItems:'top', height: '50vh',paddingRight:'10%',paddingTop:'20px'}}>
		  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200617121258/gfg-image2-300x177.png" alt="Restaurant Intro Food"  />
		</div>
		
	  </div>
	  
	  
	   <hr  style={{color: 'gray',backgroundColor: 'green',borderColor : 'green',height: '0.1vh',marginTop:'10vh',marginLeft:'15%',marginRight:'10%'}}/>
	   <text style={{float : 'left', paddingRight : '5px',textAlign:'left',fontFamily:'verdana',fontSize:'20px',color:'black',paddingTop:'10px',marginLeft:'15%',marginRight:'10%'}}> Get an email whenever Eric Kleppen publishes. </text>
	   <hr  style={{color: 'gray',backgroundColor: 'green',borderColor : 'green',height: '0.1vh',marginTop:'10vh',marginLeft:'15%',marginRight:'10%'}}/>
	   
	  <form style={{marginTop:'5vh',marginBottom:'5vh',marginLeft:'15%',marginRight:'10%'}}>
      <label>
       Eamil:    <input type="text" name="name" />
      </label>
     <input type="submit" value="Submit" style={{marginLeft:'15%',marginRight:'10%'}} />
     </form>
	   
	   
	   <hr  style={{color: 'transparent',backgroundColor: 'transparent',borderColor : 'transparent',height: '10vh',marginTop:'10vh',marginLeft:'15%',marginRight:'10%'}}/>
	  </div>
	  
	  
     
    </div>
  );
};
  
export default About;