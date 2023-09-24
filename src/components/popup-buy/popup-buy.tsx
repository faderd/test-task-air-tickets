import { humanizeDate } from '../../helpers/common';
import { useAppSelector } from '../../hooks';
import { getCurrencySymbolSelector } from '../../store/tickets-data/selectors';
import { Ticket } from '../../types/ticket';
import Button from '../button/button';
import MainPopup from '../main-popup/main-popup';
import PaymentMethod from '../payment-method/payment-method';
import styles from './popup-buy.module.less';

const POPUP_TITLE = 'Купить билет';

type PopupBuyProps = {
  ticketForPopup: Ticket | null;
  setTicketForPopup: (ticket: Ticket | null) => void;
};

function PopupBuy({ ticketForPopup, setTicketForPopup }: PopupBuyProps): JSX.Element {
  const currencySymbol = useAppSelector(getCurrencySymbolSelector);

  const handleButtonClose = () => { setTicketForPopup(null) };

  const handleBuy = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault();
  };

  return (
    <MainPopup
      isOpen={!!ticketForPopup}
      onClose={handleButtonClose}
      title={POPUP_TITLE}>
      <>
        <div className={styles['popup__product-info']}>
          <img className={styles['popup__carrier-logo']} src={`./img/${ticketForPopup?.carrier.toLowerCase()}.jpg`}></img>
          <div className={styles['popup__ticket-line']}>
            <div className={styles['popup__ticket-line-top']}>
              <div className={styles['popup__ticket-cell']}>{ticketForPopup?.arrival_time}</div>
              <div className={styles['popup__ticket-cell']}>{ticketForPopup?.origin_name}</div>
            </div>
            <div className={styles['popup__ticket-line-bottom']}>
              <div className={styles['popup__ticket-cell']}>{humanizeDate(ticketForPopup?.arrival_date)}</div>
              <div className={styles['popup__ticket-cell']}>{ticketForPopup?.origin}</div>
            </div>
          </div>
          <div className={styles['popup__ticket-line']}>
            <div className={styles['popup__ticket-line-top']}>
              <div className={styles['popup__ticket-cell']}>{ticketForPopup?.departure_time}</div>
              <div className={styles['popup__ticket-cell']}>{ticketForPopup?.destination_name}</div>
            </div>
            <div className={styles['popup__ticket-line-bottom']}>
              <div className={styles['popup__ticket-cell']}>{humanizeDate(ticketForPopup?.departure_date)}</div>
              <div className={styles['popup__ticket-cell']}>{ticketForPopup?.destination}</div>
            </div>
          </div>
        </div>

        <PaymentMethod />

        <div className={styles['popup__total']}>
          <p className={styles['popup__total-text']}>Итого</p>
          <svg viewBox="0 0 310 2" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1L310 1.00003" stroke="#CFCFCF" stroke-dasharray="4 4" />
          </svg>
          <p className={styles['popup__total-price']}>{ticketForPopup?.price.toLocaleString('ru-RU')}&nbsp;{currencySymbol}</p>
        </div>

        <div className={styles['popup__buttons']}>
          <Button title='Купить' onClick={handleBuy} />
        </div>
      </>
    </MainPopup>
  );
}

export default PopupBuy;
