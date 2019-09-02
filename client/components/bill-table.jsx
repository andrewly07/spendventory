import React from 'react';
import Bill from './bill';
import { Table, Col } from 'reactstrap';
import BillUpdateModal from './bill-update-modal';

export default class BillTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      currentId: '',
      currentName: '',
      currentDescription: '',
      currentBill: ''
    };
    this.setUpdateModal = this.setUpdateModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  setUpdateModal(billInfo) {
    this.setState(prevState => ({
      modal: !prevState.modal,
      currentId: billInfo.id,
      currentName: billInfo.name,
      currentDescription: billInfo.description,
      currentBill: billInfo.bill
    }));
  }

  closeModal() {
    this.setState({
      modal: false,
      currentId: '',
      currentName: '',
      currentDescription: '',
      currentBill: ''
    });
  }

  render() {
    let bill = this.props.bills.map(bill => {
      return (
        <Bill
          bill={bill}
          key={bill.id}
          deleteBill={this.props.deleteBill}
          // setEditing={this.props.setEditing}
          setUpdateModal={this.setUpdateModal}
        />
      );
    });
    return (
      <Col sm="8" className="table">
        <BillUpdateModal
          currentBillInfo = {this.state}
          closeModal = {this.closeModal}
          updateBill={this.props.updateBill}
        />
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
