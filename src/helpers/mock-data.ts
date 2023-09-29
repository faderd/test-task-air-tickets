import { CurrencyRate } from '../types/currency-rate';
import { Tickets } from '../types/ticket';

const tickets = {
  "tickets": [{
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "16:20",
    "arrival_date": "12.05.18",
    "arrival_time": "22:10",
    "carrier": "TK",
    "stops": 3,
    "price": 12400
  }, {
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "17:20",
    "arrival_date": "12.05.18",
    "arrival_time": "23:50",
    "carrier": "S7",
    "stops": 1,
    "price": 13100
  }, {
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "12:10",
    "arrival_date": "12.05.18",
    "arrival_time": "18:10",
    "carrier": "SU",
    "stops": 0,
    "price": 15300
  }, {
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "17:00",
    "arrival_date": "12.05.18",
    "arrival_time": "23:30",
    "carrier": "TK",
    "stops": 2,
    "price": 11000
  }, {
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "12:10",
    "arrival_date": "12.05.18",
    "arrival_time": "20:15",
    "carrier": "BA",
    "stops": 3,
    "price": 13400
  }, {
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "9:40",
    "arrival_date": "12.05.18",
    "arrival_time": "19:25",
    "carrier": "SU",
    "stops": 3,
    "price": 12450
  }, {
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "17:10",
    "arrival_date": "12.05.18",
    "arrival_time": "23:45",
    "carrier": "TK",
    "stops": 1,
    "price": 13600
  },
  {
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "UFA",
    "destination_name": "Уфа",
    "departure_date": "12.05.18",
    "departure_time": "15:15",
    "arrival_date": "12.05.18",
    "arrival_time": "17:45",
    "carrier": "TK",
    "stops": 1,
    "price": 33400
  },
  {
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "6:10",
    "arrival_date": "12.05.18",
    "arrival_time": "15:25",
    "carrier": "TK",
    "stops": 0,
    "price": 14250
  },
  {
    "origin": "LRN",
    "origin_name": "Ларнака",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "12:50",
    "arrival_date": "12.05.18",
    "arrival_time": "14:30",
    "carrier": "SU",
    "stops": 1,
    "price": 7000
  },
  {
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "16:50",
    "arrival_date": "12.05.18",
    "arrival_time": "23:35",
    "carrier": "SU",
    "stops": 1,
    "price": 16700
  },
  {
    "origin": "VVO",
    "origin_name": "Владивосток",
    "destination": "TLV",
    "destination_name": "Тель-Авив",
    "departure_date": "12.05.18",
    "departure_time": "6:10",
    "arrival_date": "12.05.18",
    "arrival_time": "16:15",
    "carrier": "S7",
    "stops": 0,
    "price": 17400
  }]
}

const currencyRate: CurrencyRate = {
  RUBEUR: 100,
  RUBUSD: 90,
};

export const getMockTickets = async (): Promise<{ tickets: Tickets }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tickets);
    }, 3000);
  });
};

export const getMockCurrencyRate = async (): Promise<CurrencyRate> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(currencyRate);
    }, 500);
  });
};
