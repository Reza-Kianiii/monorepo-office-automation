import {
  Breadcrumbs,
  Grid,
  Link,
  Paper,
  Skeleton,
  styled,
  Typography,
} from '@mui/material';

export function SharedUiWidgetHeader({ title }: { title: string }) {
  return (
    <Paper className="mt-2 mb-2 h-[100px] flex flex-col justify-between p-2 shadow">
      <div
        className="flex items-center justify-between"
        style={{ fontSize: '30px', fontWeight: 'bold' }}
      >
        {title}
      </div>
      <div>مدیریت فرایندها / کارتابل</div>
    </Paper>
  );
}

export default SharedUiWidgetHeader;
