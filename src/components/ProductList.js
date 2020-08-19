import React from "react";
import products from "../productList";
import ProductCard from "./ProductCard";
import TopNav from "./Layout/TopNav";
import { useSelector } from "react-redux";
import { Row, Col } from "reactstrap";

const ProductList = (props) => {
  const { userDetails } = useSelector(state => state.loginDetailsReducer);

  return (
    <>
      <TopNav userDetails={userDetails}/>
      {products.map((product) => (
        <Row className="mb-3">
          <Col md={{size: 4, offset: 4}}>
            <ProductCard product={product}/>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default ProductList;
