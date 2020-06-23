import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as snackbarActions from '../../state/actions'
import MuiAlert from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar'

function Alert (props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />
  }

  
class SnackbarContainer extends Component {
  render() {
    if (!this.props.open) return null;

    return (
      <Snackbar open={this.props.open} autoHideDuration={6000} onClose={this.props.dismissSnack}>
        <Alert onClose={this.props.dismissSnack} severity={this.props.type}>
          {this.props.message}
        </Alert>
      </Snackbar>
    );
  }
}

function mapStateToProps(state, ownProps) {
    const { Alert } = state
    return {
        open:Alert.open,
        type:Alert.snackProps.type,
        onClose:Alert.snackProps.onClose,
        message:Alert.snackProps.message
    }
}

function mapDispatchToProps(dispatch) {
    return ({
        dismissSnack: () => dispatch(snackbarActions.dismissSnack()),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarContainer)