import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from "../static/places.js";
import useWindowPosition from '../hooks/useWindowPosition';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        [theme.breakpoints.down('md')]:{
            flexDirection: 'column',
        }
    },
    sectionWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '13vh 0',
    },
    sectionImageCard: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    textPortofolio: {
        fontFamily: 'Nunito',
        color: '#111',
        cursor: 'pointer',
        marginBottom: '13vh',
        textTransform: 'uppercase',
        backgroundColor: '#E1CBC6',
        paddingLeft: '12px'
    },
    textProject: {
        color: '#E1CBC6',
        transition: '.3s',
        textAlign: 'center',
        fontFamily: 'Itim',
        backgroundColor: '#111',
        padding: '4px 12px',
        '&:hover': {
            color: '#fff',
        },
    },
  }));

function Content() {
    const classes = useStyles();
    const checked = useWindowPosition("header");
    return (
        <div className={classes.root}>
            <div className={classes.sectionWrapper} id="Content">
                <h1 className={classes.textPortofolio}>Portfolio <span className={classes.textProject}>Project</span></h1>
            </div>

            <div className={classes.sectionImageCard}>
                <ImageCard place={places[0]} checked={checked}/>
                <ImageCard place={places[1]} checked={checked}/>
                {/* <ImageCard place={places[2]} checked={checked}/>
                <ImageCard place={places[3]} checked={checked}/> */}
            </div>
        </div>
    )
}

export default Content;
