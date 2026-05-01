import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const heading = (
  <h1 className="head" tabIndex="5">this is using jsx</h1>
);

const kartik = <span> this is kartik </span>;

const title = (
  <h1 className="head" tabIndex="5">
    {kartik}
    this is koyna
  </h1>
);

// Functional component
const Title = function () {
  return (
    <div>
      {title}
      <h1 className="head" tabIndex="5">using jsx 🚀</h1>
    </div>
  );
};

const HeadingComponent2 = () => (
  <div id="container">
    <Title />
    <h1 className="Heading">This is functional component 🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />);