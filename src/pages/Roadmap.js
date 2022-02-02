import { Container, Row } from "react-bootstrap";

const Roadmap = () => {
  const isBaby = () => {
    // https://stackoverflow.com/a/8876069
    const width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    if (width <= 768) return true;
    return false;
  };

  const Map = ({ title, body, details, children }) => {
    return (
      <>
        <Row style={{ fontSize: isBaby()?"150%":"180%", paddingTop: "2%" }}>{title}</Row>
        <Row style={{ fontSize: isBaby()?"100%":"110%" }}>{children}</Row>
      </>
    );
  };

  return (
    <Container id="roadmap" style={{ paddingTop: "5rem" }}>
      <Row style={{ fontSize: isBaby()?"200%":"250%" }}>🚀 Roadmap 🚀</Row>

      <Map title="1">
        Launch 5,555 adorable and unique Cozy Turtles created and available to
        mint at 0.6 SOL.
      </Map>

      <Map title="2">
        Marketplace Launch After launch, our team will make sure a secondary
        marketplace is ready to actively trade Cozy Turtles within the public
        market.
      </Map>

      <Map title="2.5">
        Economic stabilization Based on the immediate market reaction from our
        release, we will take precautionary measures to ensure that the
        valuation of Cozy Turtles does not plummet. In such scenarios, all
        turtles listed under a certain price threshold will be removed from the
        market and burned. We strive towards security and profitability for our
        holders.
      </Map>

      <Map title="3">
        Exclusive Airdrops to Holders To give Cozy Turtle holders more incentive
        to hold, every turtle comes with a chance of winning another exclusive
        and rare Solana NFT. So hold more turtles for a higher chance of
        receiving an airdrop!
      </Map>

      <Map title="longevity">
        Longevity is the ultimate goal of our project — Cozy Turtles is just the
        start. Beyond this project, we are ambitious enough to see the creation
        of other Cozy Creatures, in which the Cozy Turtles holder community will
        have the first say in its prospect. Cozy Turtles will have a royalty
        system in place at a cap of 3 percent for all trades in the secondary
        market. Of which, 70 percent of the royalties will be invested back into
        the community and the creation of the next Cozy Creature. Additionally,
        20 percent will be allocated towards direct donations to a turtle
        conservancy chosen by the community. And the remaining 10 percent will
        cover basic expenses such as moderation payments, hosting fees, etc.
      </Map>
      <Map title="">
      As promising as it may seem, crypto is leaving a tremendous carbon
        footprint on our planet. So we have decided as a team that every Cozy
        Creature project will have a charitable aspect connected to its
        respective creature. We mustn't lose sight of the world we live in and
        make sure that all living beings are able to prosper.
      </Map>
    </Container>
  );
};

export default Roadmap;
