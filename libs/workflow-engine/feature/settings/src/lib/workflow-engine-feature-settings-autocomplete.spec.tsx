import { render } from '@testing-library/react';

import WorkflowEngineFeatureSettingsAutocomplete from './workflow-engine-feature-settings-autocomplete';

describe('WorkflowEngineFeatureSettingsAutocomplete', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WorkflowEngineFeatureSettingsAutocomplete />
    );
    expect(baseElement).toBeTruthy();
  });
});
