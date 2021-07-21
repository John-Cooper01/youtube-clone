import { makeStyles } from '@material-ui/styles';
import TopBar from '../../components/AppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  }
}));
export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TopBar />
    </div>
  )
}