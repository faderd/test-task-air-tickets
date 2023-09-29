import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TicketsData } from '../../types/state';
import { DEFAULT_CURRENCY, NameSpace } from '../../const';
import { Tickets } from '../../types/ticket';
import { fetchCurrencyRate, fetchTickets } from '../api-actions';
import { CurrencyRate } from '../../types/currency-rate';

export const initialState: TicketsData = {
  tickets: [],
  isTicketsDataLoading: false,
  currencyRate: {},
  isCurrencyRateLoading: false,
  currencySymbol: DEFAULT_CURRENCY,
};

export const ticketsData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    storeTickets: (state, action: PayloadAction<Tickets>) => {
      state.tickets = action.payload;
    },
    storeCurrencyRate: (state, action: PayloadAction<CurrencyRate>) => {
      state.currencyRate = action.payload;
    },
    storeCurrencySymbol: (state, action: PayloadAction<string>) => {
      state.currencySymbol = action.payload;
     },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.isTicketsDataLoading = true;
      })
      .addCase(fetchTickets.fulfilled, (state) => {
        state.isTicketsDataLoading = false;
      })
      .addCase(fetchTickets.rejected, (state) => {
        state.isTicketsDataLoading = false;
      })
      .addCase(fetchCurrencyRate.pending, (state) => {
        state.isCurrencyRateLoading = true;
      })
      .addCase(fetchCurrencyRate.fulfilled, (state) => {
        state.isCurrencyRateLoading = false;
      })
      .addCase(fetchCurrencyRate.rejected, (state) => {
        state.isCurrencyRateLoading = false;
      });
  },
});

export const { storeTickets, storeCurrencyRate, storeCurrencySymbol } = ticketsData.actions;
