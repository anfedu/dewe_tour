import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import SubmitModal from "./SubmitModal";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#ffaf00",
    width: 213,
    height: 50,
    color: "white",
    fontWeight: 900,
    position: "absolute",
    bottom: "13%",
    right: "12%",
    fontFamily: "Nunito",
    fontSize: 18,
    [theme.breakpoints.down("md")]: {
      right: "5%",
    },
    [theme.breakpoints.down("sm")]: {
      bottom: "10%",
      right: "3%",
      width: 153,
      height: 30,
      fontSize: 16,
    },
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      zIndex: 999,
      bottom: theme.spacing(7),
    },
  },
  circular: {
    color: "white",
  },
  alert: {
    position: "absolute",
    width: 960,
    margin: "0 auto",
    top: 89,
    [theme.breakpoints.down("sm")]: {
      width: 590,
    },
    [theme.breakpoints.down("xs")]: {
      width: "92%",
    },
  },
}));

export default function SubmitButton({
  user,
  price,
  count,
  tripId,
  status,
  files,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const booking = localStorage.getItem("booking");
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState("");
  const token = localStorage.getItem("token");
  const formData = new FormData();
  formData.append("counterQty", count);
  formData.append("status", status);
  formData.append("userId", user.id);
  formData.append("tripId", tripId);
  formData.append("attachmentImage", files);
  formData.append("total", price);
  const postTransaction = async () => {
    setIsLoading(true);
    if (!files) {
      setIsLoading(false);
      setErrors("please upload your payment proof image");
    }
    const url = `${process.env.server}/api/v1/transaction`;
    // const url = `http://localhost:5000/api/v1/transaction`;
    const config = {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await fetch(url, config)
      .then((res) => res.json)
      .then((data) => {
        setOpen(true);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErrors("Please chooose your transactions correctly");
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    postTransaction();
  };

  return (
    <>
      {errors !== undefined && Object.keys(errors).length > 0 && (
        <Alert
          severity="error"
          className={classes.alert}
          onClose={() => setErrors("")}
        >
          {errors}
        </Alert>
      )}
      {booking && (
        <Button
          variant="contained"
          className={classes.button}
          onClick={onSubmit}
        >
          {isLoading ? (
            <CircularProgress
              size={matches ? 20 : 40}
              className={classes.circular}
            />
          ) : (
            "Pay"
          )}
        </Button>
      )}
      <SubmitModal open={open} setOpen={setOpen} rest="" />
    </>
  );
}
