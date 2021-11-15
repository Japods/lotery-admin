const SET_AUTH_STATE = (state, auth) => {
  state.token = auth.data.token
}

const SET_INITIAL_STATE = (state) => {
  state.token = ''
  state.admin = ''
  state.name = ''
  state.email = ''
  state.photo = ''
  state._id = ''
  state.token_balance = ''
}

const SET_USER_INFO = (state, user) => {
  state.user_info = user
}

export default {
  SET_AUTH_STATE,
  SET_INITIAL_STATE,
  SET_USER_INFO
}
