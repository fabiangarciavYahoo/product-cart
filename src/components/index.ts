import ProductCartHOC from './ProductCard';
import CartButtons from './CartButtons';
import CartImage from './CartImage';
import CartTitle from './CartTitle';

export * from './CartImage';
export * from './CartTitle';
export * from './CartButtons';

export const ProductCard = Object.assign(ProductCartHOC, {
  Image: CartImage,
  Title: CartTitle,
  Buttons: CartButtons,
});
export default ProductCard;
