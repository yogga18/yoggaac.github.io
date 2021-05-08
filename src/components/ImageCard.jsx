import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    background: 'rgba(0,0,0,0.3)',
    marginBottom: '25px',
  },
  media: {
    height: 300,
  },
  linkTo: {
    textDecoration: 'none',
    color: '#fff',
  },
  titleApps: {
    fontFamily: 'Nunito',
    fontSize: '1.8em',
    fontWeight: 'bold',
    color: '#fff',
  },
  descriptonTitle: {
    fontSize: '1.1em',
    color: '#fff',
  },
});

export default function ImageCard({place, checked}) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={place.imageUrl}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.titleApps}>
              {place.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.descriptonTitle}>
              {place.description}
            </Typography>
          </CardContent>
          <hr/>
        <CardActions>
          <Button
          size="small">
            <a className={classes.linkTo} href={place.demoApps}>Demo Apps</a>
          </Button>
          <Button
          size="small">
              <a className={classes.linkTo} href={place.github}>Github</a>
          </Button>
        </CardActions>
      </Card>
    </Collapse>
  );
}
