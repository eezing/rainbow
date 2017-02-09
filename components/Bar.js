
import React from 'react';
import ColorTable from './ColorTable';
import ActiveColor from './ActiveColor';

const Bar = ({ selected, selectColor, deleteColor }) => (
    <div className="outer-container">

        <div className="title">
            { selected.length ? <h2>Rainbow</h2> : <h1>Rainbow</h1> }
        </div>

        <div className="colors">
            {selected.length ? (
                <div>
                    <ActiveColor selected={selected} deleteColor={deleteColor} />
                    <ColorTable palette={[selected]} onColorSelect={selectColor} />
                </div>
            ) : null}
        </div>

        <div className="lines" />

        <style jsx>{`
            .outer-container {
                width: 100%;
                position: fixed;
                background-color: #fff;
                top: 0;
                right: 0;
                left: 0;
                zIndex: 1030;
                border-bottom-style: solid;
                border-bottom-width: 1.5px;
                border-bottom-color: #000;
            }
            .title {
                margin: 8px 0 0 10px;
            }
            h1, h2 {
                margin: 0;
                padding: 0;
            }
            .colors {
                margin: 0 8px 12px 8px;
            }
            .lines {
                width: 100%;
                color: #000;
                margin-bottom: 6px;
                border-bottom-style: solid;
                border-bottom-width: 1.5px;
                border-bottom-color: #000;
            }
        `}</style>
    </div>
);

Bar.propTypes = {
    selected: React.PropTypes.array.isRequired,
    selectColor: React.PropTypes.func.isRequired,
    deleteColor: React.PropTypes.func.isRequired
};

export default Bar;
