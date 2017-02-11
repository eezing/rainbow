
import React from 'react';
import Bar from './Bar';
import { toQueryString, toColors } from '../modules/url-colors';

class Top extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        this.props.url.replace(`${this.props.url.pathname}${toQueryString(nextProps.selected)}`);
    }

    componentDidMount() {

        const query = this.props.url.query;

        if (!query.colors) {
            return;
        }

        toColors(query.colors).map(color => this.props.selectColor(color));
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
