import { render } from '@testing-library/react';

import SharedUiDrawer from './shared-ui-drawer';

describe('SharedUiDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiDrawer />);
    expect(baseElement).toBeTruthy();
  });
});
