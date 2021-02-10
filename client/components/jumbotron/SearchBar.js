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
  IconButton,
  Box,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { QueryContext } from "../../src/Query";
import Link from "../../src/Link";
import { formatString } from "../../src/formatter";
import useOutsideClick from "./outSideClick.js";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#ffaf00",
    height: 50,
    color: "white",
    textTransform: "none",
    fontSize: 18,
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#ffaf00",
      opacity: 0.9,
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
  },
  card: {
    width: "100%",
    textDecoration: "none",
    height: 57,
    "&:hover": { backgroundColor: "#eee" },
    [theme.breakpoints.down("xs")]: {
      height: 55,
    },
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
      paddingLeft: 1,
      paddingRight: 3,
    },
  },
}));

export default function SearchBar() {
  const errors = false;
  const classes = useStyles();
  const theme = useTheme();
  const ref = React.useRef();
  const matches = theme.breakpoints.down("xs");
  const query = React.useContext(QueryContext);
  const { state, getTrips, loading } = query;
  const [data, setData] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    getTrips();
  }, []);

  useOutsideClick(ref, () => {
    setOpen(false);
  });

  const onChange = (e) => {
    setData(findData(e.target.value, state.trips));
    setOpen(false);
  };

  return (
    <Grid container spacing={0} style={{ marginTop: 10 }}>
      <Grid item xs={10} sm={11} md={10} lg={10}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="username"
          type="text"
          error={errors ? true : false}
          name="username"
          autoComplete="username"
          onChange={onChange}
          onKeyPress={() => setOpen(true)}
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
      <Grid item xs={1} sm={1} md={2} lg={2}>
        <Button
          fullWidth
          className={classes.button}
          onClick={() => setOpen(true)}
        >
          <span className={classes.search}>Search</span>
          <SearchIcon className={classes.icon} />
        </Button>
      </Grid>
      {state.trips.length > 0 &&
        data.map(
          (item, i) =>
            open && (
              <Grid
                key={i}
                item
                xs={12}
                sm={11}
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
                  <Card ref={ref} className={classes.card}>
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
                            {formatString(item.title, matches ? 10 : 20)}
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
    </Grid>
  );
}
