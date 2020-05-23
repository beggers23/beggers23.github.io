import React, { useState, useEffect } from "react";

import { fetchAllProjects } from "./portfolio.actions";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(fetchAllProjects);
  }, []);

  return (
    <>
      <h1>Portfolio Component</h1>
    </>
  );
};

export default Portfolio;
