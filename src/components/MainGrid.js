import React from "react";
import "../App.css";
import { Grid } from "@material-ui/core";
import SocialNav from "./SocialNav";

export const MainGrid = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={2} className="leftGrid">
        <SocialNav />
      </Grid>
      <Grid item xs={12} sm={10}></Grid>
    </Grid>
  );
};
