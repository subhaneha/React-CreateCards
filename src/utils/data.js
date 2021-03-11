import upTriangle from 'assets/caret-up-solid.svg';
import downTriangle from 'assets/caret-down-solid.svg';
import SolidStar from 'assets/star-solid.svg';
import RegularStar from 'assets/star-regular.svg';
const cardDetails = [
  {
    header: 'Guest',
    otherDetailsData: [
      {
        title: 'Average Complaints Ratio',
        tooltip: 'Average Complaints Ratio info',
        number: { numberValue: '16', triangle: upTriangle },
        subTitle: '8',
        star: [SolidStar, SolidStar, RegularStar, RegularStar, RegularStar],
        rating: 'Reduced by 3',
      },
      {
        title: 'Average Window Time info',
        tooltip: 'Average Window Time info',
        number: { numberValue: '70s', triangle: downTriangle },
        subTitle: '83s',
        star: [SolidStar, SolidStar, SolidStar, RegularStar, RegularStar],
        rating: 'Reduced by 5s',
      },
    ],
  },
  {
    header: 'Team',
    otherDetailsData: [
      {
        title: 'Average Training Rate',
        tooltip: 'Average Complaints Ratio info',
        number: { numberValue: '75%', triangle: downTriangle },
        subTitle: '83%',
        star: [SolidStar, SolidStar, RegularStar, RegularStar, RegularStar],
        rating: 'Increased by 5%',
      },
      {
        title: 'Average Turnover Rate',
        tooltip: 'Average Window Time info',
        number: { numberValue: '90%', triangle: downTriangle },
        subTitle: '105%',
        star: [SolidStar, SolidStar, SolidStar, RegularStar, RegularStar],
        rating: 'Reduced by 5%',
      },
    ],
  },
];
export default cardDetails;
