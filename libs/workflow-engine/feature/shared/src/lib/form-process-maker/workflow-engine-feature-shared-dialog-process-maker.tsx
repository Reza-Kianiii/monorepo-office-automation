import * as React from 'react';
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
import WorkFlowEngineFeatureSharedFormProcessMaker from './workflow-engine-feature-shared-form-process-maker';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function WorkFlowEngineFeatureSharedDialogProcessMaker({
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
          <WorkFlowEngineFeatureSharedFormProcessMaker url={url} />
        </List>
      </Dialog>
    </React.Fragment>
  );
}

export default WorkFlowEngineFeatureSharedDialogProcessMaker;
