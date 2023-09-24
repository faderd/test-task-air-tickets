import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { getCurrencySymbolSelector } from '../../store/tickets-data/selectors';
import { Ticket, Tickets } from '../../types/ticket';
import TicketCard from '../ticket-card/ticket-card';
import styles from './ticket-cards.module.less';
import PopupBuy from '../popup-buy/popup-buy';

type TicketCardsProps = {
  tickets: Tickets;
};
function TicketCards({ tickets }: TicketCardsProps): JSX.Element {
  const currencySymbol = useAppSelector(getCurrencySymbolSelector);
  const [ticketForPopup, setTicketForPopup] = useState<Ticket | null>(null);

  return (
    <>
      <div className={styles['ticket-cards']}>
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.price + ticket.origin + ticket.destination}
            ticket={ticket}
            currencySymbol={currencySymbol}
            setTicketForPopup={setTicketForPopup} />
        ))}
      </div>
      <PopupBuy setTicketForPopup={setTicketForPopup} ticketForPopup={ticketForPopup} />
    </>
  );
}

export default TicketCards;
