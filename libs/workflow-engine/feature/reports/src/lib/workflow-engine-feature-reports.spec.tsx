import { render } from '@testing-library/react';

import WorkFlowEngineFeatureReports from './workflow-engine-feature-reports';

describe('WorkFlowEngineFeatureReports', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkFlowEngineFeatureReports />);
    expect(baseElement).toBeTruthy();
  });
});
