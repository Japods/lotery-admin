import Vue from "vue";
const verify_reward = (template) => {
  const token = template ? template.token : "";

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const body = {
    user: template.user,
    ticket_value: template.ticket_value,
  };

  return new Promise((resolve, reject) => {
    Vue.axios
      .put("admin/validate", body, config)
      .then((data) => {
        resolve(data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const rewards_request = (template) => {
  const token = template ? template.token : "";

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const body = {
    bank: template.bank,
    ci: template.ci,
    user: template.user,
    phone_number: template.phone_number,
    game_id: template.game_id,
  };

  return new Promise((resolve, reject) => {
    Vue.axios
      .put("admin/withdraw", body, config)
      .then((data) => {
        resolve(data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  verify_reward,
  rewards_request,
};
