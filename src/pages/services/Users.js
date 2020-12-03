import React, { Component } from "react";
import UserItem from "./UserItem";
import Gallery from "./Gallery";

class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        service: "Wep App Development",
        avatar_url:
          "https://www.guglytech.com/wp-content/uploads/2020/03/Web-Application-Development-GuglY-Tech.jpg",
        html_url: "https://github.com/Monther-Twaissi",
      },
      {
        id: "2",
        service: "Web Application Consulting",
        avatar_url:
          "https://makemysite.gr/wp-content/uploads/2013/01/web_consulting.jpg",

        html_url: "https://github.com/khadeejah-hamdan",
      },
      {
        id: "3",
        service: "Mobile App Development",
        avatar_url: "https://hackernoon.com/drafts/rf993ytl.png",

        html_url: "https://github.com/ashraf-aljabari",
      },
      {
        id: "1",
        service: "Wep App Development",
        avatar_url:
          "https://www.guglytech.com/wp-content/uploads/2020/03/Web-Application-Development-GuglY-Tech.jpg",
        html_url: "https://github.com/Monther-Twaissi",
      },
      {
        id: "2",
        service: "Web Application Consulting",
        avatar_url:
          "https://makemysite.gr/wp-content/uploads/2013/01/web_consulting.jpg",

        html_url: "https://github.com/khadeejah-hamdan",
      },
      {
        id: "3",
        service: "Mobile App Development",
        avatar_url: "https://hackernoon.com/drafts/rf993ytl.png",

        html_url: "https://github.com/ashraf-aljabari",
      },
    ],
  };
  render() {
    return (
      <div>
        <Gallery />
        <div style={userStyle} className="my-3">
          {this.state.users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
}
const userStyle = {
  // width: "25vw",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
};
export default Users;
