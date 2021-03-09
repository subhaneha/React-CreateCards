import React from 'react';
import './index.css';
import SolidStar from 'assets/star-solid.svg';
import RegularStar from 'assets/star-regular.svg';

const RestData = ({ title, number, subTitle, star, rating }) => {
  const { numberValue, triangle } = number;
  return (
    <div className='innerData'>
      <h4>{title}</h4>
      <h1 className='number'>
        {numberValue} <img className='triangleIcon' src={triangle} alt='' />
      </h1>

      <p>Previous : {subTitle}</p>
      <div>
        <img className='triangleIcon' src={SolidStar} alt='' />
        <img className='triangleIcon' src={SolidStar} alt='' />
        <img className='triangleIcon' src={RegularStar} alt='' />
        <img className='triangleIcon' src={RegularStar} alt='' />
        <img className='triangleIcon' src={RegularStar} alt='' />
      </div>
      {/* <a href='/'>{star}</a> */}
      <p>Next star : Reduced by {rating}</p>
    </div>
  );
};

export default RestData;
