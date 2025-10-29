import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import type { ReactNode } from 'react';

export type CardDescriptor = {
  id: string;
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
  // component is optional; if present it should be a lazy component or a React component
  component?: React.LazyExoticComponent<any> | React.ComponentType<any> | null;
  props?: Record<string, any>;
};

// Map modules to arrays of cards. Keys are module ids used by the selector.
export const moduleCardMap: Record<string, CardDescriptor[]> = {
  hr: [
    {
      id: 'hr-requests',
      title: 'درخواست‌ها',
      subtitle: 'مرخصی و امور پرسنلی',
      icon: <MailIcon sx={{ color: '#4318FF' }} />,
    },
    {
      id: 'hr-people',
      title: 'پرسنل',
      subtitle: 'اطلاعات کاربران',
      icon: <PersonIcon sx={{ color: '#4318FF' }} />,
    },
  ],
  finance: [
    {
      id: 'finance-invoices',
      title: 'فاکتورها',
      subtitle: 'مدیریت مالی',
      icon: <MailIcon sx={{ color: '#4318FF' }} />,
    },
  ],
  common: [
    {
      id: 'common-1',
      title: 'عمومی',
      subtitle: 'ابزارها',
      icon: <MailIcon sx={{ color: '#4318FF' }} />,
    },
  ],
};

export const moduleList = [
  { id: 'hr', label: 'منابع انسانی' },
  { id: 'finance', label: 'مالی' },
  { id: 'common', label: 'عمومی' },
];
