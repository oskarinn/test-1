// import React from 'react';
import { applyMiddleware, createStore, Store} from 'redux';
import thunk from 'redux-thunk';

import { IAppState } from '../constants/app-state';
// import Carer from '../models/Carer';
import { carerReducer } from '../reducers/carer-reducer';

const  carerStore: Store<IAppState> = createStore(carerReducer, applyMiddleware(thunk));

export default carerStore;