const SET_GAME = (state, game) => {
  state.game_info = game
}

const SET_GAME_HISTORY = (state, game) => {
  state.games_history = game
}

const SET_TICKETS_GAME = (state, game) => {
  state.game_tickets = game.game_tickets
}

const SET_OPEN = (state, game) => {
  state.open = game
}

const SET_TICKET_BUY = (state, game) => {
  state.ticket_buy = game
}

const SET_GAME_POOL = (state, game) => {
  state.game_pool = game
}

const SET_GAME_STATISTIC = (state, game) => {
  state.game_statistic = game
}

export default {
  SET_GAME,
  SET_TICKETS_GAME,
  SET_OPEN,
  SET_TICKET_BUY,
  SET_GAME_HISTORY,
  SET_GAME_POOL,
  SET_GAME_STATISTIC
}
