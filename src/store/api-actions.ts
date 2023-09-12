import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { getCurrencyRate, getMockTickets } from '../helpers/mock-data';
import { storeCurrencyRate, storeTickets } from './tickets-data/tickets-data';

export const fetchTickets = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
}
>('tickets-data/fetchTickets',
  async (_, { dispatch }) => {
    try {
      const data = await getMockTickets();
      dispatch(storeTickets(data.tickets));
    } catch (err) {
      alert('Ошибка загрузки: ' + err);
    }
  });

export const fetchCurrencyRate = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
}
>('tickets-data/fetchCurrencyRate',
  async (_, { dispatch }) => {
    try {
      const data = await getCurrencyRate();
      dispatch(storeCurrencyRate(data));
    } catch (err) {
      alert('Ошибка загрузки: ' + err);
    }
  });
