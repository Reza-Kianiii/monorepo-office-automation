import { render } from '@testing-library/react';

import SharedUtilsMuiTheme from './shared-utils-mui-theme';

describe('SharedUtilsMuiTheme', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUtilsMuiTheme />);
    expect(baseElement).toBeTruthy();
  });
});
