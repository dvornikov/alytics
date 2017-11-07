import { connect } from 'react-redux'
import Dialog from '../components/Dialog'
import { toggleDialog, syncVisibility } from '../actions'

const mapStateToProps = ({ visibility, goals, dialog }) => {
  return {
    visibility,
    goals,
    dialog
  }
}

const mapDispatchToProps = dispatch => {
    return {
        onCancel: () => {
          dispatch(toggleDialog());
        },
        onUpdate: (visibility) => {
          dispatch(syncVisibility(visibility));
        }
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialog)
