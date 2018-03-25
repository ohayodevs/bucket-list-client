'use strict'

const config = require('../scripts/config')
// const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data // :data has to be the same as perimiter in this function
  })
}

const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}
//
// const changePassword = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + '/change-password/',
//     method: 'PATCH',
//     headers: {
//       contentType: 'application/json',
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }
//
// const signOut = function () {
//   return $.ajax({
//     url: config.apiOrigin + '/sign-out/',
//     method: 'DELETE',
//     headers: {
//       contentType: 'application/json',
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  signUp,
  signIn
  // changePassword,
  // signOut
}
