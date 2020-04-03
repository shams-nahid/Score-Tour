import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ShareIcon from '@material-ui/icons/Share';
import SaveIcon from '@material-ui/icons/Save';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles({
  container: {
    position: 'sticky',
    bottom: 0,
    '& .MuiTab-root': {
      fontSize: '10px',
      lineHeight: '5px',
      marginBottom: '-15px'
    },
    '& .MuiSvgIcon-root': {
      width: '15px',
      height: '15px'
    },
    '& .MuiTab-labelIcon': {
      minHeight: '48px'
    }
  },
  root: {
    flexGrow: 1
  }
});

const StBottomBar = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.container}>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          centered
        >
          <Tab label='Share' icon={<ShareIcon />} />
          <Tab label='Save' icon={<SaveIcon />} />
          <Tab label='About' icon={<InfoIcon />} />
        </Tabs>
      </Paper>
    </div>
  );
};

export default StBottomBar;
