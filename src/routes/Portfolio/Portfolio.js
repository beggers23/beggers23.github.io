import React from "react";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";
import { Container, Grid } from "@material-ui/core";
import useFetch from "../../hooks/useFetch";
const Portfolio = () => {
  const [{ data, isLoading, isError, errorData }, setRequestOptions] = useFetch(
    "portfolio"
  );

  return (
    <Container>
      <Grid container spacing={1} justify="space-around">
        {data.map((project) => (
          <PortfolioItem key={project._id} data={project} />
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
