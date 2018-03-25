'use strict'

const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
// const signInOut = require('./signinOut')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  console.log(this)
  console.log(data)
  console.log('EVENTS')
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const showSignUp = function () {
  $('#sign-up-form').toggle()
  $('#sign-in-form').toggle()
  console.log('events')
}

const showSignIp = function () {
  $('#sign-up-form').toggle()
  $('#sign-in-form').toggle()
  console.log('events')
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
//
// const onChangePassword = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//
//   api.changePassword(data)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure)
// }
//
// const onSignOut = function (event) {
//   event.preventDefault()
//
//   api.signOut()
//     .then(ui.signOutSuccess)
//     .catch(ui.signOutFailure)
// }
//
const addHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#change-sign-up').on('click', showSignUp)
  $('#change-sign-in').on('click', showSignIp)
  $('#sign-in-form').on('submit', onSignIn)
  // $('#changeModal').on('submit', onChangePassword)
  // $('#signout').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
