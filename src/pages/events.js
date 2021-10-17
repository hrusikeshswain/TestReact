import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
  

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1), //grid padding
    textAlign: 'center',
	width:'300px',
	backgroundColor: 'transient',
    borderRadius: '0px',
    overflow: 'auto',
    color: theme.palette.text.secondary,
  },
})); 


  
const Events = () => {
	
const classes = useStyles();  
	
 function FormRow() {
    return ( //return renders the grid
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
		  <div >
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200617121258/gfg-image2-300x177.png" alt="Restaurant Intro Food"  />
            <h3 style={{float : 'left', paddingRight : '5px',textAlign:'left',fontFamily:'verdana',color:'black'}}>How Concurrency can Break your Software</h3>
            <p style={{float : 'left', paddingRight : '5px',textAlign:'left',fontFamily:'verdana',color:'black'}}>Race conditions related to insufficient transaction isolation</p>
		 </div>
		  </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
		 <div >
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200617121258/gfg-image2-300x177.png" alt="Restaurant Intro Food"  />
            <h3 style={{float : 'left', paddingRight : '5px',textAlign:'left',fontFamily:'verdana',color:'black'}}>How Concurrency can Break your Software</h3>
            <p style={{float : 'left', paddingRight : '5px',textAlign:'left',fontFamily:'verdana',color:'black'}}>Race conditions related to insufficient transaction isolation</p>
		 </div>
		  </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
		 <div >
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200617121258/gfg-image2-300x177.png" alt="Restaurant Intro Food"  />
            <h3 style={{float : 'left', paddingRight : '5px',textAlign:'left',fontFamily:'verdana',color:'black'}}>How Concurrency can Break your Software</h3>
            <p style={{float : 'left', paddingRight : '5px',textAlign:'left',fontFamily:'verdana',color:'black'}}>Race conditions related to insufficient transaction isolation</p>
		 </div>
		  </Paper>
        </Grid>
      </React.Fragment>
    );
  }
  
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh',
		marginTop:'10px',
		marginLeft:'50px'
      }}
    >
      <Grid container spacing={1}>
	  <Grid container item xs={12} spacing={3}>
    <FormRow />
  </Grid>
  <Grid container item xs={12} spacing={3}>
    <FormRow />
  </Grid>
  <Grid container item xs={12} spacing={3}>
    <FormRow />
  </Grid>
	  </Grid>
    </div>
  );
};
  
export default Events;