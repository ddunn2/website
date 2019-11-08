import React from "react";
import githubLogo from "../images/github_logo_white.svg";

class Tile extends React.Component {
  constructor(props) {
    super(props);
    let maxLength = 70;
    if(this.props.desc.length > maxLength) {
      let trimmedDesc = this.props.desc.substr(0, maxLength);
      this.desc = this.props.desc.substr(0, Math.min(trimmedDesc.length, trimmedDesc.lastIndexOf(" "))) + "..."
    } else {
      this.desc = this.props.desc;
    }

    this.copy = this.copy.bind(this);
  }

  copy() {
    const id = this.props.id
    let copyText = document.querySelector(`#${id} input`);
    copyText.select();
    document.execCommand("copy");
  }

  render() {
    return (
      <div className="stack-card">
        <section className="github-header">
          <p>View in GitHub</p>
          <img src={ githubLogo } alt="GitHub Logo"></img>
        </section>
        <article className="stack-info">
          <h5>{this.props.heading}</h5>
          <p>{this.desc}</p>
        </article>
        <div class="command-input">
          <p>Some text describing this..</p>
          <input id="input-cli" type="text" name="cli" value={this.props.cmd} readOnly></input>
          <i onClick={this.copy} className="far fa-copy"></i>
        </div>
      </div>
    );
  }
}

export default Tile;
