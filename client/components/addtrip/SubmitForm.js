import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, IconButton } from "@material-ui/core";
import dynamic from "next/dynamic";
const SubmitButton = dynamic(() => import("./SubmitButton"), {
  ssr: false,
});
import PermMediaIcon from "@material-ui/icons/PermMedia";
import AttachmentIcon from "@material-ui/icons/Attachment";

const useStyles = makeStyles((theme) => ({
  label: {
    fontSize: 24,
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  iconButton: {
    marginLeft: 30,
    backgroundColor: "#C4C4C4",
    width: 70,
    height: 70,
    [theme.breakpoints.down("xs")]: {
      width: 50,
      height: 50,
    },
  },
  button: {
    textTransform: "none",
    color: "#ffaf00",
    fontSize: 18,
    backgroundColor: "#C4C4C4",
    width: 200,
    [theme.breakpoints.down("xs")]: {
      width: theme.spacing(3),
    },
  },
  upload: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    [theme.breakpoints.down("xs")]: {
      width: 70,
      height: 70,
    },
  },
  screen: {
    width: 70,
    height: 70,
    borderRadius: "100%",
    [theme.breakpoints.down("xs")]: {
      width: 50,
      height: 50,
    },
  },
}));

export default function SubmitForm({ form, values, setValues }) {
  const classes = useStyles();
  const [previewImage, setPreviewImage] = useState({
    imageTrip: "",
    screen1: "",
    screen2: "",
    screen3: "",
  });

  const onChange = (e) => {
    let file = e.target.files[0];
    setValues({
      ...values,
      [e.target.name]: file,
    });
    let reader = new FileReader();
    reader.onload = () => {
      setPreviewImage({ ...previewImage, [e.target.name]: [reader.result] });
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <Grid item xs={11} sm={10}>
        <label className={classes.label}>Image</label>
      </Grid>
      <Grid item xs={11} sm={10}>
        <Button
          variant="contained"
          component="label"
          className={classes.button}
          onChange={onChange}
          style={{ padding: previewImage.imageTrip.length > 0 && 0 }}
        >
          {previewImage.imageTrip.length > 0 ? (
            <img
              src={previewImage.imageTrip}
              className={classes.image}
              alt=""
            />
          ) : (
            <Fragment>
              <span className={classes.upload}>Upload Image</span>{" "}
              <AttachmentIcon style={{ fontSize: 30 }} />
            </Fragment>
          )}
          <input name="imageTrip" type="file" hidden />
        </Button>
        <IconButton
          className={classes.iconButton}
          variant="contained"
          component="label"
          onChange={onChange}
        >
          {previewImage.screen1.length > 0 ? (
            <img src={previewImage.screen1} className={classes.screen} alt="" />
          ) : (
            <PermMediaIcon style={{ color: "#ffaf00" }} />
          )}
          <input name="screen1" type="file" hidden />
        </IconButton>
        <IconButton
          className={classes.iconButton}
          variant="contained"
          component="label"
          onChange={onChange}
        >
          {previewImage.screen2.length > 0 ? (
            <img src={previewImage.screen2} className={classes.screen} alt="" />
          ) : (
            <PermMediaIcon style={{ color: "#ffaf00" }} />
          )}
          <input name="screen2" type="file" hidden />
        </IconButton>
        <IconButton
          className={classes.iconButton}
          variant="contained"
          component="label"
          onChange={onChange}
        >
          {previewImage.screen3.length > 0 ? (
            <img src={previewImage.screen3} className={classes.screen} alt="" />
          ) : (
            <PermMediaIcon style={{ color: "#ffaf00" }} />
          )}
          <input name="screen3" type="file" hidden />
        </IconButton>
      </Grid>
      <Grid item xs={11} sm={10}></Grid>
      <SubmitButton
        form={form}
        setValues={setValues}
        values={values}
        setPreviewImage={setPreviewImage}
      />
    </>
  );
}
