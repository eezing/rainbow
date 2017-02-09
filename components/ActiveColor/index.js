
import React from 'react';
import DeleteColor from './DeleteColor';

const ActiveColor = ({ selected, deleteColor }) => {

    const color = selected.filter(item => item.active === true)[0] || {};

    const handleDelete = () => deleteColor(color);

    return (
        <div className={color.hex ? '' : 'hide-it' }>
            <ul>
                <li><DeleteColor handleOnClick={handleDelete} /></li>
                <li>hex: {color.hex}</li>
            </ul>
            <style jsx>{`
                div {
                    font-family: monospace;
                    text-align: right;
                }
                div.hide-it {
                    visibility: hidden;
                }
                ul {
                    list-style: none;
                    margin: -8px 8px 8px 0;
                    padding: 0;
                }
                li {
                    display: inline;
                    margin-left: 12px;
                }
            `}</style>
        </div>
    );
};

ActiveColor.propTypes = {
    selected: React.PropTypes.array.isRequired,
    deleteColor: React.PropTypes.func.isRequired
};

export default ActiveColor;
