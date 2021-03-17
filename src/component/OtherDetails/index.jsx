import React from 'react';
import './index.css';
import InfoCircle from '../../assets/info-circle-solid.svg';

const OtherDetails = ({ title, number, subTitle, star, rating, tooltip }) => {
  const { numberValue, triangle } = number;
  return (
    <div className='innerData'>
      <div className='title'>
        {title}

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
      <p className='number'>
        {numberValue} <img className='icon' src={triangle} alt='' />
      </p>

      <p className='previous'>Previous : {subTitle}</p>
      <div>
        {star.map((starIcon, index) => (
          <img key={index} className='icon' src={starIcon} alt='' />
        ))}
      </div>
      <p className='nextStar'>Next star : {rating}</p>
    </div>
  );
};

export default OtherDetails;
