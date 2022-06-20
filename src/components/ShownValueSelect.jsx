import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const ShownValueSelect = ({toggleSelected}) => {
  const [show, setShow] = React.useState('show date');

  const handleChange = (event) => {
    setShow(event.target.value)
    toggleSelected(event.target.value)
  }

  return (
    <React.Fragment>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={show}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value={"show value"}>show value</MenuItem>
          <MenuItem value={"show date"}>show date</MenuItem>
        </Select>
      </FormControl>
    </React.Fragment>
  );
}
