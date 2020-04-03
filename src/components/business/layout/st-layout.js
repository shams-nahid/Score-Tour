import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import StTopBar from '../../basic/st-top-bar';
import StScore from '../../basic/st-score';
import StCustomList from '../../basic/st-custom-list';
import StBottomBar from '../../basic/st-bottom-bar';

const useStyles = makeStyles(theme => ({
  root: {
    // maxHeight: '100vh'
    // textAlign: 'center',
    // maxWidth: '500px'
  }
}));

export default function StLayout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <StTopBar />
      <StScore />
      <StCustomList />
      {/* <StBottomNavigation /> */}
      <StBottomBar />
    </div>
  );
}
