import { render } from '@testing-library/react';

import WorkFlowEngineDataMenuItem from './workflow-engine-data-menu-item';

describe('WorkFlowEngineDataMenuItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkFlowEngineDataMenuItem />);
    expect(baseElement).toBeTruthy();
  });
});
