import React, { FC, useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface CartTitleProps {
  className?: string;
  style?: React.CSSProperties;
}

export const CartTitle: FC<CartTitleProps> = ({ style, className }) => {
  const {
    product: { name, price },
  } = useContext(ProductContext);
  return (
    <span style={style} className={`${styles.productDescription} ${className}`}>
      {name} $ {price}
    </span>
  );
};

export default CartTitle;
