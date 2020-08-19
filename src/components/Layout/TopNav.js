import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const TopNav = (props) => {
  return (
    <Navbar color='light' expand='md'>
      <NavbarBrand>Welcome {props.userDetails.full_name}</NavbarBrand>
    </Navbar>
  );
};

export default TopNav;
