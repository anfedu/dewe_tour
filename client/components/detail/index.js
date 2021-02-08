import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Content from "./Content";
import Information from "./Information";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#E5E5E5",
    padding: "70px 27vh",
    minHeight: "81.7vh",
    [theme.breakpoints.down("md")]: {
      minHeight: "82.99vh",
      padding: "70px 5vh",
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: "87.1vh",
      padding: "30px 1vh",
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

export default function Detail({ item, loading }) {
  const classes = useStyles();

  return (
    <Box variant="div" className={classes.root}>
      {loading ? (
        "Loading ..."
      ) : (
        <React.Fragment>
          <Content loading={loading} item={item} />
          <Information item={item} />
        </React.Fragment>
      )}
    </Box>
  );
}
