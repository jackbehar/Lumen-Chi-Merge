/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import Modal from '../Modal';
import Button from '../../Button/Button';

export default (
  <Modal
    open={true}
    title="Modal Title"
    footer={
      <Button color="primary" uxpId="button-1">
        Save
      </Button>
    }
    uxpId="modal-1"
  >
    Modal content goes here
  </Modal>
);
