import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';

export const notification = props => {
  const { classes, className, mensagem, variant, exibenotification, ocultanotification } = props;
  return (
    <Snackbar
      id="snackBarnotification"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={exibenotification}
      autoHideDuration={4000}
      onClose={ocultanotification}
      style={{ display: mensagem.length ? 'block' : 'none' }}
    >
      {mensagem.length ? (
        <SnackbarContent
          id="snackBackContent"
          className={classNames(classes[variant], className)}
          aria-describedby="client-snackbar"
          message={mensagem}
          action={[
            <IconButton
              id="iconOcultarnotification"
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={ocultanotification}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      ) : null}
    </Snackbar>
  );
};

notification.defaultProps = {
  variante: 'success',
  mensagem: ''
};

notification.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  mensagem: PropTypes.node || PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
  ocultanotification: PropTypes.func
};

const styles = theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.dark
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
});

export default withStyles(styles)(notification);
