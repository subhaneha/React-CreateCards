import React, { useEffect } from 'react';
import axios from 'axios';
import './index.css';
import Card from 'component/Card';
import cardDetails from 'utils/data';

const ResturantDetails = () => {
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
    <div className='mainDiv'>
      <div className='donut'>donut</div>
      <div className='cardsArea'>
        {cardDetails.map((data) => (
          <Card {...data} />
        ))}
      </div>
    </div>
  );
};

export default ResturantDetails;
