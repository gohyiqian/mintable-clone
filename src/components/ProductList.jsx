import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNFTs } from "../redux/productSlice";
import ProductCard from "./ProductCard";
import styles from "../App.module.css";
import styled from "styled-components";
import { Row, Col, Button } from "react-bootstrap";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 30px;
`;

const ProductList = () => {
  const dispatch = useDispatch();
  const { nfts, status } = useSelector((state) => state.products);
  console.log(nfts);

  useEffect(() => {
    dispatch(getNFTs());
  }, [dispatch]);

  const handleReload = (e) => {
    e.preventDefault();
    dispatch(getNFTs());
  };

  if (status === "loading") {
    return (
      <div>
        <div className={styles.loader} />
      </div>
    );
  }

  return (
    <>
      <Row>
        <Col style={{ display: "flex" }}>
          <h2
            style={{
              margin: "10px",
              paddingLeft: "60px",
              color: "#550ded",
              display: "flex",
              flexDirection: "row",
            }}
          >
            Top Collections
          </h2>
          <Button
            onClick={handleReload}
            className={styles.btn_login}
            style={{
              margin: "10px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            Reload NFTs
          </Button>
        </Col>
      </Row>

      <Container>
        {nfts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Container>
    </>
  );
};

export default ProductList;
