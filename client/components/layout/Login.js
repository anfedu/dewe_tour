import React, { useState, useContext } from "react";
import { Button, TextField, Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { useForm } from "../../src/hooks";
import Link from "../../src/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
    },
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textTransform: "none",
    fontWeight: "bold",
    backgroundColor: "#ffaf00",
    color: "white",
    fontSize: 24,
  },
  alert: {
    margin: "5px 0",
    border: "1px solid rgba(156, 39, 176, 0.8)",
    borderRadius: 5,
    width: "100%",
    backgroundColor: "rgba(156, 39, 176, 0.2)",
    color: "#ccc",
  },
  cssLabel: {
    color: "pink",
  },
  cssOutlinedInput: {
    backgroundColor: "#E5E5E5",
  },
  cssFocused: {
    fontWeight: 600,
    color: "#777",
  },
  notchedOutline: {
    borderColor: "white",
    border: "none",
  },
}));

export default function Login(props) {
  const classes = useStyles();
  const [errors, setErrors] = useState("");
  const [values, setValues] = useState("");

  return (
    <div className={classes.root}>
      <Typography
        component="h1"
        variant="h5"
        style={{ fontSize: 36, fontWeight: "bold" }}
      >
        Login
      </Typography>
      {Object.keys(errors).length > 0 && (
        <Alert severity="error" className={classes.alert}>
          {errors}
        </Alert>
      )}
      <form className={classes.form} noValidate>
        <Grid container spacing={2} justify="center">
          <Grid item xs={11}>
            <label
              style={{
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              Email
            </label>
            <TextField
              variant="outlined"
              required
              size="small"
              fullWidth
              id="username"
              type="text"
              error={errors ? true : false}
              name="username"
              autoComplete="username"
              InputLabelProps={{
                shrink: true,
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
          </Grid>
          <Grid item xs={11}>
            <label
              style={{
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              Password
            </label>
            <TextField
              variant="outlined"
              required
              size="small"
              fullWidth
              id="username"
              type="text"
              error={errors ? true : false}
              name="username"
              autoComplete="username"
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
          </Grid>
          <Grid item xs={11}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Login
            </Button>
          </Grid>
        </Grid>
        <Box align="center">
          Don't have an account yet?{" "}
          <Button color="inherit" style={{ textTransform: "none" }}>
            Register here
          </Button>
        </Box>
      </form>
    </div>
  );
}
