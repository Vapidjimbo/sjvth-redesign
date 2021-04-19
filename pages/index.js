import styles from '../styles/Home.module.css'
import { NextHead } from '../components/Head';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { FeaturedSpeaker } from '../components/FeaturedSpeaker';

const useStyles = makeStyles({
  root: {
    width: '65ch',
    maxWidth: 1000,
    margin: '0 5em',
    textAlign: 'center',
  },
  popColor: {
    color: '#607D8B',
  },
});


export default function Home() {
  const classes = useStyles();
  return (
    <div className={styles.container}>
      <NextHead/>
      <Header/>
      <main className={styles.main}>
        <div className={classes.root}>
          <Typography className={classes.popColor} variant="h2" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            As one or our members told us:
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            “Each year I give a ticket package to each of our family members. I think of it as the gift of knowledge...and that is priceless.”
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            San Joaquin Valley Town Hall is a non-profit organization that is run by an all-volunteer board of directors. Our mission is to bring nationally and internationally renowned, thought-provoking speakers who inform, educate, and entertain our audience! 
          </Typography>
          <Typography className={classes.popColor} variant="h2" gutterBottom>
            Speaker of the Month
          </Typography>
          <FeaturedSpeaker/>
      </div>
      </main>
      <Footer/>
    </div>
  )
}
