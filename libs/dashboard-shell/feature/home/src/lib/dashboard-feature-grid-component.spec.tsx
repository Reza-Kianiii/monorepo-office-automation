import { render } from '@testing-library/react';

import DashboardFeatureGridComponent from './dashboard-feature-grid-component';

describe('DashboardFeatureGridComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardFeatureGridComponent />);
    expect(baseElement).toBeTruthy();
  });
});
