import { render } from '@testing-library/react';

import AddButton from './shared-ui-button';

describe('AddButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddButton />);
    expect(baseElement).toBeTruthy();
  });
});
