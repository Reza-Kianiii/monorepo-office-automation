import {
  Button,
  ButtonProps,
  SvgIcon,
  Tooltip,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

export function AddButton(props: ButtonProps) {
  return (
    <Button
      variant="contained"
      startIcon={
        <SvgIcon>
          <AddIcon />
        </SvgIcon>
      }
      color="primary"
      {...props}
    >
      {'افزودن'}
    </Button>
  );
}

export function RegistryButton(props: ButtonProps) {
  return (
    <Button variant="contained" color="primary" {...props}>
      {'تایید'}
    </Button>
  );
}
