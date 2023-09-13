import { Currency, SearchParam } from '../../const';
import styles from './currency-filter-block.module.less'

type CurrencyFilterBlockProps = {
  searchParams: URLSearchParams;
  setSearchParams: (params: URLSearchParams) => void;
};

function CurrencyFilterBlock({ searchParams, setSearchParams }: CurrencyFilterBlockProps): JSX.Element {
  const searchParamCurrency = searchParams.get(SearchParam.Currency);

  const handleChangeCurrency = (currency: string) => {
    searchParams?.set(SearchParam.Currency, currency);
    setSearchParams(searchParams);
  };

  return (
    <div className={styles.filter}>
      <h3 className={styles['filter__title']}>Валюта</h3>
      <form className={styles['filter__radio']}>

        {Object.keys(Currency).map((currencyKey) => (
          <label className={styles['filter__radio-label']} key={currencyKey}>
            <input
              className={styles['filter__radio-input']}
              type='radio'
              name='sort'
              checked={searchParamCurrency === Currency[currencyKey as keyof typeof Currency]}
              onChange={() => handleChangeCurrency(Currency[currencyKey as keyof typeof Currency])}
            />
            <div className={styles['filter__radio-marking']}>{currencyKey}</div>
          </label>
        ))}

      </form>
    </div>
  );
}

export default CurrencyFilterBlock;
