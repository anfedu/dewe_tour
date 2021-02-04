import React from "react";
import { Dialog, DialogContent, Slide } from "@material-ui/core";
import Login from "./Login";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, handleClose }) {
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent style={{ width: 416 }}>
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
          <Login />
        </DialogContent>
      </Dialog>
    </>
  );
}
