import { combineReducers } from 'redux'
import campaigns from './campaigns'
import goals from './goals'
import visibility from './visibility'

export default combineReducers({
    campaigns,
    goals,
    visibility
})
