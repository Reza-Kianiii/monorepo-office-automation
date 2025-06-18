import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import WorkFlowEngineFeatureInboxProcessMaker from './workflow-engine-feature-inbox-processMaker';
import { useGetUserTokenQuery } from '@office-automation/workflow-engine/data/data-get-user-token';
import { useGetPmWebAddressQuery } from '@office-automation/workflow-engine/data/data-get-pm-web-address';
import { styled } from '@mui/material/styles';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import WorkFlowEngineFeatureInboxForm from './workflow-engine-feature-inbox-form';
import { Box } from '@mui/material';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function WorkflowEngineFeatureInboxModelsProcessMaker({
  dataInbox,
  onclose,
}: {
  dataInbox: any;
  onclose: () => void;
}) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    onclose();
  };

  const { data } = useGetUserTokenQuery();

  const { data: dataGetPmWebAddress } = useGetPmWebAddressQuery();

  var protocol = window.location.protocol;
  var Automationurl = window.location.hostname;
  var Automationport = window.location.port;

  console.log(dataInbox, 'datainboxmodels');

  const urltest = React.useMemo(() => {
    return (
      dataGetPmWebAddress +
      'sysworkflow/fa/noavaran/login/login?userToken=' +
      data +
      '&engineCode=&WebOfficeURL=' +
      protocol +
      '//' +
      Automationurl +
      ':' +
      Automationport +
      '&Workspace=sysworkflow&deputy=0&lang=fa&show=1&appUid=' +
      dataInbox.app_uid +
      '&delIndex=' +
      dataInbox.del_index +
      '&action=' +
      dataInbox.app_status
    );
  }, [data, dataGetPmWebAddress]);

  console.log(urltest, 'urlurlurlurl');

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
          </Toolbar>
        </AppBar>
        <List>
          <WorkFlowEngineFeatureInboxProcessMaker
            dataInbox={dataInbox}
            urltest={urltest}
          />
        </List>
      </Dialog>
    </React.Fragment>
  );
}

// export default WorkflowEngineFeatureInboxModels;

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function WorkflowEngineFeatureInboxModelsf({
  dataInbox,
  onclose,
}: {
  dataInbox: any;
  onclose: () => void;
}) {
  console.log(dataInbox, 'qqqqqqqqqqqqqq');

  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    onclose();
  };

  const methods = useForm({
    defaultValues: {
      noteText: '',
      app_uid: dataInbox?.app_uid,
    },
  });

  // const handleSubmit(){

  // }

  return (
    <FormProvider {...methods}>
      <BootstrapDialog
        dir="ltr"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        maxWidth={'lg'}
        open={open}
        fullWidth

        // style={{ width: '900px' }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            // right: 8,
            // top: 8,
            left: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <WorkFlowEngineFeatureInboxForm />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
          <Button>Save changes</Button>
        </DialogActions>
      </BootstrapDialog>
    </FormProvider>
  );
}
