import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const { service, avatar_url, html_url } = this.props.user;
    return (
      <div className="m-card text-center">
        <img
          src={avatar_url}
          alt=""
          className="img-1 round-border"
          style={{ width: "250px", height: "200px" }}
        />
        <h3>{service}</h3>
        <div>
          <a
            href={html_url}
            className="btn btn-primary btn-md my-4 round-border"
            target="_blank"
          >
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
