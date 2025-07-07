import React, { FC, useContext } from 'react';
import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface CartImageProps {
  className?: string;
}

export const CartImage: FC<CartImageProps> = ({ className }) => {
  const {
    product: { name },
    product,
  } = useContext(ProductContext);
  const { imagePath, onImageError } = useProduct({ product });
  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imagePath}
      alt={name}
      onError={onImageError}
    />
  );
};

export default CartImage;
