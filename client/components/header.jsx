import React from 'react';
import { Row, Col, Badge } from 'reactstrap';

function Header(props) {

  return (
    <Row className= "header">
      <Col className="title">$pendventory</Col>
      <Col sm="4" className="total">Total Due:<Badge className="badge" color="secondary">${props.total}</Badge></Col>
    </Row>
  );
}

export default Header;
