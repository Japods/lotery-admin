import Vue from "vue";
const getTransactions = (template) => {
  const token = template ? template.token : "";

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const params = {
    status: template.status,
    type: template.type,
  };

  return new Promise((resolve, reject) => {
    Vue.axios
      .get("admin/transactions", { params }, config)
      .then((data) => {
        resolve(data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const aprove_or_decline = (template) => {
  const token = template ? template.token : "";

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const body = {
    status: template.status,
  };

  return new Promise((resolve, reject) => {
    Vue.axios
      .put(`admin/transactions?id=${template.transaction_id}`, body, config)
      .then((data) => {
        resolve(data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  getTransactions,
  aprove_or_decline,
};
