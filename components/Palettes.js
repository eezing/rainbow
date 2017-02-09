
import React from 'react';
import ColorTable from './ColorTable';

const PaletteList = ({ palettes, selected, selectColor }) => {
    return (
        <div className={selected.length ? 'list push-down' : 'list'}>
            { palettes.map((item, index) => (
                <div key={index}>
                    <ColorTable palette={item} onColorSelect={selectColor} />
                </div>
            ))}
            <style jsx>{`
                .list {
                    padding: 74px 8px 0 8px;
                }
                .push-down {
                    padding-top: 110px;
                }
            `}</style>
        </div>
    );
};

PaletteList.propTypes = {
    palettes: React.PropTypes.array.isRequired,
    selected: React.PropTypes.array.isRequired,
    selectColor: React.PropTypes.func.isRequired
};
export default PaletteList;
