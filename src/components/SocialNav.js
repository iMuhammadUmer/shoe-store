import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import "../App.css";
import logo from "../images/logo.svg";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import github from "../images/github.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",

    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(78),
      background: "transparent",
    },
  },
}));

export default function SocialNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} className="socialNavPaper">
        <img src={logo} alt="Logo" />
        <div className="socialNavImages">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={github} alt="github" />
        </div>
      </Paper>
    </div>
  );
}
