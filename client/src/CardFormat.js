import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SubmitModal from "../components/book/SubmitModal";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Card,
  CardActions,
  Typography,
  Grid,
  Chip,
  Button,
  Box,
  Divider,
} from "@material-ui/core";
import { formatDate, dayName, formatMoney, formatString } from "./formatter";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import dynamic from "next/dynamic";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useRouter } from "next/router";
const SubmitButton = dynamic(() => import("../components/book/SubmitButton"), {
  ssr: false,
});

const useStyles = makeStyles((theme) => ({
  cardTrip: {
    width: 350,
    height: 350,
    padding: "7px 9px",
    borderRadius: 5,
    cursor: "pointer",
    marginInline: theme.spacing(3),
    "&:hover": {
      backgroundColor: "#ffffee",
    },
    [theme.breakpoints.down("md")]: {
      width: 500,
    },
    [theme.breakpoints.down("sm")]: {
      width: 500,
    },
    [theme.breakpoints.down("xs")]: {
      width: 350,
    },
    // animation: `$skeletons 5000ms ease`,
  },
  "@keyframes skeletons": {
    "0%": {
      position: "relative",
      bottom: -300,
    },
    "100%": {
      position: "relative",
      bottom: 0,
    },
  },
  media: {
    width: "100%",
    height: 241,
    borderRadius: 5,
  },
  title: {
    fontFamily: "Nunito",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "justify",
    marginTop: 5,
  },
  money: {
    marginTop: 2,
    fontFamily: "Nunito",
    fontSize: 18,
    color: "#ffaf00",
    marginLeft: -7,
  },
  country: {
    fontFamily: "Nunito",
    fontSize: 18,
    color: "#878787",
  },
  cardTransaction: {
    marginBottom: 20,
    display: "flex",
    width: 1035,
    height: 419,
    margin: "0 auto",
    border: "1px solid #878787",
    borderRadius: 5,
    padding: "7px 33px 0 33px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: 470,
      padding: "7px 25px 7px 25px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      minHeight: 319,
      padding: "7px 7px 3px 7px",
    },
  },
  icon: {
    height: 68,
    width: 189,
    [theme.breakpoints.down("xs")]: {
      width: 120,
      height: 40,
    },
  },
  body: {
    fontFamily: "Nunito",
    fontSize: 14,
    color: "#959595",
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  approve: {
    width: 115,
    height: 24,
    fontSize: 12,
    borderColor: "#0ACF83",
    color: "#0ACF83",
    backgroundColor: "rgba(255,189,203, 0.1)",
    borderRadius: 3,
  },
  danger: {
    width: 115,
    height: 24,
    fontSize: 12,
    borderColor: "#f48fb1",
    color: "#f48fb1",
    backgroundColor: "rgba(255,189,203, 0.1)",
    borderRadius: 3,
  },
  warning: {
    width: 115,
    height: 24,
    fontSize: 12,
    borderColor: "#ffcc00",
    color: "#ffcc00",
    backgroundColor: "rgba(255,189,203, 0.1)",
    borderRadius: 3,
  },
  subtitle: {
    fontFamily: "Nunito",
    fontSize: 18,
    fontWeight: 800,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      marginTop: 25,
    },
  },
  book: {
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "Nunito",
    marginTop: 10,
    [theme.breakpoints.down("xs")]: {
      fontSize: 23,
    },
  },
  date: {
    fontFamily: "Nunito",
    fontSize: 18,
    color: "#878787",
    fontWeight: 300,
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
    },
  },
  image: {
    width: 138,
    height: 138,
    [theme.breakpoints.down("xs")]: {
      width: 100,
      height: 100,
    },
  },
  buttonImage: {
    marginTop: 20,
    width: 138,
    height: 138,
    backgroundColor: "#eee",
    [theme.breakpoints.down("xs")]: {
      width: 100,
      height: 100,
    },
  },
  user: {
    fontFamily: "Nunito",
    color: "#b1b1b1",
    fontSize: 18,
    marginTop: 13,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
      fontSize: 12,
    },
  },
  divider: {
    width: 1033,
    height: 2,
    position: "absolute",
    marginLeft: -33,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  qty: {
    display: "flex",
    justifyContent: "space-between",
    width: 100,
    fontFamily: "Nunito",
    fontSize: 18,
    fontWeight: 800,
    marginLeft: 30,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      width: 80,
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      fontSize: 12,
      width: 50,
    },
  },
  count: {
    fontFamily: "Nunito",
    fontSize: 18,
    fontWeight: 800,
    marginLeft: 70,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      fontSize: 12,
    },
  },
  grid1: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  grid2: {
    position: "relative",
    top: -93,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      top: -60,
    },
  },
  grid3: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  gridUser: {
    [theme.breakpoints.down("sm")]: {
      marginTop: -50,
      borderBottom: "2px solid #eee",
    },
    [theme.breakpoints.down("xs")]: {
      borderBottom: "0px solid #ccc",
    },
  },
  label: {
    fontFamily: "Nunito",
    fontSize: 14,
    color: "#959595",
    position: "absolute",
    bottom: -35,
    textTransform: "none",
    cursor: "pointer",
    textAlign: "center",
    fontSize: 13,
    "&:hover": {
      backgroundColor: "#eee",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  fullName: {
    fontFamily: "Nunito",
    fontSize: 18,
    fontWeight: 800,
    marginLeft: 10,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      marginLeft: 0,
    },
  },
  titleTrans: {
    fontFamily: "Nunito",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "justify",
    marginTop: 5,
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  quota: {
    position: "absolute",
    width: 62,
    height: 28,
    backgroundColor: "white",
    opacity: 0.9,
    paddingTop: 3,
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(34),
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(52),
      width: 70,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(52),
      width: 70,
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(34),
      width: 62,
    },
  },
}));

