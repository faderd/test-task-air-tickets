import { NameSpace } from '../../const';
import { getMockCurrencyRate, getMockTickets } from '../../helpers/mock-data';
import { State } from '../../types/state';
import { Tickets } from '../../types/ticket';
import { getCurrencyRateSelector, getCurrencySymbolSelector, getIsTicketsLoadingSelector, getTicketsSelector } from './selectors';
import { getInitialStateTicketsData } from './tickets-data';

describe('TicketsData selectors', async () => {
  const mockState: State = {
    [NameSpace.Data]: {
      ...getInitialStateTicketsData(),
      tickets: await getMockTickets() as unknown as Tickets,
      currencyRate: await getMockCurrencyRate(),
    }
  };

  it('should return Tickets from state', () => {
    const { tickets } = mockState[NameSpace.Data];
    const result = getTicketsSelector(mockState);
    expect(result).toEqual(tickets);
  });

  it('should return is data loading status from state', () => {
    const { isTicketsDataLoading } = mockState[NameSpace.Data];
    const result = getIsTicketsLoadingSelector(mockState);
    expect(result).toEqual(isTicketsDataLoading);
  });

  it('should return is currency rate from state', () => {
    const { currencyRate } = mockState[NameSpace.Data];
    const result = getCurrencyRateSelector(mockState);
    expect(result).toEqual(currencyRate);
  });

  it('should return is currency symbol from state', () => {
    const { currencySymbol } = mockState[NameSpace.Data];
    const result = getCurrencySymbolSelector(mockState);
    expect(result).toEqual(currencySymbol);
  });
});
