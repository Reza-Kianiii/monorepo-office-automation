import { useGetPermissonMenuMutation } from '@office-automation/shared/data/permission';
import { SharedUiDrawer } from '@office-automation/shared/ui/drawer';
import { PermissonMenu } from 'libs/shared/data/permission/src/lib/permission-shared.models';
import { useEffect, useState } from 'react';
import { accountingDataMenuItems } from '@office-automation/workflow-engine/data/workflow-engine-menu';

export function WorkflowEngineFeatureWorkflowEngineShell() {
  let dictionaryPermission: Record<number, PermissonMenu> = {};
  const [allowedMenuToShow, setAllowedMenuToShow] = useState([]);

  const [getPermissonMenu, { isLoading }] = useGetPermissonMenuMutation();

  useEffect(() => {
    getPermissonMenu({
      payload: {
        AccessMappingID: 1,
      },
    }).then((value) => {
      const uerPermission: PermissonMenu[] = JSON.parse(value.data);

      dictionaryPermission = uerPermission.reduce((acc, item) => {
        acc[item.SystemEntityId] = {
          AccessGroupId: item.AccessGroupId,
          SystemEntityId: item.SystemEntityId,
          Id: item.Id,
          IsChecked: item.IsChecked,
        };
        return acc;
      }, {} as Record<number, PermissonMenu>);

      const menu = accountingDataMenuItems?.map((item) => {
        if (dictionaryPermission[item.id].IsChecked) {
          return item;
        }
      });
      setAllowedMenuToShow(menu);
    });
  }, []);

  // console.log(JSON.parse(data), 'dataworkflowengine');

  return (
    <div>
      <SharedUiDrawer menu={allowedMenuToShow} />
    </div>
  );
}

export default WorkflowEngineFeatureWorkflowEngineShell;
