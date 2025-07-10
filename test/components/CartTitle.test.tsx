import React from 'react';
import { render } from '@testing-library/react';
import CartTitle from '../../src/components/CartTitle';
import { ProductContext } from '../../src/components/ProductCard';

describe('ProductTitle', () => {
  test('renders without crashing with context', () => {
    const mockProduct = {
      id: 1,
      name: 'Test Product',
      price: 100,
      image: 'test-image.jpg',
    };
    const mockContextValue = {
      product: mockProduct,
      counter: 1,
      increaseBy: jest.fn(),
    };
    const { asFragment } = render(
      <ProductContext.Provider value={mockContextValue}>
        <CartTitle style={{ background: 'black' }} />
      </ProductContext.Provider>
    );
    const plainText = asFragment().textContent;
    console.log('Plain text content:', plainText);
    expect(asFragment()).toMatchSnapshot();
  });
});
