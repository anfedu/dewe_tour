import React from "react";
import Layout from "../components/layout";
import Jumbotron from "../components/jumbotron";
import Promotion from "../components/promotion";

export default function Index() {
  return (
    <Layout>
      <Jumbotron />
      <Promotion />
    </Layout>
  );
}
