import { Container } from "react-bootstrap";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const GenericSplide = ({ images }) => {
  const isBaby = () => {
    // https://stackoverflow.com/a/8876069
    const width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    if (width <= 768) {
      console.log("welcome to the baby mode");
      return true;
    }
    return false;
  };

  const width = "100%";
  return (
    <Container
      fluid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Splide
        options={{
          rewind: true,
          perMove: isBaby() ? 2 : 6,
          perPage: isBaby() ? 2 : 6,
          pagination: false,
          arrows: false,
          autoplay: true,
          interval: 0,
          resetProgress: true,
          type: "loop",
          easing: "linear",
          speed: isBaby() ? 20000 : 30000,
        }}
      >
        {images.map((element) => (
          <SplideSlide>
            <img style={{ width: width }} src={element} alt="2" />
          </SplideSlide>
        ))}
      </Splide>
    </Container>
  );
};

export default GenericSplide;
