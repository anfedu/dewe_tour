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

export default function SubmitButton({
  form,
  setValues,
  setPreviewImage,
  values,
}) {
  const classes = useStyles();
  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjEzMTA4ODk4fQ.Dm7l-Uz4UJMPqk6BiTtMrRzURN_GfwMUNBgY5JrHDS4";
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
    eat: "",
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
    setIsLoading(true);
    // const url = "http://localhost:5000/api/v1/trip";
    const url = "https://anfdewetourapi.herokuapp.com/api/v1/trip";
    const data = new FormData();
    data.append("title", values.title);
    data.append("countryId", parseInt(values.countryId));
    data.append("accomodation", values.accomodation);
    data.append("transportation", values.transportation);
    data.append("eat", values.eat);
    data.append("day", parseInt(values.day));
    data.append("night", parseInt(values.night));
    data.append("dateTrip", values.dateTrip);
    data.append("quota", parseInt(values.quota));
    data.append("price", parseInt(values.price));
    data.append("description", values.description);
    data.append("imageTrip", values.imageTrip);
    data.append("screen1", values.screen1);
    data.append("screen2", values.screen2);
    data.append("screen3", values.screen3);
    const config = {
      method: "POST",
      body: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
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
            <CircularProgress size={23} style={{ color: "white" }} />
          ) : (
            "Submit"
          )}
        </Button>
      </Grid>
    </>
  );
}
