import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { useGetUserTokenQuery } from '@office-automation/workflow-engine/data/data-get-user-token';
import { useGetPmWebAddressQuery } from '@office-automation/workflow-engine/data/data-get-pm-web-address';
import { useGetCasesVaribleQuery } from '@office-automation/workflow-engine/data/data-inbox';

export function WorkFlowEngineFeatureSharedDialogProcessInformation({
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
  const { data: casesVarible } = useGetCasesVaribleQuery({
    app_uid: data?.app_uid,
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
          {/* <WorkFlowEngineFeatureInboxProcessMaker
            dataInbox={inbox}
            urltest={urltest}
          /> */}
        </List>
      </Dialog>
    </React.Fragment>
  );
}

export default WorkFlowEngineFeatureSharedDialogProcessInformation;
