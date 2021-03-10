import React from 'react';
import './index.css';
import InfoCircle from '../../assets/info-circle-solid.svg';

const RestData = ({ title, number, subTitle, star, rating, tooltip }) => {
  const { numberValue, triangle } = number;
  return (
    <div className='innerData'>
      <h4 className='title'>
        {title}

        <div className='info'>
          <img src={InfoCircle} alt='' />
          <p className='tooltip'>{tooltip}</p>
        </div>
      </h4>
      <h1 className='number'>
        {numberValue} <img className='icon' src={triangle} alt='' />
      </h1>

      <p>Previous : {subTitle}</p>
      <div>
        {star.map((starIcon, index) => (
          <img key={index} className='icon' src={starIcon} alt='' />
        ))}
      </div>
      <p>Next star : Reduced by {rating}</p>
    </div>
  );
};

export default RestData;
