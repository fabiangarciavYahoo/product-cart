import React from 'react';
import { render } from '@testing-library/react';
import CartButtons from '../../src/components/CartButtons';
import { ProductContext } from '../../src/components/ProductCard';

describe('CartButtons', () => {
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
        <CartButtons className="test-class" />
      </ProductContext.Provider>
    );
    const button = asFragment().querySelector('button');
    if (button) {
      button.click();
    }
    const plaintText = asFragment().textContent;
    console.log('Plain text content:', plaintText);
    expect(asFragment()).toMatchSnapshot();
  });
});
