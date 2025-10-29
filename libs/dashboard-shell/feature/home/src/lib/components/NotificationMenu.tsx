import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  type: 'info' | 'warning' | 'success' | 'error';
}

interface NotificationMenuProps {
  notifications?: Notification[];
  onNotificationClick?: (id: string) => void;
  onClearAll?: () => void;
  onMarkAllRead?: () => void;
}

export const NotificationMenu: React.FC<NotificationMenuProps> = ({
  notifications = [],
  onNotificationClick,
  onClearAll,
  onMarkAllRead,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'notification-menu' : undefined;

  const getNotificationColor = {
    info: 'bg-blue-50 text-blue-700',
    warning: 'bg-yellow-50 text-yellow-700',
    success: 'bg-green-50 text-green-700',
    error: 'bg-red-50 text-red-700',
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        className="w-10 h-10 rounded-full hover:bg-white/10 transition-all duration-200 flex items-center justify-center relative"
        sx={{
          border: '2px solid rgba(255,255,255,0.2)',
          '&:hover': {
            border: '2px solid rgba(255,255,255,0.5)',
          },
        }}
      >
        <NotificationsActiveIcon className="text-white text-2xl" />
        {unreadCount > 0 && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-xs text-white">
            {unreadCount}
          </div>
        )}
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        slotProps={{
          paper: {
            className: 'min-w-[350px] max-w-[400px] rounded-xl shadow-lg',
          },
        }}
      >
        <div className="p-2">
          <div className="flex justify-between items-center px-2 py-3">
            <Typography variant="h6" className="text-gray-800 font-medium">
              اعلان‌ها
            </Typography>
            <div className="flex gap-2">
              <Button
                size="small"
                variant="text"
                className="text-blue-600 text-sm"
                onClick={onMarkAllRead}
              >
                علامت‌گذاری همه به‌عنوان خوانده‌شده
              </Button>
            </div>
          </div>
          <Divider />
          <div className="max-h-[400px] overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                اعلان جدیدی وجود ندارد
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 cursor-pointer transition-all duration-200 hover:bg-gray-50 ${
                    !notification.isRead ? 'bg-gray-50' : ''
                  }`}
                  onClick={() => onNotificationClick?.(notification.id)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <Typography className="font-medium text-gray-800">
                        {notification.title}
                      </Typography>
                      <Typography className="text-sm text-gray-600 mt-1">
                        {notification.message}
                      </Typography>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ml-2 ${
                        getNotificationColor[notification.type]
                      }`}
                    >
                      {notification.time}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
          {notifications.length > 0 && (
            <>
              <Divider />
              <div className="p-2 flex justify-center">
                <Button
                  size="small"
                  variant="text"
                  className="text-gray-600 text-sm"
                  onClick={onClearAll}
                >
                  پاک کردن همه اعلان‌ها
                </Button>
              </div>
            </>
          )}
        </div>
      </Popover>
    </>
  );
};

export default NotificationMenu;
