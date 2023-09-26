import { memo } from 'react';
import styles from './btn-radio-image.module.less';

type BtnRadioImageProps<T> = {
  imgLink: string;
  imgWidth: string;
  imgHeight: string;
  isChecked: boolean;
  setChecked: (payment: T) => void;
  checkedType: T;
  inputName: string;
  ariaLabel: string;
};

// eslint-disable-next-line react-refresh/only-export-components
function BtnRadioImage<T>({ imgLink, imgWidth, imgHeight, isChecked, setChecked, checkedType, inputName, ariaLabel }: BtnRadioImageProps<T>): JSX.Element {
  return (
    <div className={styles['btn-radio-image']}>
      <label>
        <input type="radio" name={inputName} aria-label={ariaLabel} checked={isChecked} onChange={() => { setChecked(checkedType) }} />
        <span className={styles['btn-radio-image__image']}>
          <svg width={imgWidth} height={imgHeight} aria-hidden="true">
            <use xlinkHref={imgLink}></use>
          </svg></span>
      </label>
    </div>
  );
}

export default memo(BtnRadioImage) as typeof BtnRadioImage;
