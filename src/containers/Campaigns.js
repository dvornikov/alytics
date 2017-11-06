import { connect } from 'react-redux'
import Campaigns from '../components/Campaigns'

const mapStateToProps = ({ campaigns, goals, visibility }) => {
  return {
    campaigns,
    goals,
    visibility
  }
}

export default connect(
  mapStateToProps
)(Campaigns)
