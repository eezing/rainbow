
import React from 'react';
import { Provider } from 'react-redux';
import Page from '../components/Page';
import Top from '../containers/Top';
import Palettes from '../containers/Palettes';
import Footer from '../components/Footer';

import store from '../store';
import data from '../data';
import { loadPalette } from '../store/palettes/action-creators';

data.map(item => store.dispatch(loadPalette(item)));

export default () => (
    <Provider store={store}>
        <Page>
            <Top />
            <Palettes />
            <Footer />
        </Page>
    </Provider>
);
