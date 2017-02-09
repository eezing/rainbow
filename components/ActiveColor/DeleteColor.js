
import React from 'react';

const DeleteColor = ({ handleOnClick }) => {

    const onClick = (e) => {
        e.preventDefault();
        handleOnClick();
    };

    return <a href="" onClick={onClick} style={{ color: '#000' }}>delete</a>;
};

DeleteColor.propTypes = {
    handleOnClick: React.PropTypes.func.isRequired
};

export default DeleteColor;
