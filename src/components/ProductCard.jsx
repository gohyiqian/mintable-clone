import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../App.module.css";
import { LinkContainer } from "react-router-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <div className="m-2 py-3">
      <Card key={product.id} className={styles.card_effect}>
        <Link to={`/nft/${product.id}`}>
          {product.image_preview_url ? (
            <Card.Img
              className={styles.card_img_top}
              variant="top"
              src={product.image_preview_url}
              alt=""
              height="250px"
            />
          ) : (
            <Card.Img
              className={styles.card_img_top}
              variant="top"
              src="../../mintable_logo.svg"
              alt=""
              height="250px"
            />
          )}
        </Link>
        <Card.Body>
          <Card.Title
            className={styles.limit_text_length}
            style={{ textAlign: "center" }}
          >
            {product.name}
          </Card.Title>
          <Card.Text style={{ color: "#550ded", textAlign: "center" }}>
            Guaranteed Authentic
          </Card.Text>
          <Card.Text className={styles.limit_text_length_desc}>
            ${product.description}
          </Card.Text>
          <Card.Text style={{ color: "#550ded" }}>Read More</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
