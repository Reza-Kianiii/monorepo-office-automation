import { SharedUiDrawer } from '@office-automation/shared/ui/drawer';
import { dashboardDataMenuItems } from '@office-automation/dashboard/data/menu';

export function DashboardFeatureShell() {
  console.log(dashboardDataMenuItems, 'dashboardDataMenuItems');
  return (
    <div>
      {/* <p> این متن صرفا برای تست فونت ها این پروژه است</p> */}
      <SharedUiDrawer menu={dashboardDataMenuItems} />
    </div>
  );
}

export default DashboardFeatureShell;
