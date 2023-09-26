import { ChangeEvent, useState } from 'react';
import styles from './search-filter-block.module.less';


function SearchFilterBlock(): JSX.Element {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  return (
    <div className={styles.filter}>
      <h3 className={styles['filter__title']}>Поиск</h3>
      <form className={styles['filter__form']}>
        <label>
          <input
            className={styles['filter__input']}
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder=""
          />
          <span>Текст</span>
        </label>
      </form>
    </div>
  );
}

export default SearchFilterBlock;
