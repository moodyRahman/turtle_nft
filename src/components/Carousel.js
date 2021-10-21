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
  const isBaby = () => {
    // https://stackoverflow.com/a/8876069
    const width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    )
    if (width <= 768){
      console.log("welcome to the baby mode")
      return true
    };
    return false
  }

  const width = "100%";

  return (
    <Container fluid style={{display: 'flex',  justifyContent:'center', alignItems:'center', width:"95%"}}>
      <Splide
        options={{
          rewind: true,
          perMove:isBaby()?2:5,
          perPage: isBaby()?2:5,
          pagination: false,
          arrows: false,
          autoplay:true,
          interval:0,
          resetProgress:true,
          type:"loop",
          easing:"linear",
          speed:isBaby()?20000:30000,
        }}
      >
        <SplideSlide>
          <img style={{ width: width }} src={p0} alt="1" />
        </SplideSlide>
        <SplideSlide>
          <img style={{ width: width }} src={p1} alt="1" />
        </SplideSlide>
        <SplideSlide>
          <img style={{ width: width }} src={p2} alt="1" />
        </SplideSlide>
        <SplideSlide>
          <img style={{ width: width }} src={p3} alt="1" />
        </SplideSlide>
        <SplideSlide>
          <img style={{ width: width }} src={p4} alt="1" />
        </SplideSlide>
        <SplideSlide>
          <img style={{ width: width }} src={p5} alt="1" />
        </SplideSlide>
        <SplideSlide>
          <img style={{ width: width }} src={p6} alt="1" />
        </SplideSlide>
        <SplideSlide>
          <img style={{ width: width }} src={p7} alt="1" />
        </SplideSlide>
        <SplideSlide>
          <img style={{ width: width }} src={p8} alt="1" />
        </SplideSlide>
        <SplideSlide>
          <img style={{ width: width }} src={p9} alt="2" />
        </SplideSlide>
      </Splide>
    </Container>
  );
};

export default TurtleCarousel;
