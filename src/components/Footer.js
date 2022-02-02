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
      style={{padding:"5px", paddingLeft:"15px", background: "#5cdb94", marginTop: "50px", marginLeft:"0px", color:"white" }}
      id="footer"
    >
      <Row style={{color:"#05396b"}}>
        <Col>
          <h6>Cozy Turtles ©</h6>
          <div style={{fontSize:"80%"}}>
          5,555 algorithmically generated turtles <br />
          </div>
        </Col>
        <Col>
        <a href="https://discord.gg/cozyturtles">
            <img alt="discord" style={{ float:"right", width: "50px" }} src={discord} />
          </a>
          <a href="https://twitter.com/CozyTurtlesNFT">
            <img alt="twitter" style={{ float:"right", width: "65px", paddingTop:"12px", paddingLeft:"10px" }} src={twitter} />
          </a>
        </Col>

      </Row>
    </div>
  );
};

export default Footer;
