import { ChangeEvent } from 'react';
import styles from './search-filter-block.module.less';
import { MAX_SEARCH_STRING_LENGTH, SearchParam } from '../../const';

type SearchFilterBlockProps = {
  text?: string;
  searchParams: URLSearchParams;
  setSearchParams: (params: URLSearchParams) => void;
};

function SearchFilterBlock({ text = 'Текст', searchParams, setSearchParams }: SearchFilterBlockProps): JSX.Element {
  const searchParamSearch = searchParams.get(SearchParam.SearchTerm);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const searchValue = evt.target.value;

    if (searchValue.length > MAX_SEARCH_STRING_LENGTH) { return; }

    searchParams.set(SearchParam.SearchTerm, searchValue);
    setSearchParams(searchParams);
  };

  return (
    <div className={styles.filter}>
      <h3 className={styles['filter__title']}>Поиск</h3>
      <form className={styles['filter__form']}>
        <label>
          <input
            className={styles['filter__input']}
            type="text"
            value={searchParamSearch || ''}
            onChange={handleChange}
            placeholder=""
          />
          <span>{text}</span>
        </label>
      </form>
    </div>
  );
}

export default SearchFilterBlock;
