import React from 'react';
import PropTypes from 'prop-types';
import ColorRow from './ColorRow';

const ColorTable = ({ palette, onColorSelect, width }) => {
  return (
    <div>
      {palette.map((colors, index) =>
        <ColorRow
          key={index}
          colors={colors}
          onColorSelect={onColorSelect}
          width={width}
        />
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
  palette: PropTypes.array.isRequired,
  onColorSelect: PropTypes.func,
  width: PropTypes.number
};

export default ColorTable;
