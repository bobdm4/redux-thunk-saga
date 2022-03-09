const defaultState = {
  users: [],
}
export const SET_USERS = 'SET_USERS'
export const FETCH_USERS = 'FETCH_USERS'

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: action.payload }
    }

    default:
      return state
  }
}

export const setUserAction = payload => ({
  type: SET_USERS,
  payload,
})
export const fetchUserAction = payload => ({
  type: FETCH_USERS,
  payload,
})
