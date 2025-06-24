import { render } from '@testing-library/react';

import WorkFlowEngineFeatureSettingsVaribleSelector from './workflow-engine-feature-settings-varibleSelector';

describe('WorkFlowEngineFeatureSettingsVaribleSelector', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WorkFlowEngineFeatureSettingsVaribleSelector />
    );
    expect(baseElement).toBeTruthy();
  });
});
