import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

export default function AutohideSnackbar(porps) {
  const [open, setOpen] = React.useState(false);

  setOpen(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="This Snackbar will be dismissed in 5 seconds."
      />
    </div>
  );
}
