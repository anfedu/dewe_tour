import React from "react";
import { Dialog, DialogContent, Slide } from "@material-ui/core";
import Register from "./Register";
import Login from "./Login";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 416,
    paddingBottom: 20,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  container: {
    [theme.breakpoints.down("xs")]: {
      marginTop: -100,
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, handleClose }) {
  const classes = useStyles();
  return (
    <>
      <Dialog
        open={open.modal}
        TransitionComponent={Transition}
        keepMounted
        className={classes.container}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent className={classes.root}>
          <img
            style={{ position: "absolute", top: 0, right: 0 }}
            src="hibiciusLogin.png"
            alt=""
          />
          <img
            style={{ position: "absolute", top: 0, left: 0 }}
            src="palmLogin.png"
            alt=""
          />
          {open.login && <Login />}
          {open.register && <Register />}
        </DialogContent>
      </Dialog>
    </>
  );
}
