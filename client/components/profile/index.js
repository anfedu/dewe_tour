import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import Link from "../../src/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#E5E5E5",
    padding: "100px 13vh",
    minHeight: "81.7vh",
    [theme.breakpoints.down("md")]: {
      minHeight: "82.99vh",
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: "87.1vh",
    },
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    height: 48,
    width: 150,
    backgroundColor: "#ffaf00",
    color: "white",
    textTransform: "none",
    fontSize: 18,
    fontWeight: "bold",
  },
}));

export default function Admin() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container spacing={0} justify="center">
      <Grid item xs={5}>
        Admin
      </Grid>
    </Grid>
  );
}
