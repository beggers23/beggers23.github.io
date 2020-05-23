import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  filterContainer: {
    margin: `${theme.spacing(2)}px 0`,
    padding: theme.spacing(1),
  },
}));

const Filters = ({ filters = [], selectedFilter, setSelectedFilter }) => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.filterContainer}
      container
      spacing={1}
      justify="space-between"
    >
      <SingleFilter
        key="clear"
        value="All Projects"
        selected={!selectedFilter}
        handleClick={() => setSelectedFilter(null)}
      />
      {filters.map((f) => (
        <SingleFilter
          key={f}
          value={f}
          selected={f === selectedFilter}
          handleClick={() => setSelectedFilter(f)}
        />
      ))}
    </Grid>
  );
};

const SingleFilter = ({ value, selected, handleClick }) => {
  return (
    <Chip
      clickable
      label={value}
      color={selected ? "primary" : "default"}
      onClick={handleClick}
    />
  );
};

export default Filters;
