import React from 'react';
import './index.css';
import OtherDetails from 'component/OtherDetails';
import { Typography } from '@material-ui/core';

const Card = ({ header, otherDetailsData }) => {
  return (
    <div className={`card ${header}`}>
      <Typography variant='h2' className='header'>
        {header}
      </Typography>
      <div className='OtherDetails'>
        {otherDetailsData.map((data, index) => (
          <OtherDetails key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Card;
