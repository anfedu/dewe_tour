import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import Link from "../../src/Link";
import CardList from "./CardList";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#E5E5E5",
    padding: "50px 6.7% 90px 6.7%",
    minHeight: "81.9vh",
    [theme.breakpoints.down("md")]: {
      minHeight: "82.99vh",
      padding: "70px 5vh",
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: "87.1vh",
      padding: "30px 1vh",
    },
  },
  button: {
    height: 48,
    width: 150,
    backgroundColor: "#ffaf00",
    color: "white",
    textTransform: "none",
    fontWeight: "bold",
    fontSize: 18,
    "&:hover": {
      textDecoration: "none",
    },
    [theme.breakpoints.down("xs")]: {
      height: 30,
      width: 100,
      fontSize: 16,
    },
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: { fontSize: 25 },
  },
}));

export default function Admin() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container spacing={0}>
      <Grid item xs={6} lg={6}>
        <Typography variant="h3" className={classes.title}>
          Income Trip
        </Typography>
      </Grid>
      <Grid item xs={6} lg={6} align="right">
        <Button
          component={Link}
          href="/addtrip"
          variant="contained"
          className={classes.button}
        >
          Add Trip
        </Button>
      </Grid>
      <CardList />
    </Grid>
  );
}
