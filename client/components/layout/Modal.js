import React, { useState, useContext } from "react";
import { Dialog, DialogContent, Slide } from "@material-ui/core";
import Login from "./Login";
import Register from "./Register";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import { AuthContext } from "../../src/Provider";

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

export default function ModalLogin({ open, handleClose }) {
  const classes = useStyles();
  const context = useContext(AuthContext);
  const router = useRouter();
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://anfdewetourapi.herokuapp.com/api/v1/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    const data = await response.json(values);
    setIsLoading(false);
    if (data.status === 500) {
      setErrors(data.error.message);
    }
    if (data.status === 200) {
      router.push("/");
      context.login(data.data);
      handleClose();
      setValues({ email: "", password: "" });
    }
    return data;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <>
      <Dialog
        open={open.login ? open.login : false}
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
          <Login
            isLoading={isLoading}
            onChange={onChange}
            onSubmit={onSubmit}
            errors={errors}
            setErrors={setErrors}
            values={values}
          />
        </DialogContent>
      </Dialog>
      <Dialog
        open={open.register ? open.register : false}
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
          <Register
            isLoading={isLoading}
            onChange={onChange}
            onSubmit={onSubmit}
            errors={errors}
            setErrors={setErrors}
            values={values}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
