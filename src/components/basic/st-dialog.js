import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const useStyles = makeStyles({
  root: {},
  dialogTitleStyle: {
    '& .MuiTypography-root': {
      fontSize: '.8rem'
    }
  },
  dialogContentTextStyle: {
    '& .MuiDialogContentText-root': {
      fontSize: '.7rem !important'
    }
  }
});

const StDialog = ({ dialogContent, onCloseDialog }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const { isOpen, title, content } = dialogContent;
    setTitle(title);
    setContent(content);
    setOpen(isOpen);
  }, [dialogContent]);

  const handleClose = () => {
    onCloseDialog(false);
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle
          id='alert-dialog-slide-title'
          className={classes.dialogTitleStyle}
        >
          {title}
        </DialogTitle>
        <DialogContent className={classes.dialogContentTextStyle}>
          <DialogContentText id='alert-dialog-slide-description'>
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StDialog;
