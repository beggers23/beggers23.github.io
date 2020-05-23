import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid, CardHeader, CardMedia } from "@material-ui/core";
import BrowserButtons from "../BrowserButtons/BrowserButtons";

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginRight: 0,
    width: 50,
    padding: `0 ${theme.spacing(1)}px`,
  },
  action: {
    visibility: "hidden",
    marginLeft: 0,
    width: 50,
    padding: `0 ${theme.spacing(1)}px`,
  },
  cardHeader: {
    padding: 0,
    textAlign: "center",
  },
  cardMedia: {
    height: 200,
    margin: `0 auto`,
    background: "center top",
    backgroundSize: "cover",
  },
}));
const PortfolioItem = ({ data }) => {
  const classes = useStyles();
  const { image, title } = data;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardHeader
          avatar={<BrowserButtons />}
          action={<BrowserButtons />}
          classes={{ avatar: classes.avatar, action: classes.action }}
          className={classes.cardHeader}
          subheader={title.toLowerCase()}
        />
        <CardMedia className={classes.cardMedia} title={title} image={image} />
      </Card>
    </Grid>
  );
};

export default PortfolioItem;
