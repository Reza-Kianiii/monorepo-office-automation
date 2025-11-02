import { render } from '@testing-library/react';

import DashboardFeatureUserAndPassComponent from './dashboard-feature-userAndPass-component';

describe('DashboardFeatureUserAndPassComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardFeatureUserAndPassComponent />);
    expect(baseElement).toBeTruthy();
  });
});
