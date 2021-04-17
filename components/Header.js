import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Link from '@material-ui/core/Link';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: '100%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-center',
    justifyContent: 'space-around',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    backgroundColor: 'white',
    color: '#212121',
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
  subTitle: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  popColor: {
    color: '#607D8B',
  },
  nav: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
      color: '#607D8B',
    },
  },
  img: {
    width: '100%',
    height: 'auto',
  },
  column: {
    width: '8%',
  },
}));

export function Header() {
  const classes = useStyles();
  return (
    <div className={`${classes.root}`}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <div id='logo' className={classes.column}>
            <img className={classes.img} src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwebpages.uncc.edu%2Fkcardoso%2FLabs%2FLab5%2Ftown_hall%2Fimages%2Ftown_hall_logo.gif&f=1&nofb=1'/>
          </div>
          <div id='title'>
            <Typography className={`${classes.title} ${classes.popColor}`}  variant="h4" noWrap>
              San Joaquin Valley Town Hall
            </Typography>
            <Typography className={classes.subTitle} variant="subtitle1" noWrap>
              Celebrating our <span className={classes.bold}>75th</span> Year
            </Typography>
          </div>
          <div id='nav'>
            <Typography className={`${classes.nav}`}>
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/tickets">
                <a>Tickets</a>
              </Link>
              <Link href="#">
                Link
              </Link>
              <Link href="#">
                Link
              </Link>
              <Link href="#">
                Link
              </Link>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}