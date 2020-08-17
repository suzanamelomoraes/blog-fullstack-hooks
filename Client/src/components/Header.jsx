import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    margin: 10,
    fontFamily: ['"Lobster"', 'cursive', '"Roboto Slab"', 'serif'].join(','),
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    textAlign: 'center',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h3' align='center' className={classes.title}>
            My Blog
          </Typography>
        </Toolbar>
        <Link className={classes.link} to={'/'}>
          Home
        </Link>
      </AppBar>
    </div>
  );
};

export default Header;
