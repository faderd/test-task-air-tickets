import { useEffect, useState } from 'react';
import PageHeader from '../../components/page-header/page-header';
import TicketsFilter from '../../components/tickets-filter/tickets-filter';
import { TicketsFilters } from '../../types/tickets-filters';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCurrencyRateSelector, getTicketsSelector } from '../../store/tickets-data/selectors';
import { fetchCurrencyRate, fetchTickets } from '../../store/api-actions';
import { applyTrainingsFilters } from '../../helpers/common';
import styles from './main-screen.module.less';
import TicketCards from '../../components/ticket-cards/ticket-cards';

function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const [filters, setFilters] = useState<TicketsFilters | null>(null);

  const tickets = useAppSelector(getTicketsSelector);
  const currencyRate = useAppSelector(getCurrencyRateSelector);

  useEffect(() => {
      dispatch(fetchTickets());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCurrencyRate());
  }, [dispatch]);

  let filteredTickets = tickets;
  if (filters !== null) {
    filteredTickets = applyTrainingsFilters(tickets, filters, currencyRate);
  }

  return (
    <div className='page-wrapper'>
      <PageHeader />
      <main className={styles['main-screen__content']}>
        <h1 className='visually-hidden'>Найденные билеты</h1>
        <TicketsFilter setFilters={setFilters} />
        <TicketCards tickets={filteredTickets} />
      </main>
    </div>
  );
}

export default MainScreen;
