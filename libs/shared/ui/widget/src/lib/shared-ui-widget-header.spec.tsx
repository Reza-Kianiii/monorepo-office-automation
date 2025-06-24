import { render } from '@testing-library/react';

import SharedUiWidgetHeader from './shared-ui-widget-header';

describe('SharedUiWidgetHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiWidgetHeader />);
    expect(baseElement).toBeTruthy();
  });
});
