import { render } from '@testing-library/react';

import DashboardUtilsReduxStore from './dashboard-utils-redux-store';

describe('DashboardUtilsReduxStore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardUtilsReduxStore />);
    expect(baseElement).toBeTruthy();
  });
});
