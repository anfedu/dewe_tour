import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { AuthContext } from "../../src/Provider";
import { QueryContext } from "../../src/Query";
import { useRouter } from "next/router";
import { CardTransaction } from "../../src/CardFormat";
import CardTransactionSkeleton from "../skeleton/CardTransactionSkeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#E5E5E5",
    padding: "50px 13vh",
    // minHeight: "81.9vh",
    [theme.breakpoints.down("md")]: {
      minHeight: "82.99vh",
      padding: "50px 3vh",
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: "87.1vh",
      padding: "50px 1vh",
    },
  },
  button: {
    height: 48,
    width: 150,
    backgroundColor: "#ffaf00",
    color: "white",
    textTransform: "none",
    fontSize: 18,
    fontWeight: "bold",
  },
}));

export default function Pay() {
  const classes = useStyles();
  const router = useRouter();
  const price = router.query.pid;
  const count = router.query.cid;
  const tripId = router.query.tid;
  const [blank, setBlank] = React.useState(true);
  const context = React.useContext(AuthContext);
  const query = React.useContext(QueryContext);
  const { user } = context;
  const { state, getTrip } = query;

  React.useEffect(() => {
    if (tripId) {
      getTrip(tripId);
      setBlank(false);
    }
  }, [tripId]);

  return (
    <Box variant="div" className={classes.root}>
      {blank ? (
        <CardTransactionSkeleton />
      ) : (
        <CardTransaction
          user={user}
          price={price}
          count={count}
          item={state.trip}
          string="string"
          status="Waiting payment"
          attachment=""
          admin=""
          zoom="zoom-in"
        />
      )}
    </Box>
  );
}
