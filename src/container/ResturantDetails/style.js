import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  mainDiv: {
    fontFamily: '"Roboto", "sans-serif"',
    display: 'flex',
    flexDirection: 'column',
    height: ' 90vh',
    width: ' 99vw',
  },
  mainDivFirstDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  mainDivHeading: {
    fontWeight: 'Bold',
  },
  mainPagesubHeading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '75%',
  },
  timePeriodDropDown: {
    background: '#fff4cc',
    padding: '15px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '200px',
  },
  selectEmpty: {
    marginTop: theme.spacing(6),
  },
  img: {
    width: '70px',
    height: '70px',
  },
  divimg: {},
}));
export default useStyles;
