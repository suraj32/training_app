import React, { useEffect } from "react";
import projects from "../apis/projectApi";
import ProductCard from "./ProductCard";
import TopNav from "./Layout/TopNav";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "reactstrap";
import { getProjects } from "../actions/projectActions";

const ProductList = (props) => {

  const dispatch = useDispatch();

  const { userDetails } = useSelector(state => state.loginDetailsReducer);
  const { projects } = useSelector(state => state.projectsReducer);

  useEffect(() => { dispatch(getProjects()); }, []);

  return (
    <>
      <TopNav userDetails={userDetails}/>
      {console.log(projects)}
      {/* {projects.map((product) => (
        <Row className="mb-3">
          <Col md={{size: 4, offset: 4}}>
            <ProductCard product={product}/>
          </Col>
        </Row>
      ))} */}
    </>
  );
};

export default ProductList;
