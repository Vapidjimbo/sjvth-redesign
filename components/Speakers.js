import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useState } from 'react';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={4}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 700,
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
  }));


export function SpeakerTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
  return (
      <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Amy Chua" {...a11yProps(0)} />
          <Tab label="Scott Sampson" {...a11yProps(1)} />
          <Tab label="Jeffrey Toobin" {...a11yProps(2)} />
          <Tab label="Andrew Ross Sorkin" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <Typography className={classes.popColor} variant="h6" gutterBottom>
            Amy Chua: Info Coming Soon
        </Typography>
          <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JYmuCJ9rj6iLyE6S4ExjFQHaFh%26pid%3DApi&f=1'/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/IojqO9vEgYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <Typography className={classes.popColor} variant="h6" gutterBottom>
             Scott Sampson
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            February:  
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            What's 75 million years old and brand spanking new? A teenage Utahceratops! Come to the Saroyan, armed with your best dinosaur roar, when Scott Sampson, Research Curator at the Utah Museum of Natural History, steps to the podium. Sampson's research has focused on the ecology and evolution of late Cretaceous dinosaurs and he has conducted fieldwork in a number of countries in Africa.
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Scott Sampson is a Canadian-born paleontologist who received his Ph.D. in zoology from the University of Toronto. His doctoral work focused on two new species of ceratopsids, or horned dinosaurs, from the Late Cretaceous of Montana, as well as the growth and function of certopsid horns and frills.
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Following graduation in 1993, Sampson spent a year working at the American Museum of Natual History in New York City, followed by five years as assistant professor of anatomy at the New York College of Osteopathic Medicine on Long Island. He arrived at the University of Utah accepting a dual position as assistant professor in the Department of Geology and Geophysics and curator of vertebrate paleontology at the Utah Museum of Natural History. His research interests largely revolve around the phylogenetics, functional morphology, and evolution of Late Cretaceous dinosaurs.
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            In addition to his museum and laboratory-based studies, Sampson has conducted paleontological work in Zimbabwe, South Africa, and Madagascar, as well as the United States and Canada. He was also the on-the-air host for the Discovery Channel's Dinosaur Planet and recently completed a book, Dinosaur Odyssey: Fossil Threads in the Web of Life, which is one of the most comprehensive surveys of dinosaurs and their worlds to date.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
         <Typography className={classes.popColor} variant="h6" gutterBottom>
            Jeffrey Toobin: Info Coming Soon
         </Typography>
          <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.2e4gQhF-Eu_X7K8-QRq9fQHaEK%26pid%3DApi&f=1'/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
         <Typography className={classes.popColor} variant="h6" gutterBottom>
            Andrew Ross Sorkin: Info Coming Soon
         </Typography>
          <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.1sbTn7xUMbqYMRwmxb210gHaLA%26pid%3DApi&f=1'/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
