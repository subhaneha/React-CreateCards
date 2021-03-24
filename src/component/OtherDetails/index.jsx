import React from 'react';
import './index.css';
import InfoCircle from '../../assets/info-circle-solid.svg';
import { Typography } from '@material-ui/core';

const OtherDetails = ({ title, number, subTitle, star, rating, tooltip }) => {
  const { numberValue, triangle } = number;
  return (
    <div className='innerData'>
      <div>
        <Typography variant='subtitle1' className='title'>
          {title}
        </Typography>
        <div className='info'>
          <img src={InfoCircle} alt='' />
          <div className='tooltip'>
            <p>{tooltip.data}</p>
            <p>{tooltip.optionA}</p>
            <p>{tooltip.optionB}</p>
            <p>{tooltip.optionC}</p>
            <p>{tooltip.optionD}</p>
          </div>
        </div>
      </div>
      <div className="numberDiv">
        <Typography variant='h1' className='number'>
          {numberValue}
        </Typography>
        <img className='icon' src={triangle} alt='' />
      </div>

      <Typography variant='h4'>Previous : {subTitle}</Typography>
      <div>
        {star.map((starIcon, index) => (
          <img key={index} className='icon' src={starIcon} alt='' />
        ))}
      </div>
      <Typography variant='subtitle1'>Next star : {rating}</Typography>
    </div>
  );
};

export default OtherDetails;
