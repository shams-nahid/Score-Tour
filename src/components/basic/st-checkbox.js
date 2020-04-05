import React, { useState, useEffect } from 'react';
import { Checkbox, makeStyles, FormControlLabel } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    '& .MuiFormControlLabel-root': {
      marginLeft: 0
    },
    '& .MuiTypography-root': {
      paddingLeft: '5px',
      fontWeight: '600',
      fontSize: '15px'
    }
  }
});

const StCheckbox = ({
  isChecked,
  edge = 'end',
  color = 'primary',
  tabIndex = -1,
  disableRipple = true,
  label,
  onChangeCheckBox
}) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(isChecked);
  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);
  const onChange = event => {
    const isChecked = event.target.checked;
    onChangeCheckBox && onChangeCheckBox(isChecked);
    setChecked(isChecked);
  };
  return (
    <div className={classes.root}>
      <FormControlLabel
        control={
          <Checkbox
            edge={edge}
            checked={checked}
            tabIndex={tabIndex}
            disableRipple={disableRipple}
            color={color}
            onChange={onChange}
          />
        }
        label={label}
      />
      {/* {label ? <div className={classes.labelStyle}>{label}</div> : null} */}
    </div>
  );
};

export default StCheckbox;
