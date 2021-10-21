import { Container, Accordion } from "react-bootstrap";

const Faq = () => {

  return (
    <Container className="text-left" id="faq" style={{ paddingTop: "20px", color:"#05396b" }}>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What are Cozy Turtles?</Accordion.Header>
          <Accordion.Body>
            Cozy Turtles are 5,555 algorithmically generated, unique, cute and
            collectible Turtles with proof of ownership stored on the Solana
            blockchain!
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>How do I purchase a Cozy Turtle?</Accordion.Header>
          <Accordion.Body>
            Purchasing a Cozy Turtle is super simple. Connect your Solana wallet
            and follow the buy prompts.
            <ol>
              <li>
                Download the Phantom extension for your browser(Google Chrome
                recommended).
              </li>
              <li>
                Buy Solana(SOL) on an exchange like FTX, Binance, Coinbase etc
                and send it to your Phantom or Sollet wallet Public Address.
              </li>
              <li>
                Connect your Wallet to our website by clicking on the Connect
                button.
              </li>
              <li>On release (TBA) click our “Mint a Cozy Turtle”.</li>
            </ol>
            We are trying to structure our distribute to be as fair as possible,
            with live minting & instant distribution. However, if the solana
            blockchain gets clogged it could take a bit to receive your NFT.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Where does my NFT go after I purchase a Cozy Turtle?
          </Accordion.Header>
          <Accordion.Body>
            Your Cozy Turtle NFT artwork will be sent to the wallet you
            purchased via in a matter of minutes.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>How many NFTs will you sell?</Accordion.Header>
          <Accordion.Body>5,55 will be minted in total.</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>What Solana wallets can I use?</Accordion.Header>
          <Accordion.Body>
            At launch we will be allowing purchases and management through two
            of Solana’s main wallets; Phantom and Sollet.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>Is each Cozy Turtle unique?</Accordion.Header>
          <Accordion.Body>
            Yes each Cozy Turtle will be unique, we have ensured via code on the
            backend that no two NFTs will be replicated.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>
            What can I do with my Cozy Turtle?
          </Accordion.Header>
          <Accordion.Body>
            The main function will to be cute and collectible. The game changing
            utility will be Turtle FUSION with Two or even Three NFTs needed to
            be burnt to mint a new NFT. Possibly getting a 1/1 Extremely Rare
            NFT.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>
            How were the Cozy Turtles generated?
          </Accordion.Header>
          <Accordion.Body>
            They are generated using the Magic Code from Metaplex! They have
            provided an excellent way to generate NFTs and it’s a standard
            protocol used on Solana now. This will allow 3rd party selling via
            Sol Sea!
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header>Who is behind Cozy Turltes NFT?</Accordion.Header>
          <Accordion.Body>
            We are a dedicated team of artists, solana enthusiasts, stakers, and
            coders. We are generally just excited about the Solana ecosystem in
            general and hope we can be a force for good in this budding
            ecosystem.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9">
          <Accordion.Header>How to get in touch with us?</Accordion.Header>
          <Accordion.Body>
            We are available via our Twitter and Discord that are embedded in
            the website.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Faq;
