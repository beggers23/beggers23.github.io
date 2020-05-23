import React from "react";
if (process.env.NODE_ENV === "development") {
  // https://www.npmjs.com/package/@welldone-software/why-did-you-render
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}
