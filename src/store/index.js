import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import rootReducer from './reducers';

export const configureStore = () => {
    const enchancers = composeWithDevTools();
    const store = createStore(rootReducer, undefined, enchancers);
    return store;
};

export const store = configureStore();
