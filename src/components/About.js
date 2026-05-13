import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div className="about-container">
        <h1>About Class Component</h1>

        <UserClass
          name={"first"}
          location={"Pune"}
          contact={"@koynajatwar"}
        />

        <UserClass
          name={"second"}
          location={"Ajmer"}
          contact={"@kriteshmoyal"}
        />
      </div>
    );
  }
}

export default About;