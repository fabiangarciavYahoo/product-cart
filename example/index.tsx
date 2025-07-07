import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ProductCard } from '../.';
import CartImage from '../dist/components/CartImage';
import CartTitle from '../dist/components/CartTitle';
import CartButtons from '../dist/components/CartButtons';

const App = () => {
  return (
    <>
      <ProductCard
        product={{
          id: 1,
          name: 'Coffee Mug - Card',
          image: './coffee-mug.png',
          price: 10,
        }}
        initialValues={{ count: 4, maxCount: 10 }}
      >
        {({ reset, increaseBy, count, isMaxCountReached }) => (
          <>
            <CartImage />
            <CartTitle />
            <CartButtons />
          </>
        )}
      </ProductCard>
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
