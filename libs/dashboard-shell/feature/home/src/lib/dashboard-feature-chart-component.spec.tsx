import { render } from '@testing-library/react';

import DashboardFeatureChartComponent from './dashboard-feature-chart-component';

describe('DashboardFeatureChartComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardFeatureChartComponent />);
    expect(baseElement).toBeTruthy();
  });
});
