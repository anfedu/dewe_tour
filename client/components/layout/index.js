import Navbar from "./Navbar";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "url('/jumbotron.png') no-repeat fixed",
    backgroundSize: "100vw",
    height: 547,
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <Box variant="div" className={classes.root}>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
}
