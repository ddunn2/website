import React from "react";

import Layout from "../components/layout"

import TileGrid from "../components/tileGrid";

import kubeLogo from "../images/kubernetes_logo.png";
import promLogo from "../images/prometheus_logo.png";
import tektonLogo from "../images/tekton_logo.png";

import appsodyFullLogo from "../images/appsody_full_logo.svg";
import appsodyHello from "../images/appsody_hello.svg";

import { Link } from "gatsby";

const IndexPage = () => (
  <Layout>
    <section className="intro">
      <img src={ appsodyFullLogo } alt="Appsody Logo"></img>
      <p>
        Compose a cloud native masterpiece.
      </p>
      <p>
        Infused with cloud native capabilities from the moment you start, Appsody provides everything you need to iteratively develop applications, ready for deployment to Kubernetes environments. Teams are empowered with sharable technology stacks, configurable and controllable through a central hub.
      </p>
      <div >
        <Link to="/docs/getting-started/quick-start" role="button">Get Started</Link>
        <Link to="/docs" role="button">Overview</Link>
      </div>
    </section>
    <section className="appsody-graphic">
      <img src={ appsodyHello } alt="Appsody Logo"></img>
    </section>
    <section className="stacks-section">
      <div>
        <h2>Application Stacks</h2>
        <p>Select the application stack to view further details on GitHub or copy the command to start using the stack with our CLI.</p>
      </div>
      <TileGrid/>
    </section>
    <section className="opensource-info">
      <h2>Built on open source</h2>
      <div className="opensource-logos">
        <img src={ kubeLogo } alt="Kubernetes Logo"></img>
        <img src={ promLogo } alt="Prometheus Logo"></img>
        <img src={ tektonLogo } alt="Tekton Logo"></img>
      </div>
    </section>
    <section className="marketing-section">
      <h2>Why Appsody?</h2>
      <div className="marketing-cards-section">
        <div className="marketing-card">
          <h3>CLI</h3>
          <p>Intuitive and powerful. The Appsody CLI allows you to connect to a Hub, pull down a stack, and create, build, test and deploy your application.</p>
        </div>
        <div className="marketing-card">
          <h3>Stacks</h3>
          <p>Create, modify and share technology stacks with inbuilt cloud native capabilities, such as health checks, monitoring and OpenAPI descriptions.</p>
        </div>
        <div className="marketing-card">
          <h3>Hub</h3>
          <p>A central repository of available stacks, enabling a single point of control for applications built from these foundations.</p>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
