import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(18,18,18,0.3) 90%), url('/jumbotron.png') no-repeat fixed",
    backgroundSize: "100vw",
    width: "100%",
    height: "10.35vh",
    [theme.breakpoints.down("md")]: {
      background:
        "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(18,18,18,0.3)), url('/jumbotron.png') no-repeat center center fixed",
      backgroundSize: "cover",
      width: "100%",
    },
  },
  list: {
    overflowY: "auto",
    margin: 0,
    padding: 0,
    listStyle: "none",
    height: "100%",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
    },
  },
  container: {
    minHeight: "81.9vh",
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
