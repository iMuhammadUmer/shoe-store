import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  grid: {
    display: "flex",
    justifyContent: "center",
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3} className={classes.grid}>
          <Link to="/" className={"link"}>
            <img src={logo} alt="logo" />
          </Link>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.grid}>
          <Link to="/">Home</Link>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.grid}>
          <Link to="#">Collection</Link>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.grid}>
          <Link to="/about">About Us</Link>
        </Grid>
      </Grid>
    </div>
  );
};
