import React from 'react';
import { Row, Col, Badge } from 'reactstrap';

function Header(props) {
  return (
    <Row className= "header">
      <img src="images/tuffy.png" className="fa fa-money"></img>
      <Col className="title">Spent-A-Log: Budget Tracker</Col>
      <Col sm="4" className="average">Average:<Badge className="badge" color="secondary">{props.average}</Badge></Col>
    </Row>
  );
}

export default Header;
