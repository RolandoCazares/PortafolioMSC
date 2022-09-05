import React, { Component, useState } from "react";
import styled from "styled-components";
import Typical from "react-typical";
import { Blob } from "react-blob";

const Division = styled.div`
  color: grey;
  z-index: 100;
  display: flex;
  flex-direction: column;
  pre {
    font-family: "Festive", cursive;
    font-size: 2rem;
    position: absolute;
    top: 7%;
    float: left;
    opacity: 10%;
  }
  h1 {
    display: flex;
    color: white;
    font-family: "Courier New", Courier, monospace;
    font-weight: bolder;
    font-size: 4rem;
    position: relative;
    float: left;
    top: 40%;
    left: 40%;
  }
  .preClass {
    text-align: left;
    justify-content: left;
    color: #f9f871;
  }

  .postClass {
    text-align: left;
    justify-content: left;
    color: #f9f871;
    float: left;
    top: 63%;
  }

  .ContactMe {
    position: absolute;
    display: flex;
    flex-direction: row;
    float: left;
    top: 80%;
    padding: 0.5rem;
    margin: 0 1% 0 1%;
    border: 2px solid yellow;
    background-color: transparent;
    color: #f9f871;
    left: 9%;
  }

  .ContactMe:hover {
    background-color: yellow;
    color: black;
    font-weight: bold;
  }
  span {
    display: flex;
    color: white;
    font-family: "Courier New", Courier, monospace;
    font-weight: bolder;
    font-size: 4rem;
    position: relative;
    float: left;
    top: 35%;
    left: 40%;
    color: yellow;
    margin-top: 5%;
  }
  @media screen and (max-width: 768px) {
    pre {
      font-family: "Festive", cursive;
      font-size: 1rem;
      position: absolute;
      top: 12%;
      float: left;
      opacity: 10%;
    }
    h1 {
      display: flex;
      color: white;
      font-family: "Courier New", Courier, monospace;
      font-weight: bolder;
      font-size: 2rem;
      position: relative;
      float: left;
      top: 35%;
      left: 7%;
    }
    .preClass {
      text-align: left;
      justify-content: left;
      color: #f9f871;
    }

    .postClass {
      text-align: left;
      justify-content: left;
      color: #f9f871;
      float: left;
      top: 55%;
    }

    .ContactMe {
      position: absolute;
      display: flex;
      flex-direction: row;
      float: left;
      top: 70%;
      padding: 0.5rem;
      border: 2px solid yellow;
      background-color: transparent;
      color: #f9f871;
      left: 7%;
    }

    .ContactMe:hover {
      background-color: yellow;
      color: black;
      font-weight: bold;
    }
    span {
      display: flex;
      color: white;
      font-family: "Courier New", Courier, monospace;
      font-weight: bolder;
      font-size: 2rem;
      position: relative;
      float: left;
      top: 35%;
      left: 7%;
      color: yellow;
    }
  }
`;

const YellowDesktopStyle = {
  position: "absolute",
  top: "50%",
  left: "40%",
  zIndex: "1",
  backgroundColor: "yellow",
  color: "white",
  opacity: "0.6",
  fontSize: "50vh"
};

const YellowMobileStyle = {
  position: "absolute",
  top: "70%",
  left: "50%",
  zIndex: "1",
  backgroundColor: "yellow",
  color: "white",
  opacity: "0.6",
  fontSize: "50vh"
};

const BlackMobileStyle = {
  position: "absolute",
  top: "10%",
  left: "-50%",
  zIndex: 2,
  backgroundColor: "black",
  color: "white",
  opacity: 0.6,
  fontSize: "50vh"
};

const BlackDesktopStyle = {
  position: "absolute",
  top: "8%",
  left: "5%",
  zIndex: 2,
  backgroundColor: "black",
  color: "white",
  opacity: 0.6,
  fontSize: "50vh"
};

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BlackSize: "80vh",
      YellowSize: "40vh",
      BlackStyle: BlackMobileStyle,
      YellowStyle: YellowMobileStyle
    };
  }
  componentDidMount() {
    if (window.innerWidth < 768) {
      this.setState({ YellowStyle: YellowMobileStyle });
      this.setState({ YellowSize: "40vh" });
      this.setState({ BlackStyle: BlackMobileStyle });
      this.setState({ BlackSize: "80vh" });
    } else {
      this.setState({ YellowStyle: YellowDesktopStyle });
      this.setState({ YellowSize: "80vh" });
      this.setState({ BlackStyle: BlackDesktopStyle });
      this.setState({ BlackSize: "100vh" });
    }
  }

  render() {
    return (
      <>
        <Division>
          <pre className="preClass">
            {`
        <html>
            `}
            {` <body>`}
            {`
                    
                <h1>
`}
          </pre>
          <h1>Hi,</h1>
          <br />
          <h1>I'm Rolando Mota</h1>
          <Typical
            steps={[
              "Developer",
              4000,
              "Web Designer",
              4000,
            ]}
            loop={Infinity}
            wrapper="span"
          />
          <pre className="postClass">
            {`
                </h1>
            `}
          </pre>

          <button className="ContactMe">Contact me !</button>
        </Division>

        <Blob
          size={this.state.BlackSize}
          style={this.state.BlackStyle}
          animationDuration="30s"
        ></Blob>
        <Blob
          size={this.state.YellowSize}
          animationDuration="20s"
          style={this.state.YellowStyle}
        ></Blob>
      </>
    );
  }
}

export default About;
