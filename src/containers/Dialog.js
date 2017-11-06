import { connect } from 'react-redux'
import Dialog from '../components/Dialog'
import { toggleDialog } from '../actions'

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
        }
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialog)
