import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ShareIcon from '@material-ui/icons/Share';
import SaveIcon from '@material-ui/icons/Save';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles({
  root: {
    position: 'sticky',
    bottom: '0px',
    backgroundColor: '#e8eaf6'
  }
});

const StBottomNavigation = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label='Save' icon={<SaveIcon />} />
      <BottomNavigationAction label='Share' icon={<ShareIcon />} />
      <BottomNavigationAction label='About' icon={<InfoIcon />} />
    </BottomNavigation>
  );
};

export default StBottomNavigation;
