import React from 'react';
import { Row, Col, Badge } from 'reactstrap';

function Header(props) {

  return (
    <Row className= "header">
      <Col className="title">$pendventory</Col>
      {/* <i className="fas fa-info-circle about-icon"></i>
      <i className="fas fa-info-circle about-icon"></i> */}

      <Col sm="4" className="average">Total Due:<Badge className="badge" color="secondary">${props.average}</Badge></Col>
    </Row>
  );
}

export default Header;
