import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
const seriesA = {
  data: [2, 3, 1, 4, 5],
  label: 'در دست اقدام',
};
const seriesB = {
  data: [3, 1, 4, 2, 1],
  label: 'انجام شده',
};
const seriesC = {
  data: [3, 2, 4, 5, 1],
  label: 'برگشت شده',
};
const seriesD = {
  data: [3, 2, 4, 5, 1],
  label: 'خوانده شده',
};
const seriesE = {
  data: [3, 2, 4, 5, 1],
  label: 'متوقف شده ها',
};
const seriesF = {
  data: [3, 2, 4, 5, 1],
  label: 'کارتابل مشترک',
};
export function DashboardFeatureChartComponent() {
  return (
    <BarChart
      height={200}
      width={600}
      series={[
        { ...seriesA, stack: 'total' },
        { ...seriesB, stack: 'total' },
        { ...seriesC, stack: 'total' },
        { ...seriesD, stack: 'total' },
        { ...seriesE, stack: 'total' },
        { ...seriesF, stack: 'total' },
      ]}
      // sx={{
      //   // محور‌ها
      //   '& .MuiChartsAxis-root text': { fill: '#fff !important' },
      //   // 👇 Legend بالا (Series A/B/C)
      //   '& .MuiChartsLegend-root text': { fill: '#fff !important' },
      //   '& .MuiChartsLegend-horizontal': { color: '#fff !important' },
      // }}
    />
  );
}

export default DashboardFeatureChartComponent;
