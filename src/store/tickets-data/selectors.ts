import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getTicketsSelector = (state: State) => state[NameSpace.Data].tickets;
export const getIsDataLoadingSelector = (state: State) => state[NameSpace.Data].isTicketsDataLoading;
export const getCurrencyRateSelector = (state: State) => state[NameSpace.Data].currencyRate;
export const getCurrencySymbolSelector = (state: State) => state[NameSpace.Data].currencySymbol;
