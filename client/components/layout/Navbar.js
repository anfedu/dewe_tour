import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Link from "../../src/Link";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appbar: {
    margin: 0,
  },
  toolbar: {
    display: "flext",
    justifyContent: "space-between",
  },
  register: {
    backgroundColor: "#ffaf00",
    color: "white",
    textTransform: "none",
    height: 30,
    width: 100,
    fontWeight: "bold",
    boxShadow: "none",
    fontFamily: "Open Sans",
    "&:hover": {
      background: "none",
      border: "1px solid white",
    },
  },
  login: {
    background: "none",
    border: "1px solid white",
    color: "white",
    marginRight: 20,
    height: 30,
    width: 100,
    fontWeight: "bold",
    textTransform: "none",
    boxShadow: "none",
    fontFamily: "Open Sans",
    "&:hover": {
      backgroundColor: "#ffaf00",
      border: "none",
    },
  },
  icon: {
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      left: 0,
    },
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      left: -5,
      width: 170,
    },
  },
  linkWrap: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar color="transparent" position="relative" className={classes.appbar}>
      <Container>
        <Toolbar className={classes.toolbar}>
          <img src="/Icon.png" className={classes.icon} alt="dewe tour icon" />
          <Box className={classes.linkWrap}>
            <Button variant="contained" className={classes.login}>
              Login
            </Button>
            <Button variant="contained" className={classes.register}>
              Register
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
