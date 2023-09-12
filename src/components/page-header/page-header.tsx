import styles from './page-header.module.less'

function PageHeader(): JSX.Element {
  return (
    <header className={styles['page-header']}>
      <img className={styles['page-header__logo']} src="./img/logo.png" alt="Логотип" />
    </header>
  );
}

export default PageHeader;
