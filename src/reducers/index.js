import { combineReducers } from 'redux'
import campaigns from './campaigns'
import goals from './goals'
import visibility from './visibility'
import dialog from './dialog'

export default combineReducers({
    campaigns,
    goals,
    visibility,
    dialog
})
