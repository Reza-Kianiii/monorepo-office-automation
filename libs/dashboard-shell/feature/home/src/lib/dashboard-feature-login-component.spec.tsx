import { render } from '@testing-library/react';

import DashboardFeatureLoginComponent from './dashboard-feature-login-component';

describe('DashboardFeatureLoginComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardFeatureLoginComponent />);
    expect(baseElement).toBeTruthy();
  });
});
