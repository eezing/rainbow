import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Page from '../components/Page';
import Top from '../containers/Top';
import Palettes from '../containers/Palettes';
import Footer from '../components/Footer';

import createStore from '../store';
import data from '../data';
import { loadPalette } from '../store/palettes/action-creators';

const Index = class extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.store = createStore();
        data.map(item => this.store.dispatch(loadPalette(item)));
    }

    render() {
        return (
            <Provider store={this.store}>
                <Page>
                    <Top url={this.props.url} />
                    <Palettes />
                    <Footer />
                </Page>
            </Provider>
        );
    }
};

Index.propTypes = {
    url: PropTypes.object.isRequired
};

export default Index;
