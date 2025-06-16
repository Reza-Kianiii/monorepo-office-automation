import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {
  customDispatch,
  toggleButton,
  useGetBindVaribleSelectionsQuery,
} from '@office-automation/workflow-engine/data/data-inbox';
import { VaribleSelection } from '@office-automation/workflow-engine/data/data-settings';
import { store } from '@office-automation/workflow-engine/utils/redux-store';
import { useEffect, useReducer, useRef } from 'react';

import WorkFlowEngineFeatureInboxFilterDynamicComponent from './workflow-engine-feature-inbox-filter-dynamic-component';
import { access } from 'fs';

export function WorkFlowEngineFeatureInboxHorizontalFilter({
  handleClick,
  listDictionaryItemsWorkFlowEngine,
}: {
  handleClick: (item: any) => void;
  listDictionaryItemsWorkFlowEngine: any;
}) {
  const { data: bindVaribleSelections } = useGetBindVaribleSelectionsQuery();
  let converInJsonBindVaribleSelections: VaribleSelection[] = [];

  if (bindVaribleSelections) {
    converInJsonBindVaribleSelections = JSON.parse(bindVaribleSelections);
  }
  console.log(converInJsonBindVaribleSelections, 'kkkkkkk');

  useEffect(() => {
    if (converInJsonBindVaribleSelections.length) {
      const result = {};
      for (const item of converInJsonBindVaribleSelections) {
        result[item.VariableName] = item;
      }
      listDictionaryItemsWorkFlowEngine.current = result;
    }
  }, [converInJsonBindVaribleSelections.length]);

  // console.log();

  // const select=

  return (
    <ButtonGroup
      variant="outlined"
      // aria-label="Basic button group "
      className="flex w-full items-end overflow-auto"
    >
      {converInJsonBindVaribleSelections.map(
        (item: VaribleSelection, index) => {
          console.log(item, 'itemitemitemitemitem');
          return (
            item.VariableUid && (
              // <Button
              //   variant={'outlined'}
              //   onClick={() => handleClick(item)}
              //   className="grow"
              //   style={{ height: '40px', minWidth: '200px' }}
              // >
              //   {item.VariableName}
              // </Button>
              <WorkFlowEngineFeatureInboxFilterDynamicComponent
                handleClick={handleClick}
                item={item}
              />
            )
          );
        }
      )}
    </ButtonGroup>
  );
}

export default WorkFlowEngineFeatureInboxHorizontalFilter;
