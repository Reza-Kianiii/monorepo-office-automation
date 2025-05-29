import { render } from '@testing-library/react';

import SharedUiHeaderWidget from './shared-ui-header-widget';

describe('SharedUiHeaderWidget', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiHeaderWidget />);
    expect(baseElement).toBeTruthy();
  });
});
