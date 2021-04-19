import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '0 7em',
  },
  media: {
    height: 140,
  },
});

export function FeaturedSpeaker() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href='/speakers'>
        <CardMedia
          className={classes.media}
          image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F_m6sVhskT_Fs%2FSw1x6NunMDI%2FAAAAAAAAEWQ%2FApTBaryPIkk%2Fw1200-h630-p-k-no-nu%2FScottSampson2_lowres.jpg&f=1&nofb=1"
          title="Scott Sampson"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Scott Sampson
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            What's 75 million years old and brand spanking new? A teenage Utahceratops! Come to the Saroyan, armed with your best dinosaur roar, when Scott Sampson, Research Curator at the Utah Museum of Natural History, steps to the podium. Sampson's research has focused on the ecology and evolution of late Cretaceous dinosaurs and he has conducted fieldwork in a number of countries in Africa.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}