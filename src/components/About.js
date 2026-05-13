import { Component } from "react";
import UserClass from "./UserClass";
import "../../index.css";

class About extends Component {
  render() {
    return (
      <div className="about-page">
        <h1 className="title">About Us</h1>
        <p className="subtitle">
          We are a passionate developer team building scalable web products 🚀
        </p>

        <div className="card-container">
          <UserClass
            githubUser="kriteshmoyal01"
            role="Frontend Developer"
            contact="@kriteshmoyal"
          />

          <UserClass
  githubUser="nitishjatwar21"
  role="Frontend Developer"
  contact="@nitishjatwar21"
/>

          <UserClass
            githubUser="harshdew02"
            role="React Engineer"
            contact="@harshdew02"
          />
        </div>
      </div>
    );
  }
}

export default About;