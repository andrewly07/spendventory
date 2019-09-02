import React from 'react';
import Header from './header';
import BillTable from './bill-table';
import BillForm from './bill-form';
import { Row, Container } from 'reactstrap';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: [],
      billToBeEdited: {
        id: 0,
        name: '',
        description: '',
        bill: ''
      }
    };
    this.getAllBills = this.getAllBills.bind(this);
    this.addBill = this.addBill.bind(this);
    this.deleteBill = this.deleteBill.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    this.getAllBills();
  }

  getAllBills() {
    fetch('/api/bills')
      .then(bills => bills.json())
      .then(bills => {
        this.setState({ bills: bills });
      });
  }

  addBill(newBill) {
    const post = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBill)
    };
    fetch('api/bills', post)
      .then(response => response.json())
      .then(bill => {
        const allBills = this.state.bills.concat(bill);
        this.setState({ bills: allBills });
      });
  }

  getTotal() {
    const billInfo = this.state.bills;
    let newTotal = 0;
    for (let bill of billInfo) {
      newTotal += parseFloat(bill.bill);
    }
    const total = newTotal.toFixed(2);
    return total;
  }

  deleteBill(id) {
    fetch('/api/bills/' + id, {
      method: 'DELETE'
    }).then(() => {
      let bills = this.state.bills.filter(bill => bill.id !== id);
      this.setState({ bills });
    });
  }

  updateBill(bill) {
    fetch(`api/bills/${bill.id}`, {
      method: 'PUT',
      body: JSON.stringify(bill),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(updatedBill => {
        const bills = this.state.bills.map(bill =>
          bill.id === updatedBill.id ? updatedBill : bill
        );
        this.setState({ bills });
      });
  }

  setEditing(bill) {
    this.setState({ billToBeEdited: bill });
  }

  submitBill(bill) {
    if (bill.id === 0) {
      this.addBill(bill);
      this.setState({
        billToBeEdited: {
          id: 0,
          name: '',
          description: '',
          bill: ''
        }
      });
    } else {
      this.updateBill(bill);
      this.setState({
        billToBeEdited: {
          id: 0,
          name: '',
          description: '',
          bill: ''
        }
      });
    }
  }

  handleReset(event) {
    event.preventDefault();
    this.setState({
      billToBeEdited: {
        id: 0,
        name: '',
        description: '',
        bill: ''
      }
    });
  }

  render() {
    let newTotal = this.getTotal();
    return (
      <div className="wrapper">
        <Container fluid>
          <Header total={newTotal} className="mb-3"

          />
        </Container>
        <Container fluid className="bottom">
          <Row>
            <BillTable
              bills={this.state.bills}
              deleteBill={this.deleteBill.bind(this)}
              setEditing={this.setEditing.bind(this)}
              updateBill={this.updateBill.bind(this)}
            />
            <BillForm
              onSubmit={this.submitBill.bind(this)}
              // billToBeEdited={this.state.billToBeEdited}
              onReset={this.handleReset.bind(this)}
            />
          </Row>
        </Container>
      </div>
    );
  }
}
