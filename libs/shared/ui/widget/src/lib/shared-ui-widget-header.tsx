import {
  Breadcrumbs,
  Grid,
  Link,
  Paper,
  Skeleton,
  styled,
  Typography,
} from '@mui/material';

export function SharedUiWidgetHeader({
  title,
  actions,
}: {
  title: string;
  actions?: any;
}) {
  return (
    <Paper className="mt-2 mb-2 h-[100px] flex flex-col justify-between p-2 shadow">
      <div className="flex  justify-between h-full  ">
        <div className="h-full">
          <div
            className="flex items-center justify-between"
            style={{ fontSize: '30px', fontWeight: 'bold' }}
          >
            {title}
          </div>
          <div className="mt-4">مدیریت فرایندها / کارتابل</div>
        </div>
        <div className="flex  items-center">{actions}</div>
      </div>
    </Paper>
  );
}

export default SharedUiWidgetHeader;
