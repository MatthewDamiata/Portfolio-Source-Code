import React, { Component } from "react";
import GitHubRepos from "react-github-repos";
import "react-github-repos/dist/index.css";
import './GithubDisplay.css'

const props = [
  { owner: "MatthewDamiata", repo: "typerspace" },
  { owner: "MatthewDamiata", repo: "Locked-and-Loaded" },
  { owner: "MatthewDamiata", repo: "0-1-Knapsack-Algorithms" },
  { owner: "MatthewDamiata", repo: "Linearly-Bounded-Automata-Simulator" },
  { owner: "MatthewDamiata", repo: "Tax-Exempt-Form" },
  { owner: "MatthewDamiata", repo: "JPMorgan-Chase-Virtual-Internship" },
  { owner: "MatthewDamiata", repo: "Fundraising-Form" },
  { owner: "MatthewDamiata", repo: "Performance-Contract" },
  { owner: "MatthewDamiata", repo: "Pippin-Assembler" },
  { owner: "MatthewDamiata", repo: "Chess-Engine" },
  { owner: "MatthewDamiata", repo: "Dijkstras-Algorithm" },
  { owner: "MatthewDamiata", repo: "PacXon" },
];

class GithubDisplay extends Component {
  render(){
    return (
      <div className="githubEntry">
        <GitHubRepos repoProps={props} />
      </div>
    )
  }
}

export default GithubDisplay;
