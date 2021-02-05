import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import users from "./data";
import { findData } from "./findData";
import { TextField, Grid, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

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
}));

export default function SearchBar() {
  const errors = false;
  const classes = useStyles();
  const [data, setData] = React.useState([]);

  const onChange = (e) => {
    setData(findData(e.target.value, users));
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
        <Button fullWidth className={classes.button}>
          <span className={classes.search}>Search</span>
          <SearchIcon className={classes.icon} />
        </Button>
      </Grid>
    </Grid>
  );
}
