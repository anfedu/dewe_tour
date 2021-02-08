import React from "react";
import Layout from "../../components/layout";
import Detail from '../../components/detail'
import { useRouter } from "next/router";
import { QueryContext } from "../../src/Query";

export default function Trip() {
  const router = useRouter();
	const [loading, setLoading] = React.useState(false)
  const query = router.query.index;
  const context = React.useContext(QueryContext);
  const { state, getTrip } = context;
  const item = state.trip

  React.useEffect(() => {
			setLoading(true)
		if (query) {
     getTrip(query);
		setLoading(false)
		}
  }, [query]);

  return (
    <Layout>
      <Detail item={item} loading={loading} />
    </Layout>
  );
}
