import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { findData } from "./findData";
import {
  TextField,
  Grid,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { QueryContext } from "../../src/Query";
import Link from "../../src/Link";
import { formatString } from "../../src/formatter";
import useOutsideClick from "./outSideClick.js";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#ffaf00",
    height: 50,
    color: "white",
    textTransform: "none",
    fontSize: 18,
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#ffaf77",
    },
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      width: 50,
      right: theme.spacing(1.2),
    },
  },
  cssLabel: {
    color: "pink",
  },
  cssOutlinedInput: {
    backgroundColor: "white",
    height: 50,
  },
  cssFocused: {
    fontWeight: 600,
    border: "2px solid aqua",
    color: "#777",
    "&:hover": {
      border: "2px solid aqua",
    },
  },
  notchedOutline: {
    borderColor: "white",
    border: "none",
  },
  search: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon: {
    fontSize: 30,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
    },
  },
  card: {
    width: "100%",
    textDecoration: "none",
    height: 57,
    backgroundColor: "rgba(244, 244, 244, 0.9)",
    "&:hover": { backgroundColor: "#eee" },
  },
  locationicon: {
    color: "red",
  },
  bodytitle: {
    marginLeft: -40,
    [theme.breakpoints.down("sm")]: {
      marginLeft: -20,
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 3,
    },
  },
  cardContent: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 5,
      paddingRight: 7,
    },
  },
  alert: {
    opacity: 0.9,
  },
}));

export default function SearchBar() {
  const errors = false;
  const classes = useStyles();
  const theme = useTheme();
  const ref = React.useRef();
  const [isLoading, setIsLoading] = React.useState(false);
  const matches = theme.breakpoints.down("xs");
  const query = React.useContext(QueryContext);
  const { state, getTrips, loading } = query;
  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({ search: "" });
  const rows = [...state.trips];

  React.useEffect(() => {
    getTrips();
  }, []);

  useOutsideClick(ref, () => {
    setOpen(false);
    setValues({ search: "" });
  });

  const onChange = (e) => {
    setData(findData(e.target.value, rows || []));
    setValues({ ...values, [e.target.name]: e.target.value });
    setOpen(false);
  };

  const keyPress = (e) => {
    if (e.keyCode == 13) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      setTimeout(() => {
        setOpen(true);
      }, 1510);
    }
  };

  return (
    <Grid container spacing={0} style={{ marginTop: 10 }}>
      <Grid item xs={10} sm={10} md={10} lg={10}>
        <TextField
          variant="outlined"
          fullWidth
          required
          value={values.search}
          id="search"
          type="text"
          error={errors ? true : false}
          name="search"
          autoComplete="search"
          onChange={onChange}
          onKeyDown={keyPress}
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
      <Grid item xs={2} sm={2} md={2} lg={2}>
        <Button
          ref={ref}
          fullWidth
          className={classes.button}
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
              setOpen(true);
            }, 1500);
          }}
        >
          {isLoading ? (
            <CircularProgress size={20} style={{ color: "white" }} />
          ) : (
            <React.Fragment>
              <span className={classes.search}>Search</span>
              <SearchIcon className={classes.icon} />
            </React.Fragment>
          )}
        </Button>
      </Grid>
      {state.trips.length > 0 &&
        Object.keys(values.search).length > 0 &&
        data.map(
          (item, i) =>
            open && (
              <Grid
                key={i}
                item
                xs={12}
                sm={12}
                md={10}
                lg={10}
                style={{ marginTop: 3, zIndex: 999 }}
              >
                <Link
                  href={`/trip/${item.id}`}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Grid container spacing={0}>
                        <Grid item xs={1} sm={1} lg={1}>
                          <LocationOnIcon className={classes.locationicon} />
                        </Grid>
                        <Grid item xs={7} sm={8} lg={8}>
                          <Typography
                            variant="body1"
                            className={classes.bodytitle}
                          >
                            {formatString(item.title, 20)}
                          </Typography>
                        </Grid>
                        <Grid item xs={4} sm={3} lg={3} align="right">
                          <Typography variant="body1" style={{ color: "#777" }}>
                            {item.country.name}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            )
        )}
      {data.length === 0 && Object.keys(values.search).length === 0 && open ? (
        <Grid
          item
          xs={12}
          sm={10}
          md={10}
          lg={10}
          style={{ marginTop: 3, zIndex: 999 }}
        >
          <Alert
            severity="error"
            onClose={() => setOpen(false)}
            className={classes.alert}
          >
            Trip not found
          </Alert>
        </Grid>
      ) : Object.keys(values.search).length === 0 && open ? (
        <Grid
          item
          xs={12}
          sm={10}
          md={10}
          lg={10}
          style={{ marginTop: 3, zIndex: 999 }}
        >
          <Alert
            severity="error"
            onClose={() => setOpen(false)}
            className={classes.alert}
          >
            Trip not found
          </Alert>
        </Grid>
      ) : (
        ""
      )}
    </Grid>
  );
}
