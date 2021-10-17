import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
  
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(10),
      textAlign: 'center',
      color: theme.palette.text.primary,
	  justifyContent: 'Right',
	  backgroundColor: 'green', 
	  color:'white',
	  fontSize: 30,
        alignItems: 'Right'
    },
    root: {
      flexGrow: 1,
    },
  }),
);
  
export default function FullWidthGrid() {
  const classes = useStyles();
  
  return (
    <div style={{padding: '10px',margin:'10px',alignItems:'c'}}>
      <Grid container spacing={3}>
     
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Android Development</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Android Development</Paper>
        </Grid>
       <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Android Development</Paper>
        </Grid>
       <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Android Development</Paper>
        </Grid>
		<Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Android Development</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Android Development</Paper>
        </Grid>
       <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Android Development</Paper>
        </Grid>
       <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Android Development</Paper>
        </Grid>
		<Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Android Development</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Android Development</Paper>
        </Grid>
       <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Android Development</Paper>
        </Grid>
       <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Android Development</Paper>
        </Grid>
      </Grid>
    </div>
  );
}