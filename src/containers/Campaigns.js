import { connect } from 'react-redux'
import Campaigns from '../components/Campaigns'
import { toggleDialog } from '../actions'

const mapStateToProps = ({ campaigns, goals, visibility }) => {
  return {
    campaigns,
    goals,
    visibility: visibility.data
  }
}

const mapDispatchToProps = dispatch => {
    return {
        onHeadClick: () => {
            dispatch(toggleDialog());
        }
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Campaigns)
