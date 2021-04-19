import styles from '../styles/Home.module.css'
import { NextHead } from '../components/Head';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { SpeakerTabs } from '../components/Speakers';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 1000,
  },
  popColor: {
    color: '#607D8B',
  },
});

export default function Speakers() {
  const classes = useStyles();
  return (
    <div className={styles.container}>
      <NextHead/>
      <Header/>
      <main className={styles.main}>
        <div className={classes.root}>
          <Typography className={classes.popColor} variant="h2" gutterBottom>
            Speakers
          </Typography>
          <SpeakerTabs></SpeakerTabs>
      </div>
      </main>
      <Footer/>
    </div>
  );
}
