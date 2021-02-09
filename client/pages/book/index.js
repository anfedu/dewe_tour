import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../../components/layout";
import Pay from "../../components/book";

const useStyles = makeStyles((theme) => ({}));

export default function index() {
  const classes = useStyles();
  return (
    <Layout>
      <Pay />
    </Layout>
  );
}
