import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Button, Modal, ModalBody, Form, FormGroup } from 'reactstrap';

import { removeFromLocal } from '../../actions/food';

import { ButtonsGroup } from './Remove.styled';
import { hideRemoveModal } from '../../actions/app';

export const Remove = ({ isVisible, closeModal, removeItem, removingFood }) => {
  const remove = (e) => {
    e.preventDefault();

    removeItem(removingFood);
    closeModal();
  };

  return (
    <Modal isOpen={isVisible} onClosed={closeModal}>
      <ModalBody>
        <Form onSubmit={remove}>
          <FormGroup>
            Do you want to remove {removingFood}?
          </FormGroup>
          <ButtonsGroup>
            <Button color="secondary" onClick={closeModal}>No</Button>
            <Button type="submit" color="primary">Yes</Button>
          </ButtonsGroup>
        </Form>
      </ModalBody>
    </Modal>
  );
};

Remove.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
  removeItem: PropTypes.func.isRequired,
  removingFood: PropTypes.string,
};

Remove.defaultProps = {
  isVisible: false,
  removingFood: '',
};

export const mapStateToProps = ({ app }) => ({
  isVisible: app.isRemoveModalVisible,
  removingFood: app.removingFood,
});

export const mapDispatchToProps = dispatch => ({
  closeModal: bindActionCreators(hideRemoveModal, dispatch),
  removeItem: bindActionCreators(removeFromLocal, dispatch),
});
