import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './ContactItem.styled';

export const ContactItem = ({ name, number, id, deleteContact }) => {
  return (
    <li>
      {name}: {number}
      <Button
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </Button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  deleteContact: PropTypes.func,
};
