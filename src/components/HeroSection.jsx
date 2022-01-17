import styled from "styled-components";
import { Row, Col, Button } from "react-bootstrap";
import styles from "../App.module.css";

const LandingText = styled.h1`
  color: #550ded;
  display: flex;
  padding: 50px 0 5px 0;
  margin: 0 100px 0 50px;
  text-align: left;
  justify-content: center;
  align-items: center;
`;

const LandingCard = styled.img`
  display: flex;
  margin: 50px 150px;
  min-height: 250px;
  width: 200px
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  border-radius: 20px;
`;

const HeroSection = () => {
  return (
    <Row className={styles.hero_section}>
      <Col className="p-5">
        <LandingText>Mint Your NFT on the Blockchain for Free!</LandingText>
        <p className="mx-5 mb-4" style={{ color: "#3652E3" }}>
          Trade Millions of NFTs here
        </p>
        <Button
          className=" mx-5"
          style={{ backgroundColor: "#550DED", minWidth: "150px" }}
        >
          MINT
        </Button>
        <Button style={{ backgroundColor: "#5168E1", minWidth: "150px" }}>
          SHOP
        </Button>
      </Col>
      <Col>
        <LandingCard src="../../heroImg.jpg" style={{ height: "300px" }} />
      </Col>
    </Row>
  );
};

export default HeroSection;
