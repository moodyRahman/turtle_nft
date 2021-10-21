import { useEffect, useState } from "react";
import { Col, Collapse, Row } from "react-bootstrap";
import discord from "../assets/discord.png";
import twitter from "../assets/twitter.png";

const Footer = () => {

  const isBaby = () => {
    // https://stackoverflow.com/a/8876069
    const width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    )
    if (width <= 768) return true;
    return false
  }

  return (
    <div
      className={
        isBaby()?"":"fixed-bottom"
      }
      style={{ background: "#05396b", marginTop: "50px", color:"white" }}
      id="footer"
    >
      <Row style={{}}>
        <Col>
          <h5>Cozy Turtles</h5>
          10,000 algorithmically generated turtles <br />
        </Col>
        <Col>
        <a href="https://discord.gg/cozyturtles">
            <img alt="discord" style={{ float:"right", width: "50px" }} src={discord} />
          </a>
          <a href="https://twitter.com/CozyTurtlesNFT">
            <img alt="twitter" style={{ float:"right", width: "50px" }} src={twitter} />
          </a>
        </Col>

      </Row>
    </div>
  );
};

export default Footer;
