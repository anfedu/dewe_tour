import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, Typography, CardContent, Box } from "@material-ui/core";
import { content } from "./data";

const useStyles = makeStyles((theme) => ({
  image: {
    width: 70,
    height: 70,
    [theme.breakpoints.down("md")]: {
      width: 90,
      height: 90,
    },
    [theme.breakpoints.down("xs")]: {
      width: 75,
      height: 75,
    },
  },
  title: {
    marginTop: 10,
    fontSize: 24,
    fontFamily: "Nunito",
    fontWeight: "bold",
    height: 50,
    [theme.breakpoints.down("md")]: {
      fontSize: 26,
    },
    [theme.breakpoints.down("xs")]: {
      height: 20,
      fontSize: 24,
    },
  },
  body: {
    marginTop: 20,
    fontSize: 18,
    color: "#878787",
    fontFamily: "Nunito",
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  card: {
    width: 250,
    height: 350,
    paddingTop: 50,
    borderRadius: 5,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      paddingInline: 10,
    },
    [theme.breakpoints.down("xs")]: {
      width: 350,
      paddingInline: 17,
      height: 310,
    },
    display: "block",
    animation: `$skeletons 1200ms ease`,
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
}));

export default function ListCard() {
  const classes = useStyles();
  return (
    <>
      {content.map((item, index) => (
        <Grid item md={6} lg={3} key={index} align="center">
          <Card className={classes.card}>
            <Box>
              <img src={item.image} alt="promotion" className={classes.image} />
              <CardContent>
                <Typography variant="h3" className={classes.title}>
                  {item.title}
                </Typography>
                <Typography variant="body1" className={classes.body}>
                  {item.body}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      ))}
    </>
  );
}
