import { Container } from "react-bootstrap";
import p0 from "../assets/turtles/0.jpg";
import p1 from "../assets/turtles/1.jpg";
import p2 from "../assets/turtles/2.jpg";
import p3 from "../assets/turtles/3.jpg";
import p4 from "../assets/turtles/4.jpg";
import p5 from "../assets/turtles/5.jpg";
import p6 from "../assets/turtles/6.jpg";
import p7 from "../assets/turtles/7.jpg";
import p8 from "../assets/turtles/8.jpg";
import p9 from "../assets/turtles/9.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const TurtleCarousel = () => {
  return (
    <Container fluid style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <Splide
        options={{
          rewind: true,
          width: 1200,
          gap: "2.5rem",
          perMove:5,
          pagination: false,
          arrows: false,
          perPage: 5,
          autoplay:true,
          interval:1000,
          resetProgress:true,
          type:"loop",
          pauseOnHover:true,
          easing:"linear",
          speed:10000,
        }}
      >
        <SplideSlide>
          <img style={{ width: "120%" }} src={p0} alt="1" />
        </SplideSlide>
        <SplideSlide>
          <img style={{ width: "120%" }} src={p1} alt="1" />
        </SplideSlide>
        <SplideSlide>
          <img style={{ width: "120%" }} src={p2} alt="1" />
        </SplideSlide>
        <SplideSlide>
          <img style={{ width: "120%" }} src={p3} alt="1" />
        </SplideSlide>
        <SplideSlide>
          <img style={{ width: "120%" }} src={p4} alt="1" />
        </SplideSlide>
        <SplideSlide>
          <img style={{ width: "120%" }} src={p5} alt="1" />
        </SplideSlide>
        <SplideSlide>
          <img style={{ width: "120%" }} src={p6} alt="1" />
        </SplideSlide>
        <SplideSlide>
          <img style={{ width: "120%" }} src={p7} alt="1" />
        </SplideSlide>
        <SplideSlide>
          <img style={{ width: "120%" }} src={p8} alt="1" />
        </SplideSlide>
        <SplideSlide>
          <img style={{ width: "120%" }} src={p9} alt="2" />
        </SplideSlide>
      </Splide>
    </Container>
  );
};

export default TurtleCarousel;
