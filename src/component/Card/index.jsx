import React from 'react';
import './index.css';
import OtherDetails from 'component/OtherDetails';

const Card = ({ header, otherDetailsData }) => {
  return (
    <div className='card'>
      <div className='header'>
        <h1>{header}</h1>
      </div>
      <div className='OtherDetails'>
        {otherDetailsData.map((data) => (
          <OtherDetails {...data} />
        ))}
      </div>
    </div>
  );
};

export default Card;
