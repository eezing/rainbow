
import React from 'react';
import ColorTable from './ColorTable';

const PaletteList = ({ palettes, selected, selectColor }) => {
    return (
        <div style={{ paddingTop: '72px' }}>
            <div style={{ paddingTop: selected.length ? '34px' : '0' }}>
                { palettes.map((item, index) => {
                    return (
                        <div key={index} style={{ marginBottom: '12px' }}>
                            <ColorTable palette={item} onColorSelect={selectColor} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

PaletteList.propTypes = {
    palettes: React.PropTypes.array.isRequired,
    selected: React.PropTypes.array.isRequired,
    selectColor: React.PropTypes.func.isRequired
};
export default PaletteList;
