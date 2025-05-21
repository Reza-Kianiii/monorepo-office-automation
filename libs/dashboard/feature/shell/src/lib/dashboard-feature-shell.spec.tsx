import { render } from '@testing-library/react';

import DashboardFeatureShell from './dashboard-feature-shell';

describe('DashboardFeatureShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardFeatureShell />);
    expect(baseElement).toBeTruthy();
  });
});
