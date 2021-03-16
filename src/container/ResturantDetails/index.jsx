import React, { useEffect, useState } from 'react';
//material ui
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import axios from 'axios';
import './index.css';
import Card from 'component/Card';
import cardDetails from 'utils/data';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  selectEmpty: {
    marginTop: theme.spacing(6),
  },
}));
const ResturantDetails = () => {
  const classes = useStyles();
  const [timePeriod, setTimePeriod] = useState('current');
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          'https://zxlot64861.execute-api.us-east-1.amazonaws.com/dev/getratingsbyrestaurant'
        );
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  return (
    <div className='mainPage'>
      <div className='mainPageFirstDiv'>
        <h1>
          Hi, Joe Your grading is in progress for the current time period.
        </h1>
        <div className='timePeriodDropDown'>
          <FormControl className={classes.formControl}>
            <InputLabel shrink id='demo-simple-select-placeholder-label-label'>
              Time Period:
            </InputLabel>
            <Select
              labelId='demo-simple-select-placeholder-label-label'
              id='demo-simple-select-placeholder-label'
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value='current'>Current</MenuItem>
              <MenuItem value={'Jul2020toDec2020'}>
                Jul 2020 to Dec 2020
              </MenuItem>
              <MenuItem value={'Jan2020toJun2020'}>
                Jan 2020 to June 2020
              </MenuItem>
              <MenuItem value={'Jul2019toDec2019'}>
                Jul 2019 to Dec 2019
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className='mainDiv'>
        <div className='donut'>donut</div>
        <div className='cardsArea'>
          {cardDetails.map((data) => (
            <Card {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResturantDetails;
