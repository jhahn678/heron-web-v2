import React from "react";
import Dialog from '@mui/material/Dialog'
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import Button from "@mui/material/Button"
import { useModalStore } from "../../hooks/store/useModalStore";

const Modal = () => {

    const { title, body, visible, setVisible } = useModalStore()
    
    return (
        <Dialog open={visible}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{body}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setVisible(false)}>Dismiss</Button>
            </DialogActions>
        </Dialog>
    );
};

export default Modal;
