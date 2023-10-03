import ContentLoader from "react-content-loader";
import styles from './ticket-card.module.less';
import classNames from 'classnames';

const TicketCardSkeleton = () => (
  <div className={classNames(styles['ticket-card'], styles['ticket-card--skeleton'])} >
    <ContentLoader
      speed={2}
      width={600}
      height={144}
      viewBox="0 0 600 144"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="28" y="27" rx="0" ry="0" width="106" height="38" />
      <rect x="23" y="76" rx="0" ry="0" width="117" height="45" />
      <rect x="167" y="27" rx="0" ry="0" width="110" height="68" />
      <rect x="474" y="27" rx="0" ry="0" width="110" height="68" />
      <rect x="287" y="27" rx="0" ry="0" width="177" height="29" />
      <rect x="150" y="0" rx="0" ry="0" width="2" height="144" />
    </ContentLoader>
  </div>

)

export default TicketCardSkeleton;
