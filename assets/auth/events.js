'use strict'

const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const store = require('../scripts/store')
const signInTemplate = require('../scripts/templates/sign-in.handlebars')
const signUpTemplate = require('../scripts/templates/sign-up.handlebars')

const showSignUp = function () {
  $('#first-page-forms').html('')
  const signUpHtml = signUpTemplate()
  $('#first-page-forms').append(signUpHtml)
  $('#sign-in-form').hide()
}

const showSignIn = function () {
  $('#first-page-forms').html('')
  showPageOne()
  $('#sign-up-form').hide()
}

const showPageOne = function () {
  const signInHtml = signInTemplate()
  $('#first-page-forms').append(signInHtml)
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  console.log('clicked')
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  showPageOne()
  $('#first-page-forms').on('click', '#show-sign-up', showSignUp)
  $('#first-page-forms').on('click', '#show-sign-in', showSignIn)
  $('#first-page-forms').on('submit', '#sign-up-form', onSignUp)
  $('#first-page-forms').on('submit', '#sign-in-form', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
