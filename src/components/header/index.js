import React from "react";

import { Link } from "gatsby";

import githubIcon from "../../images/header_github_icon.svg";
import twitterIcon from "../../images/header_twitter_icon.svg";
import slackIcon from "../../images/header_slack_icon.svg";
import appsodyLogo from "../../images/appsody_logo.svg";

import styles from "./header.module.css"

import Search from '../search';

const NavBar = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <Link to="/">
        <img src={ appsodyLogo } width="30" height="30" alt="Appsody Logo"></img>
      </Link>
      <Link to="/">Home</Link>
      <Link to="/docs">Docs</Link>
      <Link>Tutorials</Link>
    </nav>
    <div className={styles.searchContainer}>
      <Search/>
    </div>
    <nav className={styles.socialNav}>
        <a href="https://github.com/appsody"><img src={ githubIcon } alt=""></img></a>
        <a href="https://twitter.com/appsodydev"><img id="twitter-nav" src={ twitterIcon } alt=""></img></a>
        <a href="http://appsody-slack.eu-gb.mybluemix.net"><img src={ slackIcon } alt=""></img></a>
    </nav>
  </header>
)

export default NavBar;
