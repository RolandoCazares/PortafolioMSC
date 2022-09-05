import React, { Component } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { Wave } from "react-animated-text";

const Title = (text, size) => (
  <Wave
    text={text}
    speed="1"
    effect="stretch"
    effectChange={size}
    effectDirection="both"
    iterations="infinite"
  />
);

const MapContainer = styled.div`
  display: flex;
  position: absolute;
  width: 50%;
  height: 100%;
  right: 0%;
  z-index: 5;
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 100%;
    padding: 1%;
    width: 100%;
    height: 80%;
    z-index: 5;
    margin-top: 1%;
  }
`;

const ContactForm = styled.div`
  .Form {
    display: flex;
    flex-direction: column;
    position: absolute;
    margin: 1%;
    padding: 1%;
    width: 40%;
    top: 35%;
    left: 2%;
  }

  h1 {
    position: absolute;
    font: "Courier New", Courier, monospace;
    letter-spacing: -0.09cm;
    font-size: 5em;
    font-weight: bolder;
    left: 4%;
    top: 16%;
  }

  .MessageText .MuiFilledInput-input {
    height: 5em;
  }

  .MuiFilledInput-underline:after {
    border-bottom: 2px solid black;
  }

  .SendMessage {
    position: absolute;
    display: flex;
    flex-direction: row;
    float: left;
    top: 100%;
    padding: 0.5rem;
    margin: 0 1% 0 1%;
    border: 2px solid black;
    background-color: transparent;
    color: black;
    left: 78%;
    font-weight: bold;
  }

  .SendMessage:hover {
    background-color: black;
    color: yellow;
    font-weight: bold;
  }

  pre {
    font-family: "Festive", cursive;
    font-size: 1.9rem;
    position: relative;
    float: left;
    opacity: 50%;
  }

  @media screen and (max-width: 768px) {
    .Form {
      display: flex;
      flex-direction: column;
      position: absolute;
      margin: 1\%;
      padding: 2%;
      width: 80%;
      top: 35%;
      left: 7%;
    }

    h1 {
      position: absolute;
      font: "Courier New", Courier, monospace;
      letter-spacing: -0.09cm;
      font-size: 3em;
      font-weight: bolder;
      top: 12%;
      margin: 4%;
    }

    .MessageText .MuiFilledInput-input {
      height: 2em;
    }

    .MuiFilledInput-underline:after {
      border-bottom: 2px solid black;
    }

    .SendMessage {
      position: absolute;
      display: flex;
      flex-direction: row;
      float: left;
      top: 100%;
      padding: 0.5rem;
      margin: 0 1% 0 1%;
      border: 2px solid black;
      background-color: transparent;
      color: black;
      left: 0;
      font-weight: bold;
    }

    .SendMessage:hover {
      background-color: black;
      color: yellow;
      font-weight: bold;
    }

    pre {
      font-family: "Festive", cursive;
      font-size: 1.4rem;
      position: relative;
      float: left;
      opacity: 50%;
    }
  }
`;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <ContactForm>
          <pre className="preClass">
            {`<html>
            `}
            {`<body>`}
            {`
  <h1>
            
  </h1>
  <form>







  </form>
`}
          </pre>
          <div className="text">
            <div>{this.state.size}</div>
            <h1 className="title">{Title("Contact me", 1.5)}</h1>
          </div>
          <form className="Form">
            <TextField id="filled-basic" label="Name" variant="filled" />
            <br />
            <TextField id="filled-basic" label="Email" variant="filled" />
            <br />
            <TextField id="filled-basic" label="Subject" variant="filled" />
            <br />
            <TextField
              className="MessageText"
              id="filled-basic"
              label="Message"
              variant="filled"
            />
            <br />
            <button className="SendMessage">Send Message</button>
          </form>
        </ContactForm>
        <MapContainer>
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBuJgOyXno2HBPMMafpneEiVuxhuLWVHBY
    &q=Amba+Township+Pvt+ltd+Adalaj"
          ></iframe>
        </MapContainer>
      </>
    );
  }
}

export default Contact;
