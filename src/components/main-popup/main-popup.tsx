import OverlayingPopup from '../overlaying-popup/overlaying-popup';
import classNames from 'classnames';
import styles from './main-popup.module.less';

type MainPopupProps = {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  className?: string;
  children: JSX.Element;
};

function MainPopup({ isOpen, title, onClose, className, children }: MainPopupProps) {
  return (
    <OverlayingPopup isOpen={isOpen} onClose={onClose}>
      <div className={classNames(styles.container, className)}>
        <h2 className={styles.header}>{title}</h2>
        <button className={styles.closeButton} onClick={onClose}>
          <span className="visually-hidden">Закрыть</span>
          <svg className={styles['close-icon']} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {children}
      </div>
    </OverlayingPopup>
  )
}

MainPopup.propTypes = {}

export default MainPopup
