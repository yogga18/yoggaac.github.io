import React from 'react';
// import Main from './components/Main.jsx';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Content from './components/Content';

// bg
// 1. https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260
// 2. https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
// 3. https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
// 4. https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
// 5. https://images.pexels.com/photos/3889659/pexels-photo-3889659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
// 6. https://images.pexels.com/photos/4673851/pexels-photo-4673851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
// 7. 

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "https://user-images.githubusercontent.com/64015271/117535291-55822780-b01f-11eb-9aaf-ec86f5e2804e.png"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Header/>
      <Content/>
    </div>
  )
}

export default App;
