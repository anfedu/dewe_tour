import React from "react";
import {
  Dialog,
  DialogContent,
  Slide,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 20,
    width: "100%",
    textAlign: "center",
    overflowX: "hidden",
    padding: "0 30px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  container: {
    [theme.breakpoints.down("xs")]: {
      marginTop: -100,
    },
  },
  button: {
    textTransform: "none",
    padding: 0,
    fontSize: 23,
    fontFamily: "Nunito",
    fontWeight: 900,
    textDecoration: "underline",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  type: {
    fontFamily: "Nunito",
    fontSize: 23,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function ModalLogin({ open, setOpen }) {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = () => {
    localStorage.removeItem("booking");
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        className={classes.container}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent className={classes.root}>
          <Typography variant="body1" className={classes.type}>
            Your payment will be confirmed within 1 x 24 hours
          </Typography>
          <Typography variant="body1" className={classes.type}>
            To see orders click{" "}
            <Button onClick={onSubmit} className={classes.button}>
              Here
            </Button>{" "}
            thank you
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}
