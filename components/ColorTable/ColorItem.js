
import React from 'react';
import { isTouchDevice } from '../../modules/touch-device';

const ColorItem = class extends React.Component {

    constructor(props) {
        super(props);
        this.isTouchDevice = isTouchDevice();
    }

    shouldComponentUpdate(nextProps, nextState) {

        if (nextState.clicked !== this.state.clicked) {
            return true;
        }

        if (nextProps.width !== this.props.width) {
            return true;
        }

        if (nextProps.color.active !== this.props.color.active) {
            return true;
        }

        return false;
    }

    state = {
        clicked: false
    };

    onClick = () => {

        if (!this.isTouchDevice) {
            toClipboard(this.hexInput)
        }

        if (this.props.onColorSelect) {

            this.props.onColorSelect(this.props.color);

            this.setState({
                clicked: true
            });

            setTimeout(() => this.setState({ clicked: false}), 200);
        }
    }

    render() {

        const { color, width, onColorSelect } = this.props;
        const showActive = color.active || this.state.clicked;

        return (
            <div
                className="outer"
                style={{ backgroundColor: color.hex, width: width + '%' }}
                onClick={this.onClick}>
                <div
                    className={showActive ? 'inner active' : 'inner'}
                    style={{ outlineColor: color.hexHighlight }}
                />

                <input type="hidden" ref={(input) => this.hexInput = input} defaultValue={color.hex} />

                <style jsx>{`
                    .outer {
                        height: 30px;
                        float: left;
                        cursor: pointer;
                        touchAction: manipulation;
                        WebkitTapHighlightColor: rgba(0,0,0,0);
                    }
                    .inner {
                        height: 100%;
                        width: 100%;
                        margin: 0 auto;
                        outline-width: 2px;
                        outline-offset: -5px;
                    }
                    @media (hover: hover) {
                        .inner:hover {
                            outline-style: solid;
                        }
                        .inner:active {
                            outline-style: solid;
                            outline-offset: -6.5px;
                        }
                    }
                    .inner.active {
                        outline-style: solid;
                        outline-offset: -6.5px;
                    }
                `}</style>
            </div>
        );
    }
};

ColorItem.propTypes = {
    color: React.PropTypes.object.isRequired,
    width: React.PropTypes.number.isRequired,
    onColorSelect: React.PropTypes.func
};

function toClipboard(input) {
    input.type = 'text';
    input.select();
    document.execCommand('copy');
    input.type = 'hidden';
}

export default ColorItem;
