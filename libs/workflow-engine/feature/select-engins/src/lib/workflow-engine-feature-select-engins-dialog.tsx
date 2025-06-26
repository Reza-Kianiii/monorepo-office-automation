import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import WorkFlowEngineFeatureSelectEnginsForm from './workflow-engine-feature-select-engings-form';
import { useCreateSelectEngineMutation } from '@office-automation/workflow-engine/data/data-select-engings';
import { RegistryButton } from '@office-automation/shared/ui/button';
import {
  CreateSelectEngineApi,
  SelectEnginsTypes,
} from 'libs/workflow-engine/data/data-select-engins/src/lib/data-select-engins-models';

export function WorkFlowEngineFeatureSelectEnginsCreateDialog({
  onclose,
}: {
  onclose: () => void;
}) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    onclose();
  };

  const [createSelectEngine, { isLoading }] = useCreateSelectEngineMutation();

  const methods = useForm<CreateSelectEngineApi>({
    defaultValues: {
      Name: '',
      ServerName: '',
      DbName: '',
      DbUserName: '',
      WebAddress: '',
      LocalWebAddress: '',
      PhisicalWebAddress: '',
      EngineType: '',
      Password: '',
      ClientId: '',
      ClientSecret: '',
    },
  });

  const handleSubmit = (value: any) => {
    createSelectEngine(value).then((value) => {
      handleClose();
    });
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
              <RegistryButton
                variant="outlined"
                onClick={methods.handleSubmit(handleSubmit)}
                loading={isLoading}
              />

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
  data: SelectEnginsTypes;
  onclose: any;
}) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    onclose();
  };

  console.log(data, 'datadata');

  const methods = useForm<SelectEnginsTypes>({
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
        <DialogContent></DialogContent>
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
