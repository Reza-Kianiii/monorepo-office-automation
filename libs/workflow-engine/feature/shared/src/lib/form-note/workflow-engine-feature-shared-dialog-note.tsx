import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import { useGetUserTokenQuery } from '@office-automation/workflow-engine/data/data-get-user-token';
import { useGetPmWebAddressQuery } from '@office-automation/workflow-engine/data/data-get-pm-web-address';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import { useForm, FormProvider } from 'react-hook-form';
import { useGetCasesVaribleQuery } from '@office-automation/workflow-engine/data/data-inbox';
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
          maxWidth={false}
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
