import { Col, Row } from "react-bootstrap";
import discord from "../assets/discord.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <div
      className="fixed-bottom"
      style={{ background: "#05396b", marginTop: "50px", color:"white" }}
    >
      <Row style={{ padding: "20px" }}>
        <Col>
          <h5>Cozy Turtles</h5>
          10,000 algorithmically generated turtles <br />
          <a href="https://discord.gg/cozyturtles">
            <img alt="discord" style={{ width: "50px" }} src={discord} />
          </a>
          <a href="https://twitter.com/CozyTurtlesNFT">
            <img alt="twitter" style={{ width: "50px" }} src={twitter} />
          </a>
        </Col>

      </Row>
    </div>
  );
};

export default Footer;
