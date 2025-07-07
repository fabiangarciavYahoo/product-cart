import { CSSProperties, FC, JSX } from 'react';

export interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
}

export interface ISelectMenuProps {
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface IProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: IProduct;
  maxCount?: number;
}

interface IInitialValues {
  count?: number;
  maxCount?: number;
}
export interface IProductCardProps {
  children: (args: IProductCartHandler) => JSX.Element;
  product: IProduct;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: IOnChangeArguments) => void;
  value?: number;
  initialValues?: IInitialValues;
}

interface IProductStyles {
  style?: CSSProperties;
  className?: string;
}

export interface ProductCardComponent extends FC<IProductCardProps> {
  Image: FC<IProductStyles>;
  Title: FC<IProductStyles>;
  Buttons: FC<IProductStyles>;
}

export interface IStylesComponent {}

export interface IOnChangeArguments {
  product: IProduct;
  count: number;
}

export interface IProductCartHandler {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: IProduct;
  increaseBy: (value: number) => void;
  reset: () => void;
}
