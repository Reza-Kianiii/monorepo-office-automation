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

export function WorkFlowEngineFeatureSharedDialogNote({
  data,
  onclose,
}: {
  data: any;
  onclose: () => void;
}) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    onclose();
  };

  const methods = useForm<{
    noteText: string;
    app_uid: string;
  }>({
    defaultValues: {
      noteText: '',
      app_uid: data?.app_uid,
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
          <DialogTitle id="alert-dialog-title">{'یادداشت ها'}</DialogTitle>
          <DialogContent>
            <WorkFlowEngineFeatureSharedFormNote />
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

export default WorkFlowEngineFeatureSharedDialogNote;
