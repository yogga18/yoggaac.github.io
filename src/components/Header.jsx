import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
// M-ui Icons
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// React Scroll Effect
import { Link as Scroll } from 'react-scroll'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    appbar: {
        background: 'none',
        fontFamily: 'Itim',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    appbarTitle: {
        flexGrow: '1',
        cursor:'pointer',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    logo: {
        color: '#E1CBC6',
        transition: '.3s',
        fontFamily: 'Itim',
        padding: '0 12px',
        '&:hover': {
            color: "#fff",
         },
    },
    colorText: {
        color: '#E1CBC6',
        transition: '.3s',
        fontFamily: 'Itim',
        backgroundColor: '#111',
        padding: '0 12px',
        '&:hover': {
            color: "#fff",
         },
    },
    Title:{
        color: '#fff',
        fontFamily: 'Nunito',
        fontSize: '3.5em',
        cursor:'pointer',
    },
    bannerWrapper:{
        textAlign: 'center',
        marginTop: '30vh',
    },
    goDownIcon:{
        fontSize: '3.5rem',
        color: '#E1CBC6',
        transition: '.3s',
        '&:hover': {
            color: "#fff",
        },
    },
  }));

function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, [])

    return (
        <div className={classes.root} id="header">

            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}><span className={classes.logo}>Site.🌊</span></h1>
                    <IconButton>
                        <SortIcon className={classes.icon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={30}>
                <div className={classes.bannerWrapper}>
                    <h1 className={classes.Title}>Welcome to <br/> <span className={classes.colorText}>My Site</span></h1>
                    <Scroll to="Content" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDownIcon}/>
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>

        </div>
    )
}

export default Header;
