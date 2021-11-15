import authAPI from './authAPI'

const LOGIN_TO = (context, payload) => {
  return new Promise((resolve, reject) => {
    authAPI
      .loginAPI(payload)
      .then((data) => {
        context.commit('SET_AUTH_STATE', data)
        context.commit('SET_USER_INFO', data.data.user)
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

const INITIAL_STATE = (context) => {
  context.commit('SET_INITIAL_STATE')
}

export default {
  LOGIN_TO,
  INITIAL_STATE,
}
