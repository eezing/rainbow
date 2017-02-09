
import React from 'react';
import { Provider } from 'react-redux';
import PageContainer from '../components/PageContainer';
import Top from '../containers/Top';
import Palettes from '../containers/Palettes';

import store from '../store';
import data from '../data';
import { loadPalette } from '../store/palettes/action-creators';

data.map(item => store.dispatch(loadPalette(item)));

export default () => (
    <Provider store={store}>
        <PageContainer>
            <Top />
            <Palettes />
        </PageContainer>
    </Provider>
);
