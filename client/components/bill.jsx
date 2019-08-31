import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

export default class Bill extends React.Component {
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
    return (
      <tr>
        <td>{this.props.bill.name}</td>
        <td>{this.props.bill.description}</td>
        <td>${this.props.bill.bill}</td>
        <td>
          <div className="tableButton">
            <i
              className="far fa-edit editButton"
              onClick={event => {
                this.props.setEditing({
                  id: this.props.bill.id,
                  name: this.props.bill.name,
                  description: this.props.bill.description,
                  bill: this.props.bill.bill
                });
              }}
            />
            <i
              className="far fa-trash-alt deleteButton"
              onClick={this.toggle}
            />
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalBody className="deleteModalBody">
                Are you sure you want to delete {this.props.bill.name}?
              </ModalBody>
              <ModalFooter className="deleteModalFooter">
                <Button
                  color="danger"
                  onClick={event => {
                    this.props.deleteBill(this.props.bill.id);
                  }}
                >
                  Delete
                </Button>
                <Button
                  color="secondary"
                  onClick={this.toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </td>
      </tr>
    );
  }
}
