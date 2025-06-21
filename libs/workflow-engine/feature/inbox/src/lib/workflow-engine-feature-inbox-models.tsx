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
import WorkFlowEngineFeatureInboxProcessMaker from './workflow-engine-feature-inbox-processMaker';
import { useGetUserTokenQuery } from '@office-automation/workflow-engine/data/data-get-user-token';
import { useGetPmWebAddressQuery } from '@office-automation/workflow-engine/data/data-get-pm-web-address';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import WorkFlowEngineFeatureInboxNotesForm, {
  WorkFlowEngineFeatureInboxIncomingDocumentsForm,
  WorkFlowEngineFeatureInboxOutPutDocumentForm,
  WorkFlowEngineFeatureInboxSummaryForm,
} from './workflow-engine-feature-inbox-form';
import { useForm, FormProvider } from 'react-hook-form';
import { useGetCasesVaribleQuery } from '@office-automation/workflow-engine/data/data-inbox';

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

  console.log(Automationport, 'Automationport');

  const urltest = React.useMemo(() => {
    return (
      dataGetPmWebAddress +
      'sysworkflow/fa/noavaran/login/login?userToken=' +
      data +
      '&engineCode=&WebOfficeURL=' +
      protocol +
      '//' +
      '172.16.193.155' +
      ':' +
      '8080' +
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
        <List className="h-full">
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

export function WorkflowEngineFeatureInboxModelsf({
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

  const methods = useForm<{
    noteText: string;
    app_uid: string;
  }>({
    defaultValues: {
      noteText: '',
      app_uid: dataInbox?.app_uid,
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
            <WorkFlowEngineFeatureInboxNotesForm />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </FormProvider>
    </React.Fragment>
  );
}

export function WorkflowEngineFeatureInboxIncomingDocumentsModels({
  idInbox,
  onclose,
}: {
  idInbox: number;
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
          <DialogTitle id="alert-dialog-title">{'اسناد ورودی'}</DialogTitle>
          <DialogContent>
            <WorkFlowEngineFeatureInboxIncomingDocumentsForm id={idInbox} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </FormProvider>
    </React.Fragment>
  );
}

export function WorkflowEngineFeatureInboxOutPutDocumentModels({
  idInbox,
  onclose,
}: {
  idInbox: number;
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
            <WorkFlowEngineFeatureInboxOutPutDocumentForm id={idInbox} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </FormProvider>
    </React.Fragment>
  );
}

export function WorkflowEngineFeatureInboxSummaryModels({
  inbox,
  onclose,
}: {
  inbox: number;
  onclose: () => void;
}) {
  console.log(inbox, 'idInboxooooooo');

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
          maxWidth={'lg'}
          // maxWidth={false}
          // fullWidth
        >
          <DialogTitle id="alert-dialog-title">{'خلاصه'}</DialogTitle>
          <DialogContent>
            <WorkFlowEngineFeatureInboxSummaryForm inbox={inbox} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </FormProvider>
    </React.Fragment>
  );
}

// const Transition = React.forwardRef(function Transition(
//   props: TransitionProps & {
//     children: React.ReactElement<unknown>;
//   },
//   ref: React.Ref<unknown>
// ) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

export function WorkflowEngineFeatureInboxProcessInformationModels({
  inbox,
  onclose,
}: {
  inbox: any;
  onclose: () => void;
}) {
  console.log(inbox, 'inboxinboxinboxttrtrtetrertertert');

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    onclose();
  };

  console.log(inbox, 'inboxyuyuqywuerqwerqwer');

  const { data } = useGetUserTokenQuery();

  const { data: dataGetPmWebAddress } = useGetPmWebAddressQuery();
  const { data: casesVarible } = useGetCasesVaribleQuery({
    app_uid: inbox?.app_uid,
  });

  var protocol = window.location.protocol;
  var Automationurl = window.location.hostname;
  var Automationport = window.location.port;

  // React.useEffect(() => {
  //   dataGetPmWebAddress +
  //     'sysworkflow/fa-IR/noavaran/designer?prj_uid=' +
  //     casesVarible +
  //     '&prj_readonly=true&app_uid=' +
  //     inbox?.app_uid ++ "&sid="+

  // }, [casesVarible, data]);

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
        <List className="h-full">
          {/* <WorkFlowEngineFeatureInboxProcessMaker
            dataInbox={inbox}
            urltest={urltest}
          /> */}
        </List>
      </Dialog>
    </React.Fragment>
  );
}
