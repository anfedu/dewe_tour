import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Profile from "../../components/profile";
import Layout from "../../components/layout";

const useStyles = makeStyles((theme) => ({}));

export default function index() {
  const classes = useStyles();
  return (
    <Layout>
      <Profile />
    </Layout>
  );
}
