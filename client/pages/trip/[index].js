import React from "react";
import Layout from "../../components/layout";
import Detail from '../../components/detail'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  hibicius: {
    position: "absolute",
    right: 0,
    top: theme.spacing(57),
		[theme.breakpoints.down('sm')]: {
			zIndex: -99
		}
  },
  palm: {
    position: "absolute",
    left: 0,
    top: theme.spacing(99),
		[theme.breakpoints.down('sm')]: {
			zIndex: -99
		}
  },
}))

export default function Trip() {
	const classes = useStyles()

  return (
    <Layout>
		<div style={{ minHeight: '81.9vh' }}>
      <img className={classes.hibicius} src="/hibicius.png" alt="" />
      <img className={classes.palm} src="/palm.png" alt="" />
      <Detail   />
			</div>
    </Layout>
  );
}
