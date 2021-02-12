import React from "react";
import { Grid, Box } from "@material-ui/core";
import { CardTrip } from "../../src/CardFormat";
import { QueryContext } from "../../src/Query";
import CardTripSkeleton from "../skeleton/CardTripSkeleton.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100vw",
    // padding: "0 6.7%",
  },
}));

export default function CardList() {
  const classes = useStyles();
  const query = React.useContext(QueryContext);
  const { state, getTrips, getTransaction, loading } = query;
  const items = state.trips;
  const transactions = state.transaction;

  React.useEffect(() => {
    getTrips();
    getTransaction();
  }, []);

  return (
    <Box variant="div" className={classes.root}>
      {loading ? (
        <Grid container spacing={0} justify="center">
          {[1, 2, 3].map((item, i) => (
            <React.Fragment key={i}>
              <CardTripSkeleton />
            </React.Fragment>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={0}>
          {items.map((item, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={12}
              md={6}
              lg={4}
              align="center"
              style={{ marginTop: 30 }}
            >
              <CardTrip index={index} transaction={transactions} item={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
