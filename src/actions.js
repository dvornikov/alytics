export const RECEIVE_CAMPAIGNS = "RECEIVE_CAMPAIGNS"
export const RECEIVE_GOALS = "RECEIVE_GOALS"
export const RECEIVE_VISIBILITY = "RECEIVE_VISIBILITY"
export const TOGGLE_DIALOG = "TOGGLE_DIALOG"

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

export function fetchData() {
  return dispatch => {
    return fetch('https://gist.githubusercontent.com/mvikharev/b38a14aa90ef5bee205166526629defd/raw/d43b44bb6aae4a784aaa73acda28b29c99b6cf9e/table-data.json')
      .then(response => response.json())
      .then(json => {
        dispatch(receiveGoals(json.goals_list))
        dispatch(receiveCampaigns(json.content))
      })
  }
}
