import styles from '../styles/styles.module.css';
import { IProductContextProps, ProductCardComponent } from '../interfaces';
import React, { createContext } from 'react';
import CartImage from './CartImage';
import CartButtons from './CartButtons';
import CartTitle from './CartTitle';
import useProduct from '../hooks/useProduct';

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

const ProductCard: ProductCardComponent = ({
  children,
  product,
  className = '',
  style = {},
  onChange,
  value,
  initialValues,
}) => {
  const {
    counter,
    increaseBy,
    maxCount,
    reset,
    isMaxCountReached,
  } = useProduct({
    product,
    onChange,
    value,
    initialValues,
  });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children({
          count: counter,
          isMaxCountReached: isMaxCountReached(),
          maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};

ProductCard.Image = CartImage;
ProductCard.Title = CartTitle;
ProductCard.Buttons = CartButtons;

export default ProductCard;
