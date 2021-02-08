import React, { Fragment, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, TextField, Container } from "@material-ui/core";
import dynamic from "next/dynamic";

const SubmitForm = dynamic(() => import("./SubmitForm"), {
  ssr: false,
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
    },
  },
  form: {
    marginTop: theme.spacing(3),
    width: "100vw",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(1),
    },
  },
  cssLabel: {
    color: "pink",
  },
  cssOutlinedInput: {
    marginTop: 10,
    backgroundColor: "#c4c4c4",
    width: "100%",
  },
  cssFocused: {
    fontWeight: 600,
    color: "#333",
  },
  notchedOutline: {
    borderColor: "#aaa",
  },
  label: {
    fontSize: 24,
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  addtrip: {
    fontSize: 36,
    fontWeight: "bold",
    [theme.breakpoints.up("lg")]: { marginLeft: 30 },
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
    },
  },
  daynight: {
    marginTop: -10,
    [theme.breakpoints.down("md")]: {
      width: 90,
    },
    [theme.breakpoints.down("xs")]: {
      width: 70,
    },
  },
}));

export default function FormInput() {
  const classes = useStyles();
  const form = useRef(null);
  const [errorType, setErrorType] = useState({
    title: false,
    countryId: false,
    accomodation: false,
    transportation: false,
    day: false,
    night: false,
    dateTrip: false,
    quota: false,
    description: false,
    price: false,
  });

  const [values, setValues] = useState({
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
  });

  const tripArr = [
    { id: 1, label: "Title Trip", name: "title", type: "text" },
    { id: 2, label: "Country", name: "countryId", type: "text" },
    { id: 3, label: "Accomodation", name: "accomodation", type: "text" },
    { id: 4, label: "Transportation", name: "transportation", type: "text" },
    {
      id: 5,
      label: "Duration",
      name: { day: "day", night: "night" },
      type: "number",
    },
    { id: 6, label: "Date Trip", name: "dateTrip", type: "date" },
    { id: 7, label: "Quota", name: "quota", type: "number" },
    { id: 7, label: "Price", name: "quota", type: "number" },
    { id: 8, label: "Description", name: "description", type: "text" },
  ];

  const onChange = (e) => {
    const target = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [target]: value });
    if (
      value.length < 3 &&
      [target][0] !== "quota" &&
      [target][0] !== "day" &&
      [target][0] !== "night" &&
      [target][0] !== "price" &&
      [target][0] !== "countryId" &&
      [target][0] !== "dateTrip"
    ) {
      setErrorType({ [target]: true });
    } else if (
      [target][0] === "quota" &&
      value.length < 1 &&
      typeof value !== "number"
    ) {
      setErrorType({ [target]: true });
    } else if (
      [target][0] === "day" &&
      value.length < 1 &&
      typeof value !== "number"
    ) {
      setErrorType({ [target]: true });
    } else if (
      [target][0] === "night" &&
      value.length < 1 &&
      typeof value !== "number"
    ) {
      setErrorType({ [target]: true });
    } else if (
      [target][0] === "price" &&
      value.length < 1 &&
      typeof value !== "number"
    ) {
      setErrorType({ [target]: true });
    } else {
      setErrorType({ [target]: false });
    }
  };

  return (
    <div className={classes.root}>
      <Container>
        <Typography component="h1" variant="h5" className={classes.addtrip}>
          Add Trip
        </Typography>
      </Container>
      <form ref={form} className={classes.form}>
        <Grid container spacing={2} justify="center">
          <Grid item xs={11} sm={10}></Grid>
          {tripArr.map((item, index) => (
            <Fragment key={index}>
              {item.label !== "Duration" &&
                item.label !== "Description" &&
                item.label !== "Price" &&
                item.label !== "Quota" && (
                  <Grid item xs={11} sm={10}>
                    <label className={classes.label}>{item.label}</label>
                    <TextField
                      variant="outlined"
                      required
                      size="small"
                      fullWidth
                      error={errorType[item.name] ? true : false}
                      helperText={
                        errorType[item.name] &&
                        `${item.label} minimum 3 character`
                      }
                      id={`${item.name}`}
                      type={`${item.type}`}
                      name={`${item.name}`}
                      autoComplete={`${item.name}`}
                      value={`${values[item.name]}`}
                      onChange={onChange}
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
                )}
              {item.label === "Duration" && (
                <>
                  <Grid item xs={11} sm={10} style={{ marginBottom: -7 }}>
                    <Typography variant="h6" className={classes.label}>
                      {item.label}
                    </Typography>
                  </Grid>
                  <Grid item xs={11} sm={10}>
                    <TextField
                      variant="outlined"
                      className={classes.daynight}
                      required
                      size="small"
                      id="day"
                      type="number"
                      name="day"
                      style={{ marginRight: 30 }}
                      autoComplete="day"
                      onChange={onChange}
                      value={`${values["day"]}`}
                      error={errorType["day"] ? true : false}
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
                    <label className={classes.label}>Day</label>
                    <TextField
                      variant="outlined"
                      className={classes.daynight}
                      style={{ marginRight: 30, marginLeft: 50 }}
                      required
                      size="small"
                      id="night"
                      type="number"
                      name="night"
                      autoComplete="night"
                      value={`${values["night"]}`}
                      onChange={onChange}
                      error={errorType["night"] ? true : false}
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
                    <label className={classes.label}>Night</label>
                  </Grid>
                </>
              )}
              {item.label === "Quota" && (
                <Grid item xs={11} sm={10}>
                  <label className={classes.label}>{item.label}</label>
                  <TextField
                    variant="outlined"
                    required
                    size="small"
                    fullWidth
                    error={errorType["quota"] ? true : false}
                    helperText={errorType["quota"] && `Quota must be number`}
                    id={`${item.name}`}
                    type="number"
                    name={`${item.name}`}
                    autoComplete={`${item.name}`}
                    value={`${values[item.name]}`}
                    onChange={onChange}
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
              )}
              {item.label === "Price" && (
                <Grid item xs={11} sm={10}>
                  <label className={classes.label}>{item.label}</label>
                  <TextField
                    variant="outlined"
                    required
                    size="small"
                    fullWidth
                    error={errorType["price"] ? true : false}
                    helperText={errorType["price"] && `Price must be number`}
                    id={`${item.name}`}
                    type="number"
                    name="price"
                    autoComplete={`${item.name}`}
                    value={`${values["price"]}`}
                    onChange={onChange}
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
              )}
              {item.label === "Description" && (
                <Grid item xs={11} sm={10}>
                  <label className={classes.label}>{item.label}</label>
                  <TextField
                    variant="outlined"
                    required
                    size="small"
                    fullWidth
                    id="description"
                    type="text"
                    name="description"
                    autoComplete="description"
                    value={`${values["description"]}`}
                    multiline
                    rows={3}
                    rowsMax={4}
                    onChange={onChange}
                    error={errorType[item.name] ? true : false}
                    helperText={
                      errorType[item.name] && `${item.label} is required`
                    }
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
              )}
            </Fragment>
          ))}
          <SubmitForm form={form} values={values} setValues={setValues} />
        </Grid>
      </form>
    </div>
  );
}
