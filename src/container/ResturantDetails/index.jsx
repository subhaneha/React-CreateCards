import React, { useEffect, useState } from 'react';
//material ui
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
  Box,
  Typography,
} from '@material-ui/core';
import useStyles from './style.js';

import axios from 'axios';
import './index.css';
import Card from 'component/Card';
// import { cloneDeep } from 'lodash';
import * as agCharts from 'ag-charts-community';
import { AgChartsReact } from 'ag-charts-react';

const data = {
  options: {
    data: [
      {
        os: 'Android',
        share: 56.9,
      },
      {
        os: 'iOS',
        share: 22.5,
      },
      {
        os: 'BlackBerry',
        share: 6.8,
      },
      {
        os: 'Symbian',
        share: 8.5,
      },
      {
        os: 'Bada',
        share: 2.6,
      },
      {
        os: 'Windows',
        share: 1.9,
      },
    ],
    series: [
      {
        type: 'pie',
        labelKey: 'os',
        angleKey: 'share',
        innerRadiusOffset: -70,
      },
    ],
  },
};

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
    <Box className={classes.mainDiv} mt={10}>
      <Box item className={classes.mainDivFirstDiv}>
        <Typography variant='h1' className={classes.mainDivHeading}>
          Hi, {user.name}! Here's your Scorecard for July 2020 to Dec 2020.
        </Typography>
        <Box className={classes.timePeriodDropDown}>
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
        </Box>
      </Box>
      <Box item className={classes.mainPagesubHeading}>
        <Typography variant='h3' style={{ margin: 0, padding: 0 }}>
          Average Star Rating: 2.1/5 Stars{' '}
        </Typography>
        <Box m={0} p={0}>
          {[
            '/assets/Star - medium.svg',
            '/assets/Star - medium.svg',
            '/assets/Star - medium.svg',
            '/assets/Polygon 1.svg',
            '/assets/Polygon 1.svg',
          ].map((data) => (
            <img className={classes.img} src={data} alt='' />
          ))}
        </Box>
      </Box>
      <Grid item className='mainDiv'>
        <div className='donut'>
          <AgChartsReact options={data.options} />
        </div>
        <div className='cardsArea'>
          {cardDetails.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </div>
      </Grid>
    </Box>
  );
};

export default ResturantDetails;
