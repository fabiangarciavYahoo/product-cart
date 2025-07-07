import React, { FC, useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface CartButtonsProps {
  className?: string;
}

const CartButtons: FC<CartButtonsProps> = ({ className }) => {
  const { counter, increaseBy, maxCount } = useContext(ProductContext);

  const isMaxCountReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      <button
        className={styles.buttonMinus}
        onClick={() => counter !== 0 && increaseBy(-1)}
      >
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${
          isMaxCountReached() ? styles.buttonDisabled : ''
        }`}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};

export default CartButtons;
