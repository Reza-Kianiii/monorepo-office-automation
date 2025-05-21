import { render } from '@testing-library/react';

import DashboardFeatureHome from './dashboard-feature-home-component';

describe('DashboardFeatureHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardFeatureHome />);
    expect(baseElement).toBeTruthy();
  });
});
