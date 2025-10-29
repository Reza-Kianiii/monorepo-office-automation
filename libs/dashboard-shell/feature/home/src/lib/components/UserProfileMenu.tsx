import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

interface UserProfileMenuProps {
  onLogout?: () => void;
  onProfileClick?: () => void;
  userName?: string;
}

export const UserProfileMenu: React.FC<UserProfileMenuProps> = ({
  onLogout,
  onProfileClick,
  userName = 'کاربر ارشد',
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'user-profile-menu' : undefined;

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
        <AccountCircleOutlinedIcon className="text-white text-2xl" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
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
            className: 'min-w-[250px] rounded-xl shadow-lg',
          },
        }}
      >
        <div className="p-2">
          <Button
            size="medium"
            className="my-1 w-full justify-start text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <span className="font-medium">{userName}</span>
          </Button>
          <Divider className="my-2" />
          <Button
            size="medium"
            startIcon={
              <AccountCircleOutlinedIcon className="text-gray-600 w-5 h-5" />
            }
            className="my-1 w-full justify-start text-gray-700 hover:bg-gray-50 rounded-lg"
            onClick={() => {
              onProfileClick?.();
              handleClose();
            }}
          >
            {'مشاهده پروفایل'}
          </Button>
          <Divider className="my-2" />
          <Button
            size="medium"
            startIcon={<LogoutOutlinedIcon className="text-red-500 w-5 h-5" />}
            className="my-1 w-full justify-start text-red-500 hover:bg-red-50 rounded-lg"
            onClick={() => {
              onLogout?.();
              handleClose();
            }}
          >
            {'خروج'}
          </Button>
        </div>
      </Popover>
    </>
  );
};

export default UserProfileMenu;
