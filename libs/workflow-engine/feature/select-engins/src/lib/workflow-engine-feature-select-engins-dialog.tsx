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
import {
  useCreateSelectEngineMutation,
  useDeleteSelectEngineMutation,
  useUpdateSelectEngineMutation,
} from '@office-automation/workflow-engine/data/data-select-engings';
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

  const [updateSelectEngine, { isLoading }] = useUpdateSelectEngineMutation();

  const methods = useForm<SelectEnginsTypes>({
    defaultValues: {
      Id: data?.Id,
      Name: data?.Name,
      ServerName: data?.serverName,
      DbName: data?.DbName,
      DbUserName: data?.DbserName,
      WebAddress: data?.WebAddress,
      LocalWebAddress: data?.LocalWebAddress,
      PhisicalWebAddress: data?.PhisicalWebAddress,
      EngineType: data.EngineType,
      Password: data?.Password,
      ClientId: data?.ClientId,
      ClientSecret: data?.ClientSecret,
    },
  });

  const handleSubmit = (value: SelectEnginsTypes) => {
    updateSelectEngine(value).then((value) => {
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

export function WorkFlowEngineFeatureSelectEnginsDeleteDialog({
  data,
  onclose,
}: {
  data: any;
  onclose: any;
}) {
  const [open, setOpen] = React.useState(true);

  const [deleteSelectEngine, { isLoading: isLoadingSelectEngins }] =
    useDeleteSelectEngineMutation();

  const handleClose = () => {
    setOpen(false);
    onclose();
  };

  const handleSubmit = () => {
    deleteSelectEngine({ Id: data?.Id }).then((value) => {
      handleClose();
    });
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth={'sm'}
      >
        <DialogTitle id="alert-dialog-title">{'موتور ها'}</DialogTitle>
        <DialogContent>
          <h5>آیا از حذف ایتم {data?.Name} اطمینان دارید؟</h5>
        </DialogContent>
        <DialogActions>
          <>
            <RegistryButton
              variant="contained"
              onClick={handleSubmit}
              loading={isLoadingSelectEngins}
              color="error"
            />
            <Button variant="outlined" onClick={handleClose}>
              {'انصراف'}
            </Button>
          </>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
