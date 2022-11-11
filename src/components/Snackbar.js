import * as React from 'react';
import { useState, forwardRef, useImperativeHandle } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
// import Fade from '@mui/material/Fade';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default forwardRef(function SnackbarAlert(props, ref) {

    const { severity, alertMsg } = props;
    const [open, setOpen] = useState(false);

    // const handleClick = () => {
    //     setOpen(true);
    // };
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useImperativeHandle(ref, () => ({
        handleClick() {
            setOpen(true);
        }
    }))
    return (
        <>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}
            // TransitionComponent={Fade}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {alertMsg}
                </Alert>
            </Snackbar>
            {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
        </>
    );
})