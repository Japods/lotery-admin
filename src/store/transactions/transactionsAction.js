import transactionsAPI from "./transactionsAPI";

const GET_TRANSACTIONS = (context, payload) => {
  return new Promise((resolve, reject) => {
    transactionsAPI
      .getTransactions(payload)
      .then((data) => {
        context.commit("SET_TRANSACTIONS", data);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const APROVE_OR_DECLINE = (context, payload) => {
  return new Promise((resolve, reject) => {
    transactionsAPI
      .aprove_or_decline(payload)
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  GET_TRANSACTIONS,
  APROVE_OR_DECLINE
};
