import { useAppSelector } from '../../hooks';
import { getCurrencySymbolSelector } from '../../store/tickets-data/selectors';
import { Tickets } from '../../types/ticket';
import TicketCard from '../ticket-card/ticket-card';
import styles from './ticket-cards.module.less';

type TicketCardsProps = {
  tickets: Tickets;
};
function TicketCards({ tickets }: TicketCardsProps): JSX.Element {
  const currencySymbol = useAppSelector(getCurrencySymbolSelector);

  return (
    <div className={styles['ticket-cards']}>
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.price + ticket.origin + ticket.destination}
          ticket={ticket}
          currencySymbol={currencySymbol} />
      ))}
    </div>
  );
}

export default TicketCards;
