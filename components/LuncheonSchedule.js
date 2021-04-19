import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export function LuncheonSchedule() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Season Luncheon Tickets:</Typography>
          <Typography className={classes.secondaryHeading}>$120</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            These tickets can be ordered at the same time as the season lecture ticket.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Individual luncheon tickets:</Typography>
          <Typography className={classes.secondaryHeading}>
            $25
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A limited number of these tickets are available and can be purchased by calling 559.555.1212. These tickets must be purchased by the Friday prior to the lecture.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Luncheon Schedule:</Typography>
          <Typography className={classes.secondaryHeading}>
            2017
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <List component="nav" aria-label="main">
            <ListItem>
              <ListItemIcon>
                <EmojiPeopleIcon />
              </ListItemIcon>
              <ListItemText primary="January 18" secondary="Amy Chua"/>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmojiPeopleIcon />
              </ListItemIcon>
              <ListItemText primary="October 19" secondary="Jeffrey Toobin"/>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmojiPeopleIcon />
              </ListItemIcon>
              <ListItemText primary="November 16" secondary="Andress Ross Sorkin"/>
            </ListItem>
           </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Luncheon Schedule:</Typography>
          <Typography className={classes.secondaryHeading}>
            2018
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <List component="nav" aria-label="main">
            <ListItem>
              <ListItemIcon>
                <EmojiPeopleIcon />
              </ListItemIcon>
              <ListItemText primary="February 16" secondary="Scott Sampson"/>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmojiPeopleIcon />
              </ListItemIcon>
              <ListItemText primary="March 21" secondary="Carlos Eire"/>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmojiPeopleIcon />
              </ListItemIcon>
              <ListItemText primary="April 18" secondary="Ronan Tynan"/>
            </ListItem>
           </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}