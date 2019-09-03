import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      bill: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleBillChange = this.handleBillChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

  }
  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }
  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value
    });
  }
  handleBillChange(event) {
    this.setState({
      bill: event.target.value
    });
  }

  handleUpdate() {
    this.props.updateBill({
      id: this.props.currentBillInfo.currentId,
      name: this.state.name,
      description: this.state.description,
      bill: this.state.bill
    });
    this.props.closeModal();
  }
  // handleChange(event) {
  //   this.setState({
  //     name: event.target.value,
  //     description: event.target.value,
  //     bill: event.target.value,
  //   });
  // }
  handleSubmit(event) {
    // TODO: Make database call here
    event.preventDefault();
  }
  render() {
    const { currentName, currentDescription, currentBill } = this.props.currentBillInfo;
    return (
      <div>
        <Modal isOpen={this.props.currentBillInfo.modal} className="modal-update-contents" centered>
          <ModalHeader>Update Your Bill</ModalHeader>
          <ModalBody>
            {/* {`Bill info: ${currentId}, ${currentName}, ${currentDescription}, ${currentBill}`} */}
            <Form>
              <FormGroup>
                <Label for="vendor">Vendor</Label>
                <Input type="text" name="vendor" id="vendor" placeholder={currentName} onChange={this.handleNameChange}/>
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input type="text" name="description" id="description" placeholder={currentDescription} onChange={this.handleDescriptionChange}/>
              </FormGroup>
              <FormGroup>
                <Label for="amount">Amount</Label>
                <Input type="number" name="amount" id="amount" placeholder={currentBill} onChange={this.handleBillChange}/>
              </FormGroup>
            </Form>

          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.handleUpdate}>Update</Button>{' '}
            <Button color="danger" onClick={this.props.closeModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>

    // <Form onSubmit={this.handleSubmit} className="col-sm" onReset={this.props.onReset}>
    // <div>
    //   <FormGroup>
    //     <InputGroup>
    //       <InputGroupAddon
    //         addonType="prepend"
    //         className="input-group-text fas fa-user icon"
    //       />
    //       <Input
    //         type="text"
    //         className={editText}
    //         placeholder="Vendor"
    //         name="name"
    //         value={this.state.name}
    //         onChange={event => {
    //           this.nameValidate(event);
    //         }}
    //       />
    //     </InputGroup>
    //   </FormGroup>
    //   <FormGroup>
    //     <InputGroup>
    //       <InputGroupAddon
    //         addonType="prepend"
    //         className="input-group-text fas fa-pencil-alt icon"
    //       />
    //       <Input
    //         type="text"
    //         className={editText}
    //         placeholder="Description"
    //         name="description"
    //         value={this.state.description}
    //         onChange={event => {
    //           this.descriptionValidate(event);
    //         }}
    //       />
    //     </InputGroup>
    //   </FormGroup>
    //   <FormGroup>
    //     <InputGroup>
    //       <InputGroupAddon
    //         addonType="prepend"
    //         className="input-group-text fas fa-dollar-sign icon cap"
    //       />
    //       <Input
    //         type="number"
    //         className={editText}
    //         placeholder="Amount"
    //         name="bill"
    //         value={this.state.bill}
    //         onChange={event => {
    //           this.billValidate(event);
    //         }}
    //       />
    //     </InputGroup>
    //     <div>{this.state.message}</div>
    //   </FormGroup>
    // </div>
    // <FormGroup>
    //   <div className="buttons">
    //     {addButton}
    //     <Button
    //       color="danger"
    //       type="reset"
    //       className="cancelButton"
    //     >
    //       Cancel
    //     </Button>
    //   </div>
    // </FormGroup>
    // </Form>

    );
  }
}

export default ModalExample;
