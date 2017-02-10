
import React from 'react';
import ColorItem from './ColorItem';

const ColorRow = ({ colors, onColorSelect, width }) => {

    width = width || 100 / colors.length;

    return (
        <div style={{ height: '30px' }}>
            {colors.map(item => {
                return (
                    <ColorItem
                        key={item.hex}
                        color={item}
                        width={width}
                        onColorSelect={onColorSelect}
                    />
                );
            })}
        </div>
    );
};

ColorRow.propTypes = {
    colors: React.PropTypes.array.isRequired,
    onColorSelect: React.PropTypes.func,
    width: React.PropTypes.number
};

export default ColorRow;
