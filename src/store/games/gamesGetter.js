const GET_GAME_INFO = state => {
  return state.game_info
}

const GET_GAME_HISTORY = state => {
  return state.games_history
}

const GET_GAME_TICKETS = state => {
  return state.game_tickets
}

const GET_OPEN = state => {
  return state.open
}

const GET_TICKET_BUY = state => {
  return state.ticket_buy
}

const GET_GAME_POOL = state => {
  return state.game_pool
}

const GET_GAME_STATISTIC = state => {
  return state.game_statistic
}

export default {
  GET_GAME_INFO,
  GET_GAME_TICKETS,
  GET_OPEN,
  GET_TICKET_BUY,
  GET_GAME_HISTORY,
  GET_GAME_POOL,
  GET_GAME_STATISTIC
}
