import React from 'react';
import { render } from '@testing-library/react';
import CartImage from '../../src/components/CartImage';
import { ProductContext } from '../../src/components/ProductCard';

describe('CartImage', () => {
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
        <CartImage className="poppet" />
      </ProductContext.Provider>
    );
    const plainText = asFragment().textContent;
    console.log('Plain text content:', plainText);
    expect(asFragment()).toMatchSnapshot();
  });
});
