import rewardsAPI from "./rewardsAPI";

const VERIFY_REWARD = (context, payload) => {
  return new Promise((resolve, reject) => {
    rewardsAPI
      .verify_reward(payload)
      .then((data) => {
        console.log("Datada", data.data);
        context.commit("SET_REWARD_INFO", data.data);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const REWARD_REQUEST = (context, payload) => {
  return new Promise((resolve, reject) => {
    rewardsAPI
      .rewards_request(payload)
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  VERIFY_REWARD,
  REWARD_REQUEST,
};
