import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notification from './notification';
import { notificationActions } from '../redux';

export class NotificationContainer extends Component {
  state = {
    exibenotification: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.reduxProps.exibenotification !== prevState.exibenotification) {
      return { exibenotification: nextProps.reduxProps.exibenotification };
    } else return prevState;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.reduxProps.exibenotification !==
      nextProps.reduxProps.exibenotification
    );
  }

  render() {
    return (
      <React.Fragment>
        <Notification
          {...{
            ...this.props.reduxProps,
            ocultanotification: this.props.ocultanotification
          }}
        />
      </React.Fragment>
    );
  }
}
NotificationContainer.defaultProps = {
  reduxProps: {}
}

NotificationContainer.prototypes = {
  reduxProps: PropTypes.object.isRequired,
  ocultanotification: PropTypes.func.isRequired
};

const mapStateToProps = ({ notification }) => {
  return {
    reduxProps: {
      mensagem: notification.mensagem,
      exibenotification: notification.exibenotification,
      variant: notification.variant
    }
  };
};
const mapDispatchToProps = {
  ...notificationActions
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationContainer);
