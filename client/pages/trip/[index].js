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
      display: 'none'
		},
		[theme.breakpoints.down('xs')]: {
      display: 'none'
		}
  },
  palm: {
    position: "absolute",
    left: 0,
    top: theme.spacing(99),
		[theme.breakpoints.down('sm')]: {
      display: 'none'
		},
		[theme.breakpoints.down('xs')]: {
      display: 'none'
		}
  },
}))

export default function Trip() {
	const classes = useStyles()

  return (
    <Layout>
      <img className={classes.hibicius} src="/hibicius.png" alt="" />
      <img className={classes.palm} src="/palm.png" alt="" />
      <Detail   />
    </Layout>
  );
}
