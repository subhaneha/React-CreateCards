import React from 'react';
import './index.css';
import OtherDetails from 'component/OtherDetails';

const Card = ({ header, otherDetailsData }) => {
  return (
    <div className={`card ${header}`}>
      <div className='header'>
        <h4>{header}</h4>
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
