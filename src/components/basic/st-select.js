import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      padding: '0px 9px 0px 0px'
    },
    '& .MuiInputLabel-root': {
      right: '30px'
    },
    '& .MuiInputBase-root': {
      width: '130px'
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const StSelect = ({ options, onChangeAutoComplete, label }) => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = event => {
    const selectedDivisionId = event.target.value;
    setAge(selectedDivisionId);
    onChangeAutoComplete(selectedDivisionId);
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={age}
          onChange={handleChange}
        >
          {options.map(({ id, name }) => (
            <MenuItem value={id}>{name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default StSelect;
