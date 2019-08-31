import React from 'react';
import { InputGroup, InputGroupAddon, Input, Form, FormGroup, Button } from 'reactstrap';

export default class BillForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      description: '',
      bill: '',
      message: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.billToBeEdited.id !== prevProps.billToBeEdited.id) {
      this.setState(this.props.billToBeEdited);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      id: 0,
      name: '',
      description: '',
      bill: '',
      message: ''
    });
  }

  handleReset(event) {
    event.preventDefault();
    this.setState({
      id: 0,
      name: '',
      description: '',
      bill: '',
      message: ''
    });
  }

  nameValidate(event) {
    if (this.state.name.length >= 1) {
      this.setState({
        [event.target.name]: event.target.value,
        message: ''
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
        message: 'Please enter a valid name'
      });
    }
  }

  descriptionValidate(event) {
    if (this.state.description.length >= 1) {
      this.setState({
        [event.target.name]: event.target.value,
        message: ''
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
        message: 'Please enter a valid description'
      });
    }
  }

  billValidate(event) {
    if (this.state.bill <= 100 && this.state.bill > 0) {
      this.setState({
        [event.target.name]: event.target.value,
        message: ''
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
        message: 'Please enter a valid amount'
      });
    }
  }

  render() {
    let regex = /\d+/;
    let addButton;
    if (
      this.state.bill <= 100 &&
      this.state.bill >= 0 &&
      regex.test(this.state.bill) &&
      this.state.name.length >= 1 &&
      this.state.description.length >= 1
    ) {
      addButton = <Button color="success" className="addButton">
        {this.state.id === 0 ? 'Add' : 'Update'}</Button>;
    } else {
      addButton = <Button disabled className="addButton">Add Expense</Button>;
    }
    let editText;
    if (this.state.id === 0) {
      editText = 'form-control';
    } else {
      editText = 'form-control editText';
    }
    return (
      <Form onSubmit={this.handleSubmit} className="col-sm" onReset={this.props.onReset}>
        <div>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon
                addonType="prepend"
                className="input-group-text fas fa-user icon"
              />
              <Input
                type="text"
                className={editText}
                placeholder="Vendor"
                name="name"
                value={this.state.name}
                onChange={event => {
                  this.nameValidate(event);
                }}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon
                addonType="prepend"
                className="input-group-text fas fa-pencil-alt icon"
              />
              <Input
                type="text"
                className={editText}
                placeholder="Description"
                name="description"
                value={this.state.description}
                onChange={event => {
                  this.descriptionValidate(event);
                }}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon
                addonType="prepend"
                className="input-group-text fas fa-dollar-sign icon cap"
              />
              <Input
                type="number"
                className={editText}
                placeholder="Amount"
                name="bill"
                value={this.state.bill}
                onChange={event => {
                  this.billValidate(event);
                }}
              />
            </InputGroup>
            <div>{this.state.message}</div>
          </FormGroup>
        </div>
        <FormGroup>
          <div className="buttons">
            {addButton}
            <Button
              color="danger"
              type="reset"
              className="cancelButton"
            >
              Cancel
            </Button>
          </div>
        </FormGroup>
      </Form>
    );
  }
}
