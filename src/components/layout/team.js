import React, { Component } from "react";
import TeamMember from "./teamMember";
export class Team extends Component {
  state = {
    developers: [
      {
        id: "1",
        name: "Monther",
        img:
          "https://avatars2.githubusercontent.com/u/71584000?s=460&u=4ee019affa6883c074003bb0bd7ddba2ce8e1021&v=4",
        brief: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        id: "1",
        name: "Monther",
        img:
          "https://avatars2.githubusercontent.com/u/71584000?s=460&u=4ee019affa6883c074003bb0bd7ddba2ce8e1021&v=4",
        brief: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        id: "1",
        name: "Monther",
        img:
          "https://avatars2.githubusercontent.com/u/71584000?s=460&u=4ee019affa6883c074003bb0bd7ddba2ce8e1021&v=4",
        brief: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        id: "1",
        name: "Monther",
        img:
          "https://avatars2.githubusercontent.com/u/71584000?s=460&u=4ee019affa6883c074003bb0bd7ddba2ce8e1021&v=4",
        brief: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.developers.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </div>
    );
  }
}
const userStyle = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  width: "80%",
  margin: "2rem 0 2rem 11.5rem",
  //   marginLeft: "1rem",
  //   justifyContent: "space-between",
};
export default Team;
