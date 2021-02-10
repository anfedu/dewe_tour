import React from "react";
import { Dialog, Slide, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { CardTransaction } from "../../src/CardFormat";
import DialogActions from "@material-ui/core/DialogActions";
import { useRouter } from "next/router";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80vw",
    overflowX: "hidden",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  container: {
    [theme.breakpoints.down("xs")]: {
      marginTop: -100,
      padding: 0,
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
  approve: {
    textTransform: "none",
    width: 100,
    height: 35,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#0ACF83",
    [theme.breakpoints.down("xs")]: {
      width: 70,
      height: 30,
    },
  },
  cancel: {
    textTransform: "none",
    width: 100,
    height: 35,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#FF0742",
    [theme.breakpoints.down("xs")]: {
      width: 70,
      height: 30,
    },
  },
  actions: {
    overflowX: "hidden",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function ModalLogin({ open, setOpen, item, dispatch, rows }) {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const [loading, setLoading] = React.useState({
    aprove: false,
    cancel: false,
  });
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = async (status) => {
    const id = item.id;
    const token = localStorage.getItem("token");
    const url = `${process.env.server}/api/v1/transaction/${id}`;
    const config = {
      method: "PATCH",
      body: JSON.stringify({ status }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    await fetch(url, config)
      .then((res) => res.json)
      .then(() => {
        router.prefetch("/");
        handleClose();
        const objIndex = [...rows].findIndex((d) => d.id === item.id);
        rows[objIndex].status = status;
        dispatch({
          type: "TRANSACTION",
          payload: [...rows],
        });
        setLoading({ approve: false, cancel: false });
      })
      .catch((err) => {
        console.log(err, "error for update status");
        setLoading({ approve: false, cancel: false });
      });
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
        maxWidth="xl"
      >
        {Object.keys(item).length > 0 && matches && (
          <img
            src={`${process.env.server}/images/${item.attachment}`}
            style={{ width: 164, height: 164 }}
            alt=""
          />
        )}
        {Object.keys(item).length > 0 && !matches && (
          <CardTransaction
            user={item.user}
            price={item.total}
            count={item.counterQty}
            item={item.trip}
            status={item.status}
            string=""
            attachment={item.attachment}
            admin="admin"
          />
        )}
        <DialogActions className={classes.actions}>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setLoading({ cancel: true });
              handleUpdate("cancel");
            }}
            variant="contained"
            className={classes.cancel}
          >
            {loading.cancel ? (
              <CircularProgress size={20} style={{ color: "white" }} />
            ) : (
              "Cancel"
            )}
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setLoading({ approve: true });
              handleUpdate("approve");
            }}
            variant="contained"
            className={classes.approve}
          >
            {loading.approve ? (
              <CircularProgress size={20} style={{ color: "white" }} />
            ) : (
              "Approve"
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
