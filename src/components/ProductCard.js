import React from "react";
import {
  Card, CardText, CardBody,
  CardTitle, Button, CardFooter, CardHeader
} from 'reactstrap';

const productCard = (props) => {
  const { name, stocked, category, description, price } = props.product
  return (
    <div className="text-left m-3">
      <Card>
        <CardHeader>
          <h3>{name}</h3>
          {stocked ? 'In stock' : 'Out of stock'}
        </CardHeader>
        <CardBody>
          <CardTitle>Category: {category}</CardTitle>
          <CardText>{description}</CardText>
          <Button>Add to Cart</Button>
        </CardBody>
        <CardFooter>Price: ${price}</CardFooter>
      </Card>
    </div>
  );
};

export default productCard;