const url = process.env.server;
const date = new Date();

export function CardTrip({ item, transaction, index }) {
  const classes = useStyles();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const filter = transaction.filter((d) => d.trip.id === item.id);
  const sold = filter.length;
  const onTrip = () => {
    if (sold <= item.quota) {
      router.push(`/trip/${item.id}`);
    } else {
      setOpen(true);
    }
  };
  const enter = {
    enter: `${((index + 1) / 5).toFixed(2) * 100}s`,
  };
  AOS.init({
    offset: 10,
  });

  return (
    <>
      <SubmitModal rest="rest" open={open} setOpen={setOpen} />
      <Card
        data-aos="slide-up"
        data-aos-duration="950"
        data-aos-dellay="0"
        data-aos-once="false"
        className={classes.cardTrip}
        onClick={onTrip}
      >
        <Box variant="div" className={classes.quota}>
          <Typography
            variant="body1"
            style={{ fontSize: 14, fontWeight: "bold" }}
          >
            {sold} / {item.quota}
          </Typography>
        </Box>
        <img
          className={classes.media}
          onLoad={() => {}}
          onError={() => {}}
          src={`${url}/images/${item.image}`}
          alt=""
        />
        <Typography variant="h6" className={classes.title}>
          {formatString(item.title, 23)}
        </Typography>
        <CardActions
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography variant="h6" className={classes.money}>
            IDR. {formatMoney(item.price)}
          </Typography>
          <Typography variant="h6" className={classes.country}>
            {item.country.name}
          </Typography>
        </CardActions>
      </Card>
    </>
  );
}

