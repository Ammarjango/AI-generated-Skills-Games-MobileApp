import { combineReducers } from '@reduxjs/toolkit';
import appReducer from './appReducers';

const rootReducer = combineReducers({
    appReducer,
});

export default rootReducer;
