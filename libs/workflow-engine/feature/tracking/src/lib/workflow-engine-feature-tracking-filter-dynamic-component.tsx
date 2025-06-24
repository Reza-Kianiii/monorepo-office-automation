import { Button } from '@mui/material';
import { VaribleSelection } from '@office-automation/workflow-engine/data/data-settings';
import { useSelector } from 'react-redux';

export function WorkFlowEngineFeatureTrackingFilterDynamicComponent({
  handleClick,
  item,
}: {
  handleClick: (item: VaribleSelection) => void;
  item: VaribleSelection;
}) {
  const selectedFilters = useSelector(
    (state) => state?.trackingFiltersHorizontal
  );

  const arr = selectedFilters?.requiredVarsByProcess?.[item.ProcessUid] || [];
  const selected = arr.includes(item?.VariableName);

  return (
    <Button
      variant={selected ? 'contained' : 'outlined'}
      onClick={() => handleClick(item)}
      // className="grow"
      style={{ height: '40px', minWidth: '200px' }}
    >
      {item.VariableLable}
    </Button>
  );
}

export default WorkFlowEngineFeatureTrackingFilterDynamicComponent;