export function CardTransaction({
  user,
  price,
  count,
  item,
  string,
  status,
  attachment,
  admin,
}) {
  const classes = useStyles();
  const [previewImage, setPreviewImage] = React.useState([]);
  const [files, setFiles] = React.useState(null);
  const onChange = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    setFiles(file);
    reader.onload = () => {
      setPreviewImage([reader.result]);
    };
    reader.readAsDataURL(file);
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));
  AOS.init();

  return (
    <Card
      data-aos="zoom-in"
      data-aos-duration="850"
      data-aos-once="true"
      className={classes.cardTransaction}
      style={{
        border: admin === "admin" && "none",
        boxShadow: admin === "admin" && "none",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <img src="/Icon2.png" className={classes.icon} alt="" />
          {!matches && (
            <React.Fragment>
              <br />
              <br />
            </React.Fragment>
          )}
          <Typography variant="h4" className={classes.titleTrans}>
            {item.title}
          </Typography>
          <Typography variant="h6" className={classes.body}>
            {item?.country?.name}
          </Typography>
          {!matches && (
            <React.Fragment>
              <br />
              <br />
            </React.Fragment>
          )}
          <Chip
            variant="outlined"
            size="small"
            label={
              status === "approve"
                ? "Approve"
                : status === "cancel"
                ? "Cancel"
                : "Waiting payment"
            }
            className={
              status === "approve"
                ? classes.approve
                : status === "cancel"
                ? classes.danger
                : classes.warning
            }
          />
        </Grid>
        <Grid item md={2} lg={2} className={classes.grid1}>
          {!matches && (
            <React.Fragment>
              <br />
              <br />
              <br />
              <br />
              <br />
            </React.Fragment>
          )}
          <Typography variant="h4" className={classes.subtitle}>
            Date Trip
          </Typography>
          <Typography variant="h6" className={classes.body}>
            {formatDate(item.dateTrip)}
          </Typography>
          {!matches && (
            <React.Fragment>
              <br />
              <br />
            </React.Fragment>
          )}
          <Typography variant="h4" className={classes.subtitle}>
            Accomodation
          </Typography>
          <Typography variant="h6" className={classes.body}>
            {item.accomodation}
          </Typography>
        </Grid>
        <Grid item md={2} lg={2} className={classes.grid1}>
          {!matches && (
            <React.Fragment>
              <br />
              <br />
              <br />
              <br />
              <br />
            </React.Fragment>
          )}
          <Typography variant="h4" className={classes.subtitle}>
            Duration
          </Typography>
          <Typography variant="h6" className={classes.body}>
            {item.day} Day {item.night} Night
          </Typography>
          {!matches && (
            <React.Fragment>
              <br />
              <br />
            </React.Fragment>
          )}
          <Typography variant="h4" className={classes.subtitle}>
            Transportation
          </Typography>
          <Typography variant="h6" className={classes.body}>
            {item.transportation}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} align="right">
          <Typography variant="h4" className={classes.book}>
            Booking
          </Typography>
          <Typography variant="h6" className={classes.date}>
            <span style={{ fontWeight: 900 }}>{dayName(date)}</span>,{" "}
            {formatDate(date)}
          </Typography>
          <Button
            variant="outlined"
            component="label"
            className={classes.buttonImage}
            onChange={onChange}
            style={{
              padding: Object.keys(previewImage).length > 0 && 0,
            }}
          >
            {attachment.length > 0 ? (
              <img
                src={`${process.env.server}/images/${attachment}`}
                className={classes.image}
                alt=""
              />
            ) : Object.keys(previewImage).length > 0 ? (
              <img src={previewImage} className={classes.image} alt="" />
            ) : (
              <React.Fragment>
                <InsertPhotoIcon
                  style={{ color: "#878787", width: 50, height: 50 }}
                />
              </React.Fragment>
            )}
            <input id="attachment" name="attachmentImage" type="file" hidden />
            {Object.keys(string).length > 0 && (
              <label htmlFor="attachment" className={classes.label} style={{}}>
                Upload payment
              </label>
            )}
          </Button>
        </Grid>
        <Grid item xs={4} sm={4} className={classes.grid2}>
          {!matches && (
            <React.Fragment>
              <br />
              <br />
              <br />
              <br />
              <br />
            </React.Fragment>
          )}
          <Typography variant="h4" className={classes.subtitle}>
            Date Trip
          </Typography>
          <Typography variant="h6" className={classes.body}>
            {formatDate(item.dateTrip)}
          </Typography>
          {!matches && (
            <React.Fragment>
              <br />
              <br />
            </React.Fragment>
          )}
          <Typography variant="h4" className={classes.subtitle}>
            Accomodation
          </Typography>
          <Typography variant="h6" className={classes.body}>
            {item.accomodation}
          </Typography>
        </Grid>
        <Grid item xs={8} sm={8} className={classes.grid2}>
          {!matches && (
            <React.Fragment>
              <br />
              <br />
              <br />
              <br />
              <br />
            </React.Fragment>
          )}
          <Typography variant="h4" className={classes.subtitle}>
            Duration
          </Typography>
          <Typography variant="h6" className={classes.body}>
            {item.day} Day {item.night} Night
          </Typography>
          {!matches && (
            <React.Fragment>
              <br />
              <br />
            </React.Fragment>
          )}
          <Typography variant="h4" className={classes.subtitle}>
            Transportation
          </Typography>
          <Typography variant="h6" className={classes.body}>
            {item.transportation}
          </Typography>
        </Grid>
        <Grid item xs={4} sm={1} md={1} lg={1} className={classes.gridUser}>
          <Typography
            variant="h6"
            className={classes.subtitle}
            style={{ marginTop: matchesXs && 0 }}
          >
            No
          </Typography>
          <Typography variant="h6" className={classes.user}>
            {item.id}
          </Typography>
          {matchesXs && <br />}
        </Grid>
        <Grid item xs={8} sm={5} md={3} lg={3} className={classes.gridUser}>
          <Typography variant="h6" className={classes.fullName}>
            Full Name
          </Typography>
          <Typography
            variant="h6"
            className={classes.user}
            style={{ marginLeft: !matchesXs && 10 }}
          >
            {user.username}
          </Typography>
        </Grid>
        <Grid item xs={4} sm={3} md={2} lg={2} className={classes.gridUser}>
          <Typography variant="h6" className={classes.subtitle}>
            Gender
          </Typography>
          <Typography variant="h6" className={classes.user}>
            Male
          </Typography>
        </Grid>
        <Grid item xs={8} sm={3} md={2} lg={2} className={classes.gridUser}>
          <Typography variant="h6" className={classes.subtitle}>
            Phone
          </Typography>
          <Typography variant="h6" className={classes.user}>
            {user.phone}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} className={classes.grid3}></Grid>
        <Grid item xs={2} sm={2} md={1} lg={1}>
          {!matches && (
            <React.Fragment>
              <br />
              <br />
            </React.Fragment>
          )}
          <Typography variant="h6" className={classes.qty}>
            <Box variant="span">Qty</Box>
            <Box variant="span">:</Box>
          </Typography>
          <Typography
            variant="h6"
            className={classes.qty}
            style={{
              marginTop: 15,
            }}
          >
            <Box variant="span">Total</Box>
            <Box variant="span">:</Box>
          </Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={3} lg={3}>
          {!matches && (
            <React.Fragment>
              <br />
              <br />
            </React.Fragment>
          )}
          <Typography variant="h6" className={classes.count}>
            {count}
          </Typography>
          <Typography
            variant="h6"
            className={classes.count}
            style={{ color: "red", marginTop: 15 }}
          >
            IDR. {formatMoney(price)}
          </Typography>
        </Grid>
        <Grid item lg={12} style={{ position: "absolute" }}>
          {matchesXs && (
            <Divider
              style={{
                height: 1,
                width: "92vw",
                position: "absolute",
                top: 393,
              }}
            />
          )}
          <Divider
            className={classes.divider}
            style={{
              top: 311,
            }}
          />
          <Divider
            className={classes.divider}
            style={{
              top: 353,
            }}
          />
        </Grid>
      </Grid>
      {Object.keys(string).length > 0 && (
        <SubmitButton
          user={user}
          price={price}
          count={count}
          files={files}
          tripId={item.id}
          status={status}
        />
      )}
    </Card>
  );
}
