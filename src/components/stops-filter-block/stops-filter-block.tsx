import { SearchParam, Stops } from '../../const';
import styles from './stops-filter-block.module.less';

const markingMap = {
  [Stops.All]: 'Все',
  [Stops.NotStops]: 'Без пересадок',
  [Stops.OneStop]: '1 пересадка',
  [Stops.TwoStops]: '2 пересадки',
  [Stops.ThreeStops]: '3 пересадки',
};

type StopsFilterBlockProps = {
  searchParams: URLSearchParams;
  setSearchParams: (params: URLSearchParams) => void;
};

function StopsFilterBlock({ searchParams, setSearchParams }: StopsFilterBlockProps): JSX.Element {
  let searchParamStops: string | string[] | null = searchParams.get(SearchParam.Stops);

  if (searchParamStops) {
    searchParamStops = searchParamStops.split(';');
  }

  const getIsChecked = (stops: Stops): boolean => {
    if (searchParamStops && Array.isArray(searchParamStops)) {
      return searchParamStops.includes(stops);
    }
    return false;
  }

  const handleChangeStops = (stops: Stops) => {
    if (!searchParamStops || !Array.isArray(searchParamStops)) {
      searchParamStops = [];
    }

    if (!getIsChecked(stops)) {
      if (stops === Stops.All) {
        // если пользователь выбирает 'Все', то остальные чекбоксы снимаются
        searchParamStops = [Stops.All];
      } else {
        // если пользователь выбирает любой другой чекбокс, кроме 'Все', то выбор с 'Все' снимаем
        searchParamStops = searchParamStops.filter((el) => el !== Stops.All);

        searchParamStops.push(stops);
      }
    } else {
      const paramForDeleteIndex = searchParamStops.findIndex((param) => param === stops);
      searchParamStops.splice(paramForDeleteIndex, 1);
    }

    if (searchParamStops.length === 0) {
      searchParams.delete(SearchParam.Stops);
    } else {
      searchParams.set(SearchParam.Stops, searchParamStops.join(';'));
    }

    setSearchParams(searchParams);
  };

  return (
    <div className={styles.filter}>
      <h3 className={styles['filter__title']}>Количество пересадок</h3>
      <form className={styles['filter__checkbox']}>
        {Object.values(Stops).map((stop) => (
          <label htmlFor={stop} key={stop}>
            <input
              type='checkbox'
              name={stop}
              checked={getIsChecked(stop)}
              onChange={() => handleChangeStops(stop)}
            />
            {markingMap[stop]}
          </label>
        ))}
      </form>
    </div>
  );
}

export default StopsFilterBlock;
