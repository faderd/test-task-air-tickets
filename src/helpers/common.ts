import { DEFAULT_CURRENCY, Stops } from '../const';
import { CurrencyRate } from '../types/currency-rate';
import { Tickets } from '../types/ticket';
import { TicketsFilters } from '../types/tickets-filters';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

export const applyTrainingsFilters = (tickets: Tickets, filters: TicketsFilters, currencyRate: CurrencyRate) => {
  let filteredTickets = tickets.slice();

  if (filters.searchParamCurrency && filters.searchParamCurrency !== DEFAULT_CURRENCY) {
    filteredTickets = filteredTickets.map((ticket) => ({
      ...ticket,
      price: +(ticket.price / currencyRate[DEFAULT_CURRENCY.toUpperCase() + filters.searchParamCurrency?.toUpperCase() as string]).toFixed(2)
    }));
  }

  if (filters.searchParamStops && filters.searchParamStops !== Stops.All) {
    const filterStops = filters.searchParamStops.split(';');
    filteredTickets = filteredTickets.filter((ticket) => filterStops.includes(ticket.stops.toString()));
  }

  return filteredTickets;
};

export const humanizeDate = (dateString: string | number | Date | dayjs.Dayjs | null | undefined) => {
  const date = dayjs(dateString, 'DD.MM.YY').locale('ru');
  const formattedDate = date.format('D MMM YYYY, dd');
  return formattedDate;
};

export const addDeclension = (number: number, one: string, two: string, five: string) => {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}
