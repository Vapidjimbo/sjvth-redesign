import styles from '../styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles';
import { NextHead } from '../components/Head';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TicketForm } from '../components/TicketForm';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '0 5em',
    padding: '4em',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    border: '2px solid black',
    borderRadius: '4px',
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-start',
    color: '#607D8B',
  },
  ticketList: {
    margin: ' 0 5em',
    position: '-webkit-sticky',
    position: 'sticky',
    top: 0,
  },
}));

export default function Tickets() {
  const classes = useStyles();
  return (
    <div className={styles.container}>
      <NextHead/>
      <Header/>
      <main className={styles.main}>
        <div className={classes.root}>
         <div className={`${classes.ticketList}`}>
          <Typography className={`${classes.title}`} variant="h6" noWrap>
            Our Ticket Packages
          </Typography>
          <List component="nav" aria-label="main">
            <ListItem>
              <ListItemIcon>
                <ConfirmationNumberIcon />
              </ListItemIcon>
              <ListItemText primary="Season Package:" secondary="$95"/>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ConfirmationNumberIcon />
              </ListItemIcon>
              <ListItemText primary="Patron Package:" secondary="$200"/>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ConfirmationNumberIcon />
              </ListItemIcon>
              <ListItemText primary="Single Speaker:" secondary="$25"/>
            </ListItem>
          </List>
         </div>
         <div>
            <TicketForm />
         </div>
      </div>
        
      </main>
      <Footer/>
    </div>
  )
}
