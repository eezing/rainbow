import React from 'react';
import PropTypes from 'prop-types';

const DeleteColor = ({ handleOnClick }) => {
    const onClick = e => {
        e.preventDefault();
        handleOnClick();
    };

    return (
        <a href="" onClick={onClick} style={{ color: '#000' }}>
      delete
        </a>
    );
};

DeleteColor.propTypes = {
    handleOnClick: PropTypes.func.isRequired
};

export default DeleteColor;
