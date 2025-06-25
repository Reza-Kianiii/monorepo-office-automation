import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import WorkFlowEngineFeatureSharedFormNote from './workflow-engine-feature-shared-form-note';
import WorkFlowEngineFeatureSelectEnginsForm from './workflow-engine-feature-select-engings-form';
import { useCreateSelectEngineMutation } from '@office-automation/workflow-engine/data/data-select-engings';

export function WorkFlowEngineFeatureSelectEnginsCreateDialog({
  onclose,
}: {
  onclose: any;
}) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    onclose();
  };

  const [createSelectEngine] = useCreateSelectEngineMutation();

  const methods = useForm({
    defaultValues: {
      Name: null,
      ServerName: null,
      DbName: null,
      DbUserName: null,
      WebAddress: null,
      LocalWebAddress: null,
      PhisicalWebAddress: null,
      EngineType: null,
      Password: null,
      ClientId: null,
      ClientSecret: null,
    },
  });

  const handleSubmit = (value: any) => {
    console.log(value, 'handlesubmit');
    createSelectEngine(value).then((value) => {});
  };

  return (
    <React.Fragment>
      <FormProvider {...methods}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth
          maxWidth={'md'}
        >
          <DialogTitle id="alert-dialog-title">{'موتور ها'}</DialogTitle>
          <DialogContent>
            <WorkFlowEngineFeatureSelectEnginsForm />
          </DialogContent>
          <DialogActions>
            <>
              <Button
                variant="outlined"
                onClick={methods.handleSubmit(handleSubmit)}
              >
                {'ثبت'}
              </Button>
              <Button variant="outlined" onClick={handleClose}>
                {'انصراف'}
              </Button>
            </>
          </DialogActions>
        </Dialog>
      </FormProvider>
    </React.Fragment>
  );
}

export function WorkFlowEngineFeatureSelectEnginsEditDialog({
  data,
  onclose,
}: {
  data: any;
  onclose: any;
}) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    onclose();
  };

  console.log(data, 'datadata');

  const methods = useForm({
    defaultValues: {
      Name: data?.Name,
      ServerName: data?.serverName,
      DbName: data?.DbName,
      DbUserName: data?.DbserName,
      WebAddress: data?.WebAddress,
      LocalWebAddress: data?.localWebAddress,
      PhisicalWebAddress: data?.PhisicalWebAddress,
      EngineType: data.EngineType,
      Password: data?.Password,
      ClientId: data?.ClientId,
      ClientSecret: data?.ClientSecret,
    },
  });

  return (
    <React.Fragment>
      <FormProvider {...methods}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth
          maxWidth={'md'}
        >
          <DialogTitle id="alert-dialog-title">{'موتور ها'}</DialogTitle>
          <DialogContent>
            <WorkFlowEngineFeatureSelectEnginsForm />
          </DialogContent>
          <DialogActions>
            <>
              <Button variant="outlined" onClick={handleClose}>
                {'انصراف'}
              </Button>
            </>
          </DialogActions>
        </Dialog>
      </FormProvider>
    </React.Fragment>
  );
}

export function WorkFlowEngineFeatureSelectEnginsDeleteDialog({
  id,
  onclose,
}: {
  id: number;
  onclose: any;
}) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    onclose();
  };

  return (
    <React.Fragment>
      {/* <FormProvider {...methods}> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth={'md'}
      >
        <DialogTitle id="alert-dialog-title">{'موتور ها'}</DialogTitle>
        <DialogContent>
          {/* <WorkFlowEngineFeatureSharedFormNote /> */}
        </DialogContent>
        <DialogActions>
          <>
            <Button variant="outlined" onClick={handleClose}>
              {'انصراف'}
            </Button>
          </>
        </DialogActions>
      </Dialog>
      {/* </FormProvider> */}
    </React.Fragment>
  );
}
