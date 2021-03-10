import React, { useEffect } from 'react';
import axios from 'axios';
import './index.css';
import RestData from 'component/RestData/index';
import upTriangle from 'assets/caret-up-solid.svg';
import downTriangle from 'assets/caret-down-solid.svg';
import SolidStar from 'assets/star-solid.svg';
import RegularStar from 'assets/star-regular.svg';

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
          <RestData
            title={'Average Complaints Ratio'}
            tooltip={'Average Complaints Ratio info'}
            number={{ numberValue: '16', triangle: upTriangle }}
            subTitle={'8'}
            star={[SolidStar, SolidStar, RegularStar, RegularStar, RegularStar]}
            rating={'3'}
          />
          <RestData
            title={'Average Window Time'}
            tooltip={'Average Window Time info'}
            number={{ numberValue: '70s', triangle: downTriangle }}
            subTitle={'83s'}
            star={[SolidStar, SolidStar, SolidStar, RegularStar, RegularStar]}
            rating={'5s'}
          />
        </div>
      </div>
    </div>
  );
};

export default ResturantDetails;
