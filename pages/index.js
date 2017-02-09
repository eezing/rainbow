
import React from 'react';
import { Provider } from 'react-redux';
import Page from '../components/Page';
import Top from '../containers/Top';
import Palettes from '../containers/Palettes';
import Footer from '../components/Footer';

import createStore from '../store';
import data from '../data';
import { loadPalette } from '../store/palettes/action-creators';

export default class extends React.Component {

    constructor() {
        super();
    }

    componentWillMount() {
        this.store = createStore();
        data.map(item => this.store.dispatch(loadPalette(item)));
    }

    render() {
        return (
            <Provider store={this.store}>
                <Page>
                    <Top />
                    <Palettes />
                    <Footer />
                </Page>
            </Provider>
        );
    }
}
