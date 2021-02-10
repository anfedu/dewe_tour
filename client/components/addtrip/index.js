import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import FormInput from "./FormInput";
import { AuthContext } from "../../src/Provider";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#E5E5E5",
    paddingTop: 70,
    minHeight: "81vh",
    [theme.breakpoints.down("md")]: {
      minHeight: "82.99vh",
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: "87.1vh",
      paddingTop: 30,
    },
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function Admin() {
  const classes = useStyles();
  const router = useRouter();
  const context = useContext(AuthContext);
  const { user } = context;
  if (user.role !== "Admin") {
    router.push("/");
  }

  return (
    <Box variant="div" className={classes.root}>
      <FormInput />
    </Box>
  );
}
