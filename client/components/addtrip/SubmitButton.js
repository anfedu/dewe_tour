import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  submit: {
    backgroundColor: "#ffaf00",
    color: "white",
    textTransform: "none",
    fontWeight: "bold",
    fontSize: 18,
    width: 250,
    height: 40,
    marginBottom: 50,
    marginTop: 50,
  },
}));

export default function SubmitButton({ form, setValues, setPreviewImage }) {
  const classes = useStyles();
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = React.useState(false);
  const [alert, setAlert] = React.useState({
    type: "success",
    body: "",
    color: "springgreen",
  });
  const initialValues = {
    title: "",
    countryId: "",
    accomodation: "",
    transportation: "",
    day: "",
    night: "",
    dateTrip: "",
    quota: "",
    price: "",
    description: "",
  };
  const initialImage = {
    imageTrip: "",
    screen1: "",
    screen2: "",
    screen3: "",
  };

  const fileUpload = async () => {
    const url = "https://anfdewetourapi.herokuapp.com/api/v1/trip";
    const data = new FormData(form.current);
    const config = {
      method: "POST",
      body: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    setIsLoading(true);
    await fetch(url, config)
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 200) {
          setAlert({ body: "Message sent successfully", color: "springgreen" });
          setValues(initialValues);
          setPreviewImage(initialImage);
        }
        if (json.status === 500 && Object.keys(json.data).length > 0) {
          setAlert({
            type: "error",
            body: "Please fill the blanks",
            color: "red",
          });
        }
      })
      .catch(() => {
        setAlert({
          type: "error",
          body: "Please fill the blanks",
          color: "red",
        });
      });
    setIsLoading(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fileUpload();
  };

  return (
    <>
      <Grid item xs={11} sm={10} align="center">
        {Object.keys(alert.body).length > 0 && (
          <Alert
            severity={alert.type}
            style={{ border: `1px solid ${alert.color}`, marginTop: 10 }}
            onClose={() => setAlert({ body: "" })}
          >
            {alert.body}
          </Alert>
        )}
        <Button
          type="submit"
          variant="contained"
          className={classes.submit}
          onClick={onSubmit}
        >
          {isLoading ? (
            <CircularProgress style={{ color: "white" }} />
          ) : (
            "Submit"
          )}
        </Button>
      </Grid>
    </>
  );
}
