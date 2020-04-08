import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    '& .MuiAutocomplete-root': {
      width: '250px',
      margin: '-15px 10px 0px 0px'
    },
    '& .MuiFormLabel-root': {
      fontSize: '15px',
      fontWeight: '600',
      paddingLeft: '5px',
      color: 'black'
    }
  },
  autocompleteStyle: {},
  textFieldStyle: {}
});

const StAutoComplete = ({ options, onChangeAutoComplete, label }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Autocomplete
        disableClearable
        className={classes.autocompleteStyle}
        options={options}
        getOptionLabel={option => option.name}
        onChange={(event, newValue) => onChangeAutoComplete(newValue.id)}
        renderInput={params => (
          <TextField
            className={classes.textFieldStyle}
            {...params}
            label={label}
          />
        )}
      />
    </div>
  );
};

export default StAutoComplete;
