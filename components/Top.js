import React from 'react';
import PropTypes from 'prop-types';
import Bar from './Bar';
import { toQueryString, toColors } from '../modules/url-colors';
import Router from 'next/router';

class Top extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.selected === nextProps.selected) return;
        const url = `${this.props.url.pathname}${toQueryString(
            nextProps.selected
        )}`;
        Router.replace(url, undefined, { shallow: true });
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
    selected: PropTypes.array.isRequired,
    selectColor: PropTypes.func.isRequired,
    deleteColor: PropTypes.func.isRequired,
    url: PropTypes.object.isRequired
};

export default Top;
