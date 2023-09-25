import React from 'react';
import styles from './button.module.less';

type ButtonProps = {
  title: string;
  onClick: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function Button({ title, onClick }: ButtonProps): JSX.Element {
  return (
    <button className={styles.button} onClick={onClick}>
      {title.split('\n').map((line) => (
        <span key={line}>
          {line}
          <br />
        </span>
      ))}
    </button>
  );
}

export default Button;
