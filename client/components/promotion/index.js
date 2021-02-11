import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import ListCard from "./ListCard";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: -115,
    padding: "0 105px",
    minHeight: 300,
    [theme.breakpoints.down("md")]: {
      padding: "0 90px",
      marginTop: -75,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: -55,
      padding: "0 0",
    },
  },
}));

export default function index() {
  const classes = useStyles();
  return (
    <Grid container spacing={3} justify="center" className={classes.root}>
      <ListCard />
    </Grid>
  );
}
