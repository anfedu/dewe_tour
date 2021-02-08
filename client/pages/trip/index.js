import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../../components/layout";
import dynamic from "next/dynamic";

const Trip = dynamic(() => import("../../components/trip"), {
  ssr: false,
});

const useStyles = makeStyles((theme) => ({}));

export default function addtrip() {
  const classes = useStyles();

  return (
    <Layout>
      <Trip />
    </Layout>
  );
}
