import { render } from '@testing-library/react';

import WorkFLowEngineFeatureSettingsComponent from './workflow-engine-feature-settings-component';

describe('WorkFLowEngineFeatureSettingsComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkFLowEngineFeatureSettingsComponent />);
    expect(baseElement).toBeTruthy();
  });
});
