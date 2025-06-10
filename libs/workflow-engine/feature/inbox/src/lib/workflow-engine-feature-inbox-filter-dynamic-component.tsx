import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
export function WorkFlowEngineFeatureInboxFilterDynamicComponent({
  handleClick,
  item,
}: {
  handleClick: (item: any) => void;
  item: any;
}) {
  const selectedFilters = useSelector((state) => state?.inboxFiltersHorizontal);

  const arr = selectedFilters?.requiredVarsByProcess?.[item.ProcessUid] || [];
  const selected = arr.includes(item?.VariableUid);

  return (
    <Button
      variant={selected ? 'contained' : 'outlined'}
      onClick={() => handleClick(item)}
      // className="grow"
      style={{ height: '40px', minWidth: '200px' }}
    >
      {item.VariableName}
    </Button>
  );
}

export default WorkFlowEngineFeatureInboxFilterDynamicComponent;
