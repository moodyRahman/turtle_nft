import Button from "@restart/ui/esm/Button";
import { Container, Row } from "react-bootstrap";
import TurtleCarousel from "../components/Carousel";

const Home = () => {
  return (
    <Container className="text-center">
      <Row id="home">
        <div>
          <h1
            className="display-4 p-2 m-5"
          >
            Turtle NFT
          </h1>
          <Button className=" btn btn-primary m-3" variant="primary">Buy a Turtle</Button>
          <Button className=" btn btn-primary m-3" variant="primary">My Turtles</Button>
          
        </div>
      </Row>
      
      <Row style={{marginTop:"150px"}} className="m-6 p-6">
        <TurtleCarousel />
        <TurtleCarousel />
        <TurtleCarousel />
        <TurtleCarousel />
        <TurtleCarousel />
      </Row>

      
      <Row style={{marginTop:"150px"}}>
        <h4>
          Mint a Turtle
        </h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        viverra odio sit amet viverra efficitur. Aliquam a lacinia augue.
        Maecenas et volutpat felis. Donec ullamcorper non magna et ornare. Etiam
        fringilla tellus ac magna interdum tincidunt. Aenean sed iaculis ipsum.
        Aliquam posuere tellus vulputate porta laoreet. Donec arcu est, semper
        ut porta ut, suscipit sit amet velit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Aenean semper dolor eget nunc imperdiet, ut
        iaculis sapien placerat. Donec gravida elit in lacus ultricies, et
        malesuada ante tempor.
      </Row>
    </Container>
  );
};

export default Home;
