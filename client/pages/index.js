import React, { useContext, useEffect } from "react";
import Layout from "../components/layout";
import Jumbotron from "../components/jumbotron";
import Promotion from "../components/promotion";
import { AuthContext } from "../src/Provider";
import Admin from "../components/admin";
import { Box, Grid, Typography } from "@material-ui/core";
import CardList from "../components/trip/CardList";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "30vh",
    padding: "20px 6.7% 90px 6.7%",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 3px 20px 3px",
    },
  },
  title: {
    marginTop: 70,
    fontSize: 48,
    fontWeight: 800,
    fontFamily: "Nunito",
    textAlign: "center",
  },
  hibicius: {
    position: "absolute",
    right: 0,
    top: theme.spacing(57),
    zIndex: -99,
  },
  palm: {
    position: "absolute",
    left: 0,
    top: theme.spacing(99),
    zIndex: -99,
  },
}));

export default function Index() {
  const classes = useStyles();
  const context = useContext(AuthContext);
  const { user } = context;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {user.role === "Admin" ? (
        <Admin />
      ) : (
        <Box variant="div">
          <Jumbotron />
          <Promotion />
          <Typography variant="h3" className={classes.title}>
            Group Tour
          </Typography>
          <Grid
            container
            spacing={0}
            className={classes.container}
            justify="center"
          >
            <CardList />
          </Grid>
        </Box>
      )}
      {(user.role !== "Admin") &
      (
        <React.Fragment>
          <img className={classes.hibicius} src="/hibicius.png" alt="" />
          <img className={classes.palm} src="/palm.png" alt="" />
        </React.Fragment>
      )}
    </Layout>
  );
}
