import { useCallback, useEffect, useRef, useState } from 'react';
import { IOnChangeArguments, IProduct } from '../interfaces';

const FALLBACK_IMAGE = '/no-image.jpg';

interface IUseProductsProps {
  product: IProduct;
  onChange?: (args: IOnChangeArguments) => void;
  value?: number;
  initialValues?: {
    count?: number;
    maxCount?: number;
  };
}

interface IUseProducts {
  counter: number;
  increaseBy: (value: number) => void;
  imagePath: string;
  onImageError: (event: React.SyntheticEvent<HTMLImageElement>) => void;
  maxCount?: number;
  reset: () => void;
  isMaxCountReached: () => boolean;
}

const useProduct = ({
  product,
  onChange,
  value = 0,
  initialValues,
}: IUseProductsProps): IUseProducts => {
  const isMounted = useRef(false);
  const { image = FALLBACK_IMAGE } = product || {};
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const [imagePath, setImagePath] = useState<string>(image);
  const isOnChangeFunction = useRef(!!onChange);
  const { maxCount } = initialValues || {};

  const increaseBy = (value: number) => {
    if (initialValues?.maxCount && counter + value > initialValues.maxCount)
      return;
    if (isOnChangeFunction.current) {
      return onChange?.({ product, count: Math.max(counter + value, 0) });
    }
    onChange && onChange({ product, count: Math.max(counter + value, 0) });
    setCounter((prev) => Math.max(prev + value, 0));
  };

  const onImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setImagePath(FALLBACK_IMAGE);
    event.currentTarget.onerror = null;
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  const isMaxCountReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
    imagePath,
    onImageError,
    maxCount: initialValues?.maxCount,
    reset,
    isMaxCountReached,
  };
};

export default useProduct;
