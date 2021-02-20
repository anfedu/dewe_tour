import React, { useContext, useEffect } from "react";
import LayoutHome from "../components/layout/Home";
import Layout from "../components/layout";
import { AuthContext } from "../src/Provider";
import Admin from "../components/admin";
import { Box, Grid, Typography } from "@material-ui/core";
import CardList from "../components/trip";
import { makeStyles } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Promotion from "../components/promotion";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    padding: "20px 6.7% 90px 6.7%",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 3% 20px 3%",
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
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  palm: {
    position: "absolute",
    left: 0,
    top: theme.spacing(99),
    zIndex: -99,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
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
    <>
      <CssBaseline />
      {user.role === "Admin" ? (
        <Layout>
          <Admin />
        </Layout>
      ) : (
        <LayoutHome>
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
        </LayoutHome>
      )}
      {user.role !== "Admin" ? (
        <Box variant="div" style={{ color: "#E5E5E5" }}>
          <img className={classes.hibicius} src="/hibicius.png" alt="palm" />
          <img className={classes.palm} src="/palm.png" alt="palm" />
        </Box>
      ) : (
        ""
      )}
    </>
  );
}
