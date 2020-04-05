import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& .MuiExpansionPanelDetails-root': {
      display: 'block',
      padding: '8px 10px'
    },
    '& .MuiExpansionPanelSummary-root': {
      padding: '0px 10px'
    }
  },
  heading: {
    fontSize: '0.95rem',
    fontWeight: '600'
  }
}));

const StExpansionPanel = ({ children, districtName, expanded = true }) => {
  const classes = useStyles();
  const [isExpanded, setIsExpanded] = useState(true);
  useEffect(() => {
    setIsExpanded(!expanded);
  }, [expanded]);

  const onChangeExpansionPanel = event => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={isExpanded} onChange={onChangeExpansionPanel}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className={classes.heading}>{districtName}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default StExpansionPanel;
