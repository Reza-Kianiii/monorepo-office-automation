import { render } from '@testing-library/react';

import DashboardFeatureCardsComponent from './dashboard-feature-cards-component';

describe('DashboardFeatureCardsComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardFeatureCardsComponent />);
    expect(baseElement).toBeTruthy();
  });
});
