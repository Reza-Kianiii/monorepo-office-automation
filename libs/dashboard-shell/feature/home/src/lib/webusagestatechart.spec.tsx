import { render } from '@testing-library/react';

import DashboardFeatureHomeWebUsageState from './dashboard/feature/home/webusagestatechart';

describe('DashboardFeatureHomeWebUsageState', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardFeatureHomeWebUsageState />);
    expect(baseElement).toBeTruthy();
  });
});
