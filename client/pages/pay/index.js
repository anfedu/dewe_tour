import React from "react";
import Layout from "../../components/layout";
import Pay from "../../components/pay";
import { useRouter } from "next/router";
import { AuthContext } from "../../src/Provider";

export default function index() {
  const context = React.useContext(AuthContext);
  const router = useRouter();
  const { user } = context;
  React.useEffect(() => {
    if (user.role !== "User") {
      router.push("/");
    }
  }, [user]);
  return (
    <Layout>
      <Pay />
    </Layout>
  );
}
