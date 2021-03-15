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
        tooltip: {
          data: 'The thresholds for the grade scoring are as follows:',
          optionA: 'A: 0.0 to 0.0',
          optionB: 'B: 0.0 to 0.0',
          optionC: 'D: 0.0 to 0.0',
          optionD: 'F: 0.0 to 0.0',
        },
        number: { numberValue: '16', triangle: upTriangle },
        subTitle: '8',
        star: [SolidStar, SolidStar, RegularStar, RegularStar, RegularStar],
        rating: 'Reduced by 3',
      },
      {
        title: 'Average Window Time info',
        tooltip: {
          data: 'The thresholds for the grade scoring are as follows:',
          optionA: 'A: 0.0 to 0.0',
          optionB: 'B: 0.0 to 0.0',
          optionC: 'D: 0.0 to 0.0',
          optionD: 'F: 0.0 to 0.0',
        },
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
        tooltip: {
          data: 'The thresholds for the grade scoring are as follows:',
          optionA: 'A: 0.0 to 0.0',
          optionB: 'B: 0.0 to 0.0',
          optionC: 'D: 0.0 to 0.0',
          optionD: 'F: 0.0 to 0.0',
        },
        number: { numberValue: '75%', triangle: downTriangle },
        subTitle: '83%',
        star: [SolidStar, SolidStar, RegularStar, RegularStar, RegularStar],
        rating: 'Increased by 5%',
      },
      {
        title: 'Average Turnover Rate',
        tooltip: {
          data: 'The thresholds for the grade scoring are as follows:',
          optionA: 'A: 0.0 to 0.0',
          optionB: 'B: 0.0 to 0.0',
          optionC: 'D: 0.0 to 0.0',
          optionD: 'F: 0.0 to 0.0',
        },
        number: { numberValue: '90%', triangle: downTriangle },
        subTitle: '105%',
        star: [SolidStar, SolidStar, SolidStar, RegularStar, RegularStar],
        rating: 'Reduced by 5%',
      },
    ],
  },
  {
    header: 'Standard',
    otherDetailsData: [
      {
        title: 'Brand Standards',
        tooltip: {
          data: 'The thresholds for the grade scoring are as follows:',
          optionA: 'A: 0.0 to 0.0',
          optionB: 'B: 0.0 to 0.0',
          optionC: 'D: 0.0 to 0.0',
          optionD: 'F: 0.0 to 0.0',
        },
        number: { numberValue: '73%', triangle: downTriangle },
        subTitle: '87%',
        star: [SolidStar, SolidStar, SolidStar, RegularStar, RegularStar],
        rating: 'Increased by 13%',
      },
    ],
  },
];
export default cardDetails;
