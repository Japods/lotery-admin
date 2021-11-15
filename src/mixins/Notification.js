import Vue from 'vue'

export default {
  methods: {
    showNotification (message) {
      Vue.$toast.open({
        message: message,
        type: 'default',
        position: 'bottom'
        // all of other options may go here
      })
    }
  }
}
