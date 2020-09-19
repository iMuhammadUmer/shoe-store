import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Carousel from "re-carousel";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Welcome to home</h1>
    </div>
  );
};
