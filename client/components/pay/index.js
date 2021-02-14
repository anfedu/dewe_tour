import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import { AuthContext } from "../../src/Provider";
import { QueryContext } from "../../src/Query";
import { CardTransaction } from "../../src/CardFormat";
import Alert from "@material-ui/lab/Alert";
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
  const context = React.useContext(AuthContext);
  const query = React.useContext(QueryContext);
  const { user } = context;
  const { state, getTransactionUser, loading } = query;
  const [items, setItems] = React.useState([]);
  const [alert, setAlert] = React.useState("");

  React.useEffect(() => {
    if (user.id) {
      getTransactionUser(user.id);
    }
  }, [user.id]);
  React.useEffect(() => {
    if (state.transactionUser.length > 0) {
      setItems(state.transactionUser);
    }
  }, [state.transactionUser]);

  return (
    <Box variant="div" className={classes.root}>
      {Object.keys(alert).length > 0 && (
        <Alert
          severity="warning"
          className={classes.alert}
          onClose={() => setAlert("")}
        >
          {alert}
        </Alert>
      )}

      {loading ? (
        <CardTransactionSkeleton />
      ) : (
        items.map((item, index) => (
          <Box key={index} variant="div">
            <CardTransaction
              user={user}
              price={item.total}
              count={item.counterQty}
              item={item.trip}
              status={item.status}
              string=""
              attachment={item.attachment}
              admin=""
              zoom="zoom-in"
            />
          </Box>
        ))
      )}
    </Box>
  );
}
