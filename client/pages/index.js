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
    padding: "20px 6% 90px 6.5%",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 3px 20px 3px",
    },
  },
  title: {
    marginTop: 50,
    fontSize: 48,
    fontWeight: 800,
    fontFamily: "Nunito",
    textAlign: "center",
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
        <Box variant="div">
          <Admin />
        </Box>
      ) : (
        <Box variant="div">
          <Jumbotron />
          <Promotion />
          <Typography variant="h3" className={classes.title}>
            Group Tour
          </Typography>
          <Grid container spacing={0} className={classes.container}>
            <CardList />
          </Grid>
        </Box>
      )}
    </Layout>
  );
}
