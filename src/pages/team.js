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
	height:'400px',
	width:'400px',
	backgroundColor: 'green',
    borderRadius: '15px',
    overflow: 'hidden',
    color: theme.palette.text.secondary,
  },
}));  


  
const Teams = () => {
	const classes = useStyles();  
	
 function FormRow() {
    return ( //return renders the grid
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
		  <img src="https://picsum.photos/400" alt="Restaurant Intro Food"  />
		  </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
		  <img src="https://picsum.photos/400" alt="Restaurant Intro Food" />
		  </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
		  <img src="https://picsum.photos/400" alt="Restaurant Intro Food" />
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
		marginTop:'10px'
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
  
export default Teams;