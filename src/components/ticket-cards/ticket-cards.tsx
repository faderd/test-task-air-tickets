import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { getCurrencySymbolSelector, getIsTicketsLoadingSelector } from '../../store/tickets-data/selectors';
import { Ticket, Tickets } from '../../types/ticket';
import TicketCard from '../ticket-card/ticket-card';
import styles from './ticket-cards.module.less';
import PopupBuy from '../popup-buy/popup-buy';
import TicketCardSkeleton from '../ticket-card/ticket-card-skeleton';

const SKELETONS_COUNT = 3;

type TicketCardsProps = {
  tickets: Tickets;
};

function TicketCards({ tickets }: TicketCardsProps): JSX.Element {
  const currencySymbol = useAppSelector(getCurrencySymbolSelector);
  const isTicketsDataLoading = useAppSelector(getIsTicketsLoadingSelector);
  const [ticketForPopup, setTicketForPopup] = useState<Ticket | null>(null);

  return (
    <>
      <div className={styles['ticket-cards']}>
        {
          isTicketsDataLoading && (new Array(SKELETONS_COUNT).fill(null).map(() => (<TicketCardSkeleton />)))
        }

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
