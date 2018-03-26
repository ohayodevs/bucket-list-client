'use strict'

const store = require('../scripts/store')

const signInSuccess = function (data) {
  store.user = data.user
  console.log(store)
}

module.exports = {
  signInSuccess
}
