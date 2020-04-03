import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import StTopBar from '../../basic/st-top-bar';
import StList from '../../basic/st-list';
import StBottomNavigation from '../../basic/st-bottom-navigation';
import StScore from '../../basic/st-score';

const useStyles = makeStyles(theme => ({
  root: {
    maxHeight: '100vh',
    textAlign: 'center'
  }
}));

export default function StLayout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <StTopBar />
      <StScore />
      <StList />
      <StBottomNavigation />
    </div>
  );
}
