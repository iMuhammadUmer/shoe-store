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
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <Carousel auto>
              <div style={{ backgroundColor: "tomato", height: "100%" }}>
                Frame 1
              </div>
              <div style={{ backgroundColor: "orange", height: "100%" }}>
                Frame 2
              </div>
              <div style={{ backgroundColor: "orchid", height: "100%" }}>
                Frame 3
              </div>
            </Carousel>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
