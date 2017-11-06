import { connect } from 'react-redux'
import Dialog from '../components/Dialog'

const mapStateToProps = ({ visibility, goals }) => {
  return {
    visibility,
    goals
  }
}

export default connect(
  mapStateToProps
)(Dialog)
