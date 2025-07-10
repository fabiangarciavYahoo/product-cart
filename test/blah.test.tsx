import React from 'react';
import { createRoot as reactCreateRoot, Root } from 'react-dom/client';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<div />);
    root.unmount();
  });
});
function createRoot(div: HTMLDivElement): Root {
  return reactCreateRoot(div);
}
