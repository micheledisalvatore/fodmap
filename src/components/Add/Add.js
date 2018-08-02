import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Button, Modal, ModalBody, Form, FormGroup, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { addToLocal } from '../../actions/food';

import { ButtonsGroup, PlusButton } from './Add.styled';

export class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };
    this.input = React.createRef();
    this.toggleModal = this.toggleModal.bind(this);
    this.add = this.add.bind(this);
    this.focusOnInputText = this.focusOnInputText.bind(this);
  }

  toggleModal() {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  }

  focusOnInputText() {
    this.input.current.focus();
  }

  add(e) {
    e.preventDefault();
    const { value } = this.input.current;
    const { add } = this.props;

    add(value);
    this.toggleModal();
  }

  render() {
    const { isModalOpen } = this.state;

    return (
      <Fragment>
        <PlusButton type="button" onClick={this.toggleModal} id="add-button"><FontAwesomeIcon icon={faPlusCircle} /></PlusButton>
        <Modal isOpen={isModalOpen} toggle={this.toggleModal} onOpened={this.focusOnInputText}>
          <ModalBody>
            <Form onSubmit={this.add}>
              <FormGroup>
                <Input type="text" name="add" id="add" placeholder="Add suspicious food..." innerRef={this.input} />
              </FormGroup>
              <ButtonsGroup>
                <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                <Button type="submit" color="primary">Add</Button>
              </ButtonsGroup>
            </Form>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

Add.propTypes = {
  add: PropTypes.func.isRequired,
};

export const mapDispatchToProps = dispatch => ({
  add: bindActionCreators(addToLocal, dispatch),
});
