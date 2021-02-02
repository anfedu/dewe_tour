import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 500,
    color: "white",
    padding: "50px 90px",
  },
  title: {
    fontFamily: "Open Sans",
    fontWeight: 600,
    fontSize: 64,
    letterSpacing: -3,
  },
  subTitle: {
    fontFamily: "Open Sans",
    fontSize: 64,
    fontWeight: 10,
    letterSpacing: -3,
  },
  body: {
    fontFamily: "Open Sans",
    fontWeight: 500,
    fontSize: 18,
    letterSpacing: -0.5,
    marginTop: 50,
  },
}));

export default function Jumbotron() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Explore
      </Typography>
      <Typography variant="h3" className={classes.subTitle}>
        your amazing city together
      </Typography>
      <Typography variant="h5" className={classes.body}>
        Find great places to holliday
      </Typography>
    </Box>
  );
}
