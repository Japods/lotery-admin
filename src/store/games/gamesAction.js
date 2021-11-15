import gamesAPI from "./gamesAPI";

const GET_GAME = (context, payload) => {
  return new Promise((resolve, reject) => {
    gamesAPI
      .getGameAPI(payload)
      .then((data) => {
        context.commit("SET_GAME", data.data[0]);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const GET_GAME_HISTORY = (context, payload) => {
  return new Promise((resolve, reject) => {
    gamesAPI
      .getGameHistoryAPI(payload)
      .then((data) => {
        context.commit("SET_GAME_HISTORY", data.data);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const GET_TICKETS_GAME = (context, payload) => {
  return new Promise((resolve, reject) => {
    gamesAPI
      .getTicketsGameAPI(payload)
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const BUY_TICKETS_GAME = (context, payload) => {
  return new Promise((resolve, reject) => {
    gamesAPI
      .ticketGenerateGame(payload)
      .then((data) => {
        context.commit("SET_TICKET_BUY", data.data);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const GET_GAME_POOL = (context, payload) => {
  return new Promise((resolve, reject) => {
    gamesAPI
      .getGamePool(payload)
      .then((data) => {
        context.commit("SET_GAME_POOL", data.data);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const GET_GAME_STATISTIC = (context, payload) => {
  return new Promise((resolve, reject) => {
    gamesAPI
      .getGameStatistic(payload)
      .then((data) => {
        context.commit("SET_GAME_STATISTIC", data.data);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  GET_GAME,
  GET_TICKETS_GAME,
  BUY_TICKETS_GAME,
  GET_GAME_HISTORY,
  GET_GAME_POOL,
  GET_GAME_STATISTIC,
};
