import React, { useEffect } from 'react';
import axios from 'axios';
import './index.css';

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
      <div className='card'>
        <div className='header'>
          <h1>Guest</h1>
        </div>
        <div className='restData'>
          <div className='leftSide'>
            <h4>Average Complaints Ratio</h4>
            <h1 className='number'>16</h1>
          </div>
          <div className='rightSide'>
            <h4>Average Window Time</h4>
            <h1 className='number'>70s</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResturantDetails;
