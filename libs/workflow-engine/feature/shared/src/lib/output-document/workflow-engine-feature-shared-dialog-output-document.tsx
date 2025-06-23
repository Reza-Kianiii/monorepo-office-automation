import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useForm, FormProvider } from 'react-hook-form';
import WorkFlowEngineFeatureSharedFormOutPutDocument from './workflow-engine-feature-shared-form-output-document';

export function WorkFlowEngineFeatureSharedDialogOutPutDocument({
  id,
  onclose,
}: {
  id: number;
  onclose: () => void;
}) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    onclose();
  };

  const methods = useForm({
    defaultValues: {
      noteText: '',
      // app_uid: dataInbox?.app_uid,
    },
  });

  // const handleSubmit(){

  // }

  return (
    <React.Fragment>
      <FormProvider {...methods}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth={false}
          fullWidth
        >
          <DialogTitle id="alert-dialog-title">{'اسناد خروجی'}</DialogTitle>
          <DialogContent>
            <WorkFlowEngineFeatureSharedFormOutPutDocument id={id} />
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

export default WorkFlowEngineFeatureSharedDialogOutPutDocument;
