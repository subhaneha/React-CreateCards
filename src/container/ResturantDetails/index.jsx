import React, { useEffect, useState } from 'react';
//material ui
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import axios from 'axios';
import './index.css';
import Card from 'component/Card';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  selectEmpty: {
    marginTop: theme.spacing(6),
  },
  img: {
    width: '55px',
  },
  mainPagesubHeading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '75%',
  },
}));
const ResturantDetails = () => {
  const classes = useStyles();
  const [timePeriod, setTimePeriod] = useState('current');
  const [cardDetails, setCardDetails] = useState([]);
  const [dropDown, setDropDown] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const {
          data: { card, dropDown, user },
        } = await axios.get('data.json');
        setCardDetails(card);
        setDropDown(dropDown);
        setUser(user);
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
          Hi, {user.name} Your grading is in progress for the current time
          period.
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
              {dropDown.map(({ value, name }, index) => (
                <MenuItem key={index} value={value}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className={classes.mainPagesubHeading}>
        <h2>Average Star Rating: 2.1/5 Stars </h2>
        <div>
          {[
            '/assets/star-solid.svg',
            '/assets/star-solid.svg',
            '/assets/star-regular.svg',
            '/assets/star-regular.svg',
            '/assets/star-regular.svg',
          ].map((data) => (
            <img className={classes.img} src={data} alt='' />
          ))}
        </div>
      </div>
      <div className='mainDiv'>
        <div className='donut'>donut</div>
        <div className='cardsArea'>
          {cardDetails.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResturantDetails;
