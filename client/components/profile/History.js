import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { CardTransaction } from "../../src/CardFormat";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Nunito",
    fontSize: 36,
    fontWeight: "bold",
    marginLeft: "6.5%",
    marginBottom: "3%",
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
      marginLeft: "3%",
    },
  },
  container: {
    marginTop: "8%",
    [theme.breakpoints.down("xs")]: {
      marginTop: 50,
    },
  },
}));

export default function History({ histories, user }) {
  const classes = useStyles();
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    if (histories) {
      const filter = [...histories].filter((d) => d.status === "approve");
      setItems([...filter]);
    }
  }, [histories]);

  return (
    <Grid item lg={12} className={classes.container}>
      <Typography variant="h3" className={classes.title}>
        History Trip
      </Typography>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <CardTransaction
            user={user}
            price={item.total}
            count={item.counterQty}
            item={item.trip}
            status={item.status}
            string=""
            attachment={item.attachment}
            admin=""
          />
        </React.Fragment>
      ))}
    </Grid>
  );
}