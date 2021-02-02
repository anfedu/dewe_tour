import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffaf00",
    height: "54px",
    lineHeight: "54px",
    textAlign: "center",
    position: "relative",
    bottom: 0,
    color: "white",
    fontFamily: "Open Sans",
    fontSize: 18,
    fontWeight: 400,
  },
  image: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      Copyright @ 2020 Dewe Tour - Ahmad Nuril Firdaus - DW17YQDIL. All Rights
      reserved
      <img src="/cornerFooter.png" className={classes.image} alt="" />
    </Box>
  );
}
