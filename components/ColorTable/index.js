
import React from 'react';
import ColorRow from './ColorRow';

const ColorTable = ({ palette, onColorSelect, width }) => {
    return (
        <div>
            {palette.map((colors, index) => (
                    <ColorRow
                        key={index}
                        colors={colors}
                        onColorSelect={onColorSelect}
                        width={width}
                    />
                )
            )}
        <style jsx>{`
            div {
                margin-bottom: 12px;
            }
        `}</style>
        </div>
    );
};

ColorTable.propTypes = {
    palette: React.PropTypes.array.isRequired,
    onColorSelect: React.PropTypes.func,
    width: React.PropTypes.number
};

export default ColorTable;
