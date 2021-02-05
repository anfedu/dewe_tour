import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid } from "@material-ui/core";
import SearchBar from "./SearchBar";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 500,
    color: "white",
    padding: "50px 90px",
    [theme.breakpoints.down("md")]: {
      padding: "50px 30px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "50px 15px",
    },
  },
  title: {
    fontWeight: 600,
    fontSize: 64,
    letterSpacing: -3,
    [theme.breakpoints.down("xs")]: {
      fontSize: 47,
      letterSpacing: -2,
    },
  },
  subTitle: {
    fontSize: 64,
    fontWeight: 3,
    letterSpacing: -2,
    [theme.breakpoints.down("md")]: {
      fontSize: 50,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 33,
      marginTop: 10,
      letterSpacing: -1,
    },
  },
  body: {
    fontFamily: "Nunito",
    fontWeight: 550,
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
      <SearchBar />
    </Box>
  );
}
