import { getMockTickets } from '../../helpers/mock-data';
import { TicketsData } from '../../types/state';
import { fetchCurrencyRate, fetchTickets } from '../api-actions';
import { getInitialStateTicketsData, storeCurrencyRate, storeCurrencySymbol, storeTickets, ticketsData } from './tickets-data';

describe('TicketsData Slice', async () => {
  let initialState: TicketsData;
  const mockTickets = (await getMockTickets()).tickets;

  beforeEach(() => {
    initialState = getInitialStateTicketsData();
  });
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const result = ticketsData.reducer(initialState, emptyAction);

    expect(result).toEqual(initialState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const result = ticketsData.reducer(undefined, emptyAction);

    expect(result).toEqual(initialState);
  });

  // reducers=================================================================
  it('should update state.tickets by storeTickets', () => {
    const result = ticketsData.reducer(initialState, storeTickets(mockTickets));

    expect(result).toEqual({...initialState, tickets: mockTickets});
  });

  it('should update state.currencyRate by storeCurrencyRate', () => {
    const mockCurrencyRate = {'mock': 100};
    const result = ticketsData.reducer(initialState, storeCurrencyRate(mockCurrencyRate));

    expect(result).toEqual({...initialState, currencyRate: mockCurrencyRate});
  });

  it('should update state.currencySymbol by storeCurrencySymbol', () => {
    const mockCurrencySymbol = 'mockSymbol';
    const result = ticketsData.reducer(initialState, storeCurrencySymbol(mockCurrencySymbol));

    expect(result).toEqual({...initialState, currencySymbol: mockCurrencySymbol});
  });

  // extra reducers===========================================================
  it('should set "isTicketsDataLoading" to "true" with "fetchTickets.pending"', () => {
    const expectedState = { ...initialState, isTicketsDataLoading: true };
    const result = ticketsData.reducer(undefined, fetchTickets.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "isTicketsDataLoading" to "false" with "fetchTickets.fullfilled"', () => {
    const originalState = { ...initialState, isTicketsDataLoading: true };
    const expectedState = { ...initialState, isTicketsDataLoading: false };
    const result = ticketsData.reducer(originalState, fetchTickets.fulfilled);

    expect(result).toEqual(expectedState);
  });

  it('should set "isTicketsDataLoading" to "false" with "fetchTickets.rejected"', () => {
    const originalState = { ...initialState, isTicketsDataLoading: true };
    const expectedState = { ...initialState, isTicketsDataLoading: false };
    const result = ticketsData.reducer(originalState, fetchTickets.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "isCurrencyRateLoading" to "true" with "fetchCurrencyRate.pending"', () => {
    const expectedState = { ...initialState, isCurrencyRateLoading: true };
    const result = ticketsData.reducer(undefined, fetchCurrencyRate.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "isCurrencyRateLoading" to "false" with "fetchCurrencyRate.fullfilled"', () => {
    const originalState = { ...initialState, isCurrencyRateLoading: true };
    const expectedState = { ...initialState, isCurrencyRateLoading: false };
    const result = ticketsData.reducer(originalState, fetchCurrencyRate.fulfilled);

    expect(result).toEqual(expectedState);
  });

  it('should set "isCurrencyRateLoading" to "false" with "fetchCurrencyRate.rejected"', () => {
    const originalState = { ...initialState, isCurrencyRateLoading: true };
    const expectedState = { ...initialState, isCurrencyRateLoading: false };
    const result = ticketsData.reducer(originalState, fetchCurrencyRate.rejected);

    expect(result).toEqual(expectedState);
  });
});
