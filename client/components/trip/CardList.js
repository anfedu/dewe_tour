import React from "react";
import { Grid } from "@material-ui/core";
import { CardTrip } from "../../src/CardFormat";
import { QueryContext } from "../../src/Query";
import Skeleton from "@material-ui/lab/Skeleton";

export default function CardList() {
  const skeleton = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const query = React.useContext(QueryContext);
  const { state, loading, getTrips } = query;
  const items = state.trips;

  React.useEffect(() => {
    getTrips();
  }, []);

  return (
    <>
      {items.map((item, index) => (
        <Grid
          item
          key={index}
          xs={12}
          sm={12}
          lg={4}
          align="center"
          style={{ marginTop: 30 }}
        >
          <CardTrip item={item} />
        </Grid>
      ))}
    </>
  );
}
