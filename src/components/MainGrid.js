import React from "react";

import { Grid } from "@material-ui/core";

export const MainGrid = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={2}></Grid>
      <Grid item xs={12} sm={10}></Grid>
    </Grid>
  );
};
