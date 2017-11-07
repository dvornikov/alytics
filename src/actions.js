export const RECEIVE_CAMPAIGNS = "RECEIVE_CAMPAIGNS"
export const RECEIVE_GOALS = "RECEIVE_GOALS"
export const TOGGLE_DIALOG = "TOGGLE_DIALOG"
export const RECEIVE_VISIBILITY = "RECEIVE_VISIBILITY"
export const VISIBILITY_UPDATE = "VISIBILITY_UPDATE"
export const VISIBILITY_UPDATE_SUCCESS = "VISIBILITY_UPDATE_SUCCESS"

function receiveCampaigns(payload) {
  return {
    type: RECEIVE_CAMPAIGNS,
    payload
  }
}

function receiveGoals(payload) {
  return {
    type: RECEIVE_GOALS,
    payload
  }
}

export function toggleDialog() {
  return {
    type: TOGGLE_DIALOG
  }
}

function receiveVisibility(payload) {
  return {
    type: RECEIVE_VISIBILITY,
    payload
  }
}

function visibilityUpdateSuccess() {
  return {
    type: VISIBILITY_UPDATE_SUCCESS
  }
}

export function updateVisibility(visibility) {
  return {
    type: VISIBILITY_UPDATE,
    payload: visibility
  }
}

export function syncVisibility(visibility) {
  return dispatch => {
    dispatch(updateVisibility(visibility))
    return fetch('/visibility', {
        method: 'put',
        body: JSON.stringify(visibility),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(json => {
        dispatch(toggleDialog())
        dispatch(visibilityUpdateSuccess())
      })
  }
}

export function fetchVisibility() {
  return dispatch => {
    return fetch('/visibility')
      .then(response => response.json())
      .then(json => {
        dispatch(receiveVisibility(json))
      })
  }
}

export function fetchData() {
  return dispatch => {
    return fetch('/campaigns')
      .then(response => response.json())
      .then(json => {
        dispatch(receiveGoals(json.goals_list))
        dispatch(receiveCampaigns(json.content))
      })
  }
}
