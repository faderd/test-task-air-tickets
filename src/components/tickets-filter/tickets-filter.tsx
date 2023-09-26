import { useEffect } from 'react';
import { CurrencySymbol, DEFAULT_CURRENCY, SearchParam, Stops } from '../../const';
import CurrencyFilterBlock from '../currency-filter-block/currency-filter-block';
import styles from './tickets-filter.module.less';
import { useSearchParams } from 'react-router-dom';
import { TicketsFilters } from '../../types/tickets-filters';
import { useAppDispatch } from '../../hooks';
import { storeCurrencySymbol } from '../../store/tickets-data/tickets-data';
import StopsFilterBlock from '../stops-filter-block/stops-filter-block';
import SearchFilterBlock from '../search-filter-block/search-filter-block';

type TicketsFilterProps = {
  setFilters: (filters: TicketsFilters) => void;
};

function TicketsFilter({ setFilters }: TicketsFilterProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParamCurrency = searchParams.get(SearchParam.Currency);
  const searchParamStops = searchParams.get(SearchParam.Stops);

  useEffect(() => {
    if (!searchParamCurrency) {
      searchParams.set(SearchParam.Currency, DEFAULT_CURRENCY);
      setSearchParams(searchParams);
    }
    if (!searchParamStops) {
      searchParams.set(SearchParam.Stops, Stops.All);
      setSearchParams(searchParams);
    }

    setFilters({ searchParamCurrency, searchParamStops });
    dispatch(storeCurrencySymbol(CurrencySymbol[searchParamCurrency || DEFAULT_CURRENCY]));
  }, [dispatch, searchParamCurrency, searchParamStops, searchParams, setFilters, setSearchParams]);

  return (
    <div className={styles.filter}>
      <h2 className='visually-hidden'>Найденные билеты Фильтр</h2>
      <div className={styles['filter__wrapper']}>
        <CurrencyFilterBlock searchParams={searchParams} setSearchParams={setSearchParams} />
        <StopsFilterBlock searchParams={searchParams} setSearchParams={setSearchParams} />
        <SearchFilterBlock />
      </div>
    </div>
  );
}

export default TicketsFilter;
