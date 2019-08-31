import React from 'react';
import { Col, Container, Row } from 'reactstrap';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.handleCatalogView = this.handleCatalogView.bind(this);
  }
  handleCatalogView(e) {
    e.preventDefault();
    this.props.setView('catalog', {});
  }
  render() {
    return (
      <React.Fragment>
        <i className="fas fa-arrow-alt-circle-left nav-button" onClick={this.handleCatalogView}>Go Back</i>
        <Container className="mt-3 mb-5">
          <Row>
            <Col sm={{ size: 8, offset: 2 }} className="mb-3">
              <div className="border border-secondary rounded p-2 about-box">
                <div className="h1 card-font">The Coding Writer.</div>
                <hr/>
                <img className="andrew-image" src="./images/andrew-1-web.jpg" alt="Andrew picture"/>
                <hr/>
                <div className="h5 description-font">Hi, my name&apos;s Andrew, and welcome to Sunday Punch.</div>
                <div className="h5 description-font">Since I was a kid, I&apos;ve always loved combat sports partly because I was influenced by the Rocky Balboa franchise. As I got older I dove into boxing myself and I loved being in the ring. It was a great stress reliever and workout. I wanted to build a project out of love, and Sunday Punch was born!</div>
                <div className="h5 description-font">This application was made using JavaScript, React.js, Reactstrap for styling, and PHP & MySQL to connect to the back-end.</div>
                <div className="h5 description-font">You can find my Github at <a href="https://github.com/andrewly07" rel="noopener noreferrer" target="_blank">GitHub</a> and please feel free to stop by my portfolio site at <a href="https://www.andrewly.dev/" rel="noopener noreferrer" target="_blank">www.andrewly.dev</a> to view my other projects.</div>
              </div>
            </Col>
          </Row>
          <button type="button" className="btn btn-lg btn-danger btn-block card-font" onClick={this.handleCatalogView}><i className="fas fa-fist-raised fa-lg pointer-hover"></i> Back To Shop</button>
        </Container>
      </React.Fragment>
    );
  }
}
