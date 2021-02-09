import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import { AuthContext } from "../../src/Provider";
import { QueryContext } from "../../src/Query";
import { CardTransaction } from "../../src/CardFormat";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#E5E5E5",
    padding: "50px 13vh",
    minHeight: "81.7vh",
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
  const { state, getTransaction, loading } = query;
  const [items, setItems] = React.useState([]);
  const [alert, setAlert] = React.useState("");

  React.useEffect(() => {
    if (state.transaction.length > 0) {
      const array = [...state.transaction];
      const filter = array.filter((d) => d.userId === parseInt(user.id));
      setItems(filter);
      if (filter.length === 0) {
        setAlert("You have never done a transaction");
      }
    }
  }, [state.transaction]);
  React.useEffect(() => {
    getTransaction();
  }, []);

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
      {items.map((item, index) => (
        <Box key={index} variant="div">
          <CardTransaction
            user={user}
            price={30}
            count={3}
            item={item.trip}
            status={item.status}
            string=""
            attachment={item.attachment}
          />
        </Box>
      ))}
    </Box>
  );
}
