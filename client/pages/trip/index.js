import React from "react";
import Layout from "../../components/layout";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { AuthContext } from "../../src/Provider";

const Trip = dynamic(() => import("../../components/trip"), {
  ssr: false,
});

export default function addtrip() {
  const router = useRouter();
  const context = React.useContext(AuthContext);
  const { user } = context;
  React.useEffect(() => {
    if (user.role !== "Admin") {
      router.push("/");
    }
  }, [user]);
  return (
    <Layout>
      <Trip />
    </Layout>
  );
}
