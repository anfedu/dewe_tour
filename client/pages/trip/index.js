import React from "react";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { AuthContext } from "../../src/Provider";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import CardList from "../../components/trip";
import Link from "../../src/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "50px 6.7% 90px 6.7%",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 0 20px 0",
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

export default function addtrip() {
  const classes = useStyles();
  const router = useRouter();
  const context = React.useContext(AuthContext);
  const { user } = context;
  React.useEffect(() => {
    if (user.role !== "Admin") {
      router.push("/");
    }
  }, [user]);
  return (
    <Layout>
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
    </Layout>
  );
}
