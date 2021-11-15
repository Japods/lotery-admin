import Vue from 'vue'
const getGameAPI = template => {
  const token = template ? template.token : ''

  const config = {
    headers: {
      Authorization: token
    }
  }

  return new Promise((resolve, reject) => {
    Vue.axios
      .get('game?status=1', config)
      .then(data => {
        resolve(data.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

const getGameHistoryAPI = template => {
  const token = template ? template.token : ''

  const config = {
    headers: {
      Authorization: token
    }
  }

  return new Promise((resolve, reject) => {
    Vue.axios
      .get('game?status=2', config)
      .then(data => {
        resolve(data.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

const getTicketsGameAPI = template => {
  const token = template ? template.token : ''

  const config = {
    headers: {
      Authorization: token
    }
  }

  return new Promise((resolve, reject) => {
    Vue.axios
      .get(`game/${template.id}/tickets`, config)
      .then(data => {
        resolve(data.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

const buyTicketGame = template => {
  const token = template ? template.token : ''

  const config = {
    headers: {
      Authorization: token
    }
  }

  return new Promise((resolve, reject) => {
    Vue.axios
      .get(`game/${template.id}/tickets`, config)
      .then(data => {
        resolve(data.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

const ticketGenerateGame = template => {
  const token = template ? template.token : ''

  const config = {
    headers: {
      Authorization: token
    }
  }

  const body = {
    ticket_value: template.ticket_value
  }

  return new Promise((resolve, reject) => {
    Vue.axios
      .post(`game/${template.id}/generate-tickets`, body, config)
      .then(data => {
        resolve(data.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

const getGamePool = template => {
  const token = template ? template.token : ''

  const config = {
    headers: {
      Authorization: token
    }
  }

  return new Promise((resolve, reject) => {
    Vue.axios
      .get('game/pool', config)
      .then(data => {
        resolve(data.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

const getGameStatistic = template => {
  const token = template ? template.token : ''

  const config = {
    headers: {
      Authorization: token
    }
  }

  return new Promise((resolve, reject) => {
    Vue.axios
      .get('admin/statistic', config)
      .then(data => {
        resolve(data.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export default {
  getGameAPI,
  getTicketsGameAPI,
  buyTicketGame,
  ticketGenerateGame,
  getGameHistoryAPI,
  getGamePool,
  getGameStatistic
}
