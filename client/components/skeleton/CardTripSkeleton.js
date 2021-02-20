import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardTrip: {
    width: 350,
    height: 350,
    padding: "7px 9px",
    borderRadius: 5,
    marginTop: 30,
    cursor: "pointer",
    marginInline: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      width: 500,
    },
    [theme.breakpoints.down("sm")]: {
      width: 500,
    },
    [theme.breakpoints.down("xs")]: {
      width: 350,
      marginInline: 0,
    },
  },
}));

export default function CardTripSkeleton() {
  const classes = useStyles();

  return <Skeleton variant="rect" className={classes.cardTrip} />;
}
