import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchDatas = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchDatas()
    
  },[products]);
  return (
    <>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
