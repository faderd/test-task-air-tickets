import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { ticketsData } from './tickets-data/tickets-data';

export const rootReducer = combineReducers({
  [NameSpace.Data]: ticketsData.reducer,
});
