import { addDeclension, humanizeDate } from '../../helpers/common';
import { Ticket } from '../../types/ticket';
import Button from '../button/button';
import styles from './ticket-card.module.less';

type TicketCardProps = {
  ticket: Ticket | null;
  currencySymbol: string;
  setTicketForPopup: (ticket: Ticket | null) => void;
};

function TicketCard({ ticket, currencySymbol, setTicketForPopup }: TicketCardProps): JSX.Element {
  const handleClickBuy = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault();
    setTicketForPopup(ticket);
  };

  return (
    <div className={styles['ticket-card']}>
      <div className={styles['ticket-card__buy']}>
        <div className={styles['ticket-card__logo']}>
          <img src={`./img/${ticket?.carrier.toLowerCase()}.jpg`}></img>
        </div>
        <Button title={`Купить\nза ${ticket?.price.toLocaleString('ru-RU')} ${currencySymbol}`} onClick={handleClickBuy} />
      </div>
      <div className={styles['ticket-card__info']}>
        <div className={styles['ticket-card__times']}>
          <div className={styles['ticket-card__arrival-time']}>{ticket?.arrival_time}</div>
          <div className={styles['ticket-card__stops']}>{ticket?.stops} {addDeclension(ticket?.stops || 0, 'пересадка', 'пересадки', 'пересадок')}</div>
          <div className={styles['ticket-card__departure-time']}>{ticket?.departure_time}</div>
        </div>
        <div className={styles['ticket-card__locations']}>
          <div>{ticket?.origin}, {ticket?.origin_name}</div>
          <div>{ticket?.destination}, {ticket?.destination_name}</div>
        </div>
        <div className={styles['ticket-card__dates']}>
          <div>{humanizeDate(ticket?.arrival_date)}</div>
          <div>{humanizeDate(ticket?.departure_date)}</div>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
