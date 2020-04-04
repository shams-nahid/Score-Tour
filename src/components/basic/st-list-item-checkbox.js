import React, { useState, useEffect } from 'react';
import { Checkbox, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
  },
  labelStyle: {
    padding: '12px 0px 0px 10px',
  },
});

const StListItemCheckbox = ({
  isChecked,
  edge = 'end',
  color = 'primary',
  tabIndex = -1,
  disableRipple = true,
  label,
}) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(isChecked);
  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);
  return (
    <div className={classes.root}>
      <Checkbox
        edge={edge}
        checked={checked}
        tabIndex={tabIndex}
        disableRipple={disableRipple}
        color={color}
      />
      {label ? <div className={classes.labelStyle}>{label}</div> : null}
    </div>
  );
};

export default StListItemCheckbox;
