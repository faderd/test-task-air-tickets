import { store } from '../store';
import { CurrencyRate } from './currency-rate';
import { Tickets } from './ticket';

export type TicketsData = {
  tickets: Tickets;
  isTicketsDataLoading: boolean;
  currencyRate: CurrencyRate;
  isCurrencyRateLoading: boolean;
  currencySymbol: string;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
