'use strict'

const store = require('../scripts/store')

const signInSuccess = function (data) {
  store.user = data.user
}

module.exports = {
  signInSuccess
}
