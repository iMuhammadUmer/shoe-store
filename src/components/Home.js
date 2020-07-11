import React from "react";
 import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: theme.spacing(120),
    margin: 0,

    "& > *": {
      width: theme.spacing(120),
      height: theme.spacing(60),
      backgroundColor: "red",
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper>Home</Paper>
    </div>
  );
}
