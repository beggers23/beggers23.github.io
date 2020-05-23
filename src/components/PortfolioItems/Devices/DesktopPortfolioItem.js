import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Grid,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import BrowserButtons from "../../BrowserButtons/BrowserButtons";

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginRight: 0,
    width: 50,
    padding: `0 ${theme.spacing(1)}px`,
  },
  action: {
    width: 50,
    margin: `${theme.spacing(0.5)}px 0`,
  },
  subheader: {
    color: theme.palette.getContrastText(theme.palette.grey[700]),
  },
  content: {
    margin: `${theme.spacing(0.5)}px ${theme.spacing(4)}px`,
    borderRadius: 25,
    background: theme.palette.grey[700],
  },
  cardHeader: {
    padding: 0,
    textAlign: "center",
    background: theme.palette.grey[800],
    color: theme.palette.getContrastText(theme.palette.grey[800]),
    boxShadow: theme.shadows[5],
  },
  cardMedia: {
    height: 200,
    margin: `0 auto`,
    background: "center top",
    backgroundSize: "cover",
    background: theme.palette.grey[700],
  },
}));
const DesktopPortfolioItem = ({ data }) => {
  const classes = useStyles();
  const { desktop_image, title, year_built } = data;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardHeader
          avatar={<BrowserButtons />}
          action={<Typography variant="body2">{year_built}</Typography>}
          classes={{
            avatar: classes.avatar,
            action: classes.action,
            content: classes.content,
            subheader: classes.subheader,
          }}
          className={classes.cardHeader}
          subheader={title.toLowerCase()}
        />
        <CardMedia
          className={classes.cardMedia}
          title={title}
          image={desktop_image}
        />
      </Card>
    </Grid>
  );
};

export default DesktopPortfolioItem;
