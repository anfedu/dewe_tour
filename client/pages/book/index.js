import React from "react";
import Layout from "../../components/layout";
import Pay from "../../components/book";
import { AuthContext } from "../../src/Provider";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  const context = React.useContext(AuthContext);
  const { user } = context;
  React.useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);
  return (
    <Layout>
      <Pay />
    </Layout>
  );
}
