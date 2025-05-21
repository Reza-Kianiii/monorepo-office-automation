import { render } from '@testing-library/react';

import Test from './dashboard-data-menu';

describe('Test', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Test />);
    expect(baseElement).toBeTruthy();
  });
});
