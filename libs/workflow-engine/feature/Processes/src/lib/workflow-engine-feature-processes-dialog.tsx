import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
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
import { WorkFlowEngineFeatureProcessesForm } from './workflow-engine-feature-processes-form';
// import * as React from 'react';
// import Dialog from '@mui/material/Dialog';
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
import { useCreateProjectMutation } from '@office-automation/workflow-engine/data/data-processes';

// import WorkFlowEngineFeatureSharedFormProcessMaker from './workflow-engine-feature-shared-form-process-maker';

export function WorkFlowEngineFeatureProcessesCreateDialog({
  onclose,
}: {
  onclose: () => void;
}) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    onclose();
  };

  const methods = useForm({
    defaultValues: {
      prj_name: '',
      prj_description: '',
      prj_category: '',
    },
  });

  const [createProject] = useCreateProjectMutation();

  const handleSubmit = (value: any) => {
    createProject(value).then((value) => {
      console.log(value, 'valuhjhhahsdhfahsdfahsdfasdfasdf');
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
            <WorkFlowEngineFeatureProcessesForm />
          </DialogContent>
          <DialogActions>
            <>
              <RegistryButton
                variant="outlined"
                onClick={methods.handleSubmit(handleSubmit)}
                // loading={isLoading}
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

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function WorkFlowEngineFeatureProcessesDialog({
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

  const { data: userToken } = useGetUserTokenQuery();

  const { data: dataGetPmWebAddress } = useGetPmWebAddressQuery();

  var protocol = window.location.protocol;
  var Automationurl = window.location.hostname;
  var Automationport = window.location.port;

  const url = React.useMemo(() => {
    return (
      dataGetPmWebAddress +
      'sysworkflow/fa/noavaran/login/login?userToken=' +
      userToken +
      '&engineCode=&WebOfficeURL=' +
      protocol +
      '//' +
      '172.16.193.155' +
      ':' +
      '8080' +
      '&Workspace=sysworkflow&deputy=0&lang=fa&show=1&appUid=' +
      data.app_uid +
      '&delIndex=' +
      data.del_index +
      '&action=' +
      data.app_status
    );
  }, [userToken, dataGetPmWebAddress]);

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
            <Typography
              sx={{ ml: 2, flex: 1 }}
              variant="h6"
              component="div"
            ></Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
          </Toolbar>
        </AppBar>
        <List className="h-full">
          {/* <WorkFlowEngineFeatureSharedFormProcessMaker url={url} /> */}
        </List>
      </Dialog>
    </React.Fragment>
  );
}

// export function WorkFlowEngineFeatureSelectEnginsCreateDialog({
//   onclose,
// }: {
//   onclose: () => void;
// }) {
//   const [open, setOpen] = React.useState(true);

//   const handleClose = () => {
//     setOpen(false);
//     onclose();
//   };

//   const [createSelectEngine, { isLoading }] = useCreateSelectEngineMutation();

//   const methods = useForm<CreateSelectEngineApi>({
//     defaultValues: {
//       Name: '',
//       ServerName: '',
//       DbName: '',
//       DbUserName: '',
//       WebAddress: '',
//       LocalWebAddress: '',
//       PhisicalWebAddress: '',
//       EngineType: '',
//       Password: '',
//       ClientId: '',
//       ClientSecret: '',
//     },
//   });

//   const handleSubmit = (value: any) => {
//     createSelectEngine(value).then((value) => {
//       handleClose();
//     });
//   };

//   return (
//     <React.Fragment>
//       <FormProvider {...methods}>
//         <Dialog
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//           fullWidth
//           maxWidth={'md'}
//         >
//           <DialogTitle id="alert-dialog-title">{'موتور ها'}</DialogTitle>
//           <DialogContent>
//             <WorkFlowEngineFeatureSelectEnginsForm />
//           </DialogContent>
//           <DialogActions>
//             <>
//               <RegistryButton
//                 variant="outlined"
//                 onClick={methods.handleSubmit(handleSubmit)}
//                 loading={isLoading}
//               />

//               <Button variant="outlined" onClick={handleClose}>
//                 {'انصراف'}
//               </Button>
//             </>
//           </DialogActions>
//         </Dialog>
//       </FormProvider>
//     </React.Fragment>
//   );
// }
