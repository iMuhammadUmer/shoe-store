import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "60px",
    display: "flex",
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    textDecoration: "none",
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item sm={2} className={classes.grid}>
          <Link to="/" className={"link"}>
            <img src={logo} alt="logo" />
          </Link>
        </Grid>
        <Grid item sm={1} className={classes.grid}>
          <Link to="/" className={"link"}>
            Men
          </Link>
        </Grid>
        <Grid item sm={1} className={classes.grid}>
          <Link to="/products" className={"link"}>
            Women
          </Link>
        </Grid>
        <Grid item sm={1} className={classes.grid}>
          <Link to="/about" className={"link"}>
            Kids
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
