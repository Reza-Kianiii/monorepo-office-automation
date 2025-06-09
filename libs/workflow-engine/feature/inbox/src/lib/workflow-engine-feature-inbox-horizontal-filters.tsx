import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {
  toggleButton,
  useGetBindVaribleSelectionsQuery,
} from '@office-automation/workflow-engine/data/data-inbox';
import { VaribleSelection } from '@office-automation/workflow-engine/data/data-settings';
import { store } from '@office-automation/workflow-engine/utils/redux-store';
import { useReducer, useRef } from 'react';

export function WorkFlowEngineFeatureInboxHorizontalFilter() {
  const processRequiredVars = useRef({});
  const { data: bindVaribleSelections } = useGetBindVaribleSelectionsQuery();
  let converInJsonBindVaribleSelections: VaribleSelection[] = [];

  if (bindVaribleSelections) {
    converInJsonBindVaribleSelections = JSON.parse(bindVaribleSelections);
    console.log(JSON.parse(bindVaribleSelections), 'kkkkkkk');
  }

  const handleClick = (item: any) => {
    const { ProcessUid, VariableUid } = item;

    // اگر processUid هنوز وجود نداره، ایجادش کن با آرایه جدید
    if (!processRequiredVars.current[ProcessUid]) {
      processRequiredVars.current[ProcessUid] = [VariableUid];
    } else {
      // اگر وجود داره، بررسی کن که مقدار تکراری نباشه، بعد اضافه کن
      if (!processRequiredVars.current[ProcessUid].includes(VariableUid)) {
        processRequiredVars.current[ProcessUid].push(VariableUid);
      } else {
        const filterd = processRequiredVars.current[ProcessUid].filter(
          (item, index) => item !== VariableUid
        );

        if (filterd.length === 0) {
          // اگر بعد از حذف آرایه خالی شد، کل key را پاک کن
          delete processRequiredVars.current[ProcessUid];
        } else {
          // در غیر این صورت مقدار جدید را اختصاص بده
          processRequiredVars.current[ProcessUid] = filterd;
        }
      }
    }

    console.log(processRequiredVars.current, 'processRequiredVars');
  };

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
              <Button
                onClick={() => handleClick(item)}
                className="grow"
                style={{ height: '40px', minWidth: '200px' }}
              >
                {item.VariableName}
              </Button>
            )
          );
        }
      )}
    </ButtonGroup>
  );
}

export default WorkFlowEngineFeatureInboxHorizontalFilter;
