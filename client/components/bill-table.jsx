import React from 'react';
import Bill from './bill';
import { Table, Col } from 'reactstrap';

export default class BillTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    let bill = this.props.bills.map(bill => {
      return (
        <Bill
          bill={bill}
          key={bill.id}
          deletebill={this.props.deleteBill}
          setEditing={this.props.setEditing}
        />
      );
    });
    return (
      <Col sm="8" className="table">
        <Table hover striped bordered>
          <thead>
            <tr>
              <th scope="col">Vendor</th>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>{bill}</tbody>
        </Table>
      </Col>
    );
  }
}
