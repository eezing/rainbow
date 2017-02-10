
import React from 'react';
import Bar from './Bar';
import { colorsToUrl } from '../modules/url-hex';

class Top extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        this.props.url.replace(colorsToUrl(nextProps.selected));
    }

    render() {
        return (
            <Bar
                selected={this.props.selected}
                selectColor={this.props.selectColor}
                deleteColor={this.props.deleteColor}
            />
        );
    }
}

Top.propTypes = {
    selected: React.PropTypes.array.isRequired,
    selectColor: React.PropTypes.func.isRequired,
    deleteColor: React.PropTypes.func.isRequired,
    url: React.PropTypes.object.isRequired
};


export default Top;
