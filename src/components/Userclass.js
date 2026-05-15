import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Loading...",
        location: "Loading...",
        avatar_url: "https://via.placeholder.com/150",
      },
    };
  }

  async componentDidMount() {
    // Only fetch if username is provided
    if (this.props.githubUser) {
      const data = await fetch(
        `https://api.github.com/users/${this.props.githubUser}`
      );
      const json = await data.json();

      this.setState({
        userInfo: json,
      });
    }
  }

  render() {
    const { name, location, avatar_url, login } = this.state.userInfo;

    return (
      <div className="user-card">
        <img className="avatar" src={avatar_url} alt="avatar" />

        <h2>{name || login}</h2>
        <p className="role">{this.props.role}</p>

        <p>📍 {location || "India"}</p>

        <p className="contact">{this.props.contact}</p>
      </div>
    );
  }
}

export default UserClass;