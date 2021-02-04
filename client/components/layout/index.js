import Navbar from "./Navbar";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(18,18,18,0.3) 90%, rgba(229,229,229,0.3) 100%), url('/jumbotron.png') no-repeat fixed",
    backgroundSize: "100vw",
    height: 547,
    [theme.breakpoints.down("md")]: {
      background:
        "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(18,18,18,0.3)), url('/jumbotron.png') no-repeat center center fixed",
      backgroundSize: "cover",
      width: "100vw",
    },
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
