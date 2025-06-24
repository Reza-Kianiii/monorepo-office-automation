import {
  customDispatch,
  toggleButton,
  useGetBindVaribleSelectionsQuery,
} from '@office-automation/workflow-engine/data/data-inbox';
import { VaribleSelection } from '@office-automation/workflow-engine/data/data-settings';
import { useEffect } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import WorkFlowEngineFeatureTrackingFilterDynamicComponent from './workflow-engine-feature-tracking-filter-dynamic-component';

export function WorkFlowEngineFeatureTrankingHorizontalFilters({
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

  useEffect(() => {
    if (converInJsonBindVaribleSelections.length) {
      const result = {};
      for (const item of converInJsonBindVaribleSelections) {
        result[item.VariableName] = item;
      }
      listDictionaryItemsWorkFlowEngine.current = result;
    }
  }, [converInJsonBindVaribleSelections.length]);

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
              <WorkFlowEngineFeatureTrackingFilterDynamicComponent
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

export default WorkFlowEngineFeatureTrankingHorizontalFilters;
