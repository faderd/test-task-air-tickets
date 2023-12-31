export enum NameSpace {
  Data = 'DATA',
}

export enum AppRoute {
  Root = '/',
}

export enum SearchParam {
  Currency = 'currency',
  Stops = 'stops',
  SearchTerm = 'search',
}

export enum Currency {
  Rub = 'rub',
  Usd = 'usd',
  Eur = 'eur',
}

export const DEFAULT_CURRENCY = Currency.Rub;

export const CurrencySymbol: Record<string, string> = {
  [Currency.Rub]: '₽',
  [Currency.Usd]: '$',
  [Currency.Eur]: '€',
}

export enum Stops {
  All = 'all',
  NotStops = '0',
  OneStop = '1',
  TwoStops = '2',
  ThreeStops = '3',
}

export enum Payment {
  Visa = 'visa',
  Mir = 'mir',
  Iomoney = 'iomoney',
}

export const MAX_SEARCH_STRING_LENGTH = 20;
