import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: theme.spacing(120),
    margin: theme.spacing(8),
    marginLeft: theme.spacing(10),
    "& > *": {
      width: theme.spacing(120),
      height: theme.spacing(60),
    },
  },
}));

export default function Content() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} />
    </div>
  );
}
