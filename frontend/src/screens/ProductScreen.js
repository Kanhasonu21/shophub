import React, { useState, useEffect } from "react";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Image, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios";
const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/product/${match.params.id}`);
      setProduct(data);
    };
   fetchData()
   
  }, []);

  return (
    <>
      <Link to="/">Go Back</Link>

      <Row className="py-3">
        <Col md={4}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col className="py-10">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rating={product.rating} text={product.numReviews} />
            </ListGroup.Item>
            <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Card className="py-3">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>
                  <strong> $ {product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? "In Stock " : "Out of Stock"}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button disabled={product.countInStock === 0}>
                {product.countInStock > 0 ? "Add to Cart" : "Out of Stock"}
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Row>
    </>
  );
};

export default ProductScreen;
