'use strict'

const store = require('../scripts/store')

const signUpSuccess = function () {
  $('#sign-up-feedback').removeClass('text-danger')
  $('#sign-up-feedback').addClass('text-success')
  $('#sign-up-feedback').append('You have successfully sign up!')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#sign-up-feedback').removeClass('text-success')
  $('#sign-up-feedback').addClass('text-danger')
  $('#sign-up-feedback').append('Life is tough! Try again!')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#first-page').addClass('hidden')
  $('#second-page, .todo-header').removeClass('hidden')
  $('form').trigger('reset')
}

const signInFailure = function () {
  $('#sign-in-feedback').removeClass('text-success')
  $('#sign-in-feedback').addClass('text-danger')
  $('#sign-in-feedback').append('Life is tough! Try again!')
  $('form').trigger('reset')
}

const signOutSuccess = () => {
  $('#first-page').removeClass('hidden')
  $('#second-page, .todo-header').addClass('hidden')
  $('#sign-in-feedback').text('')
  store.user = null
}

const signOutFailure = () => {
  console.error()
}

const changePasswordSuccess = function (data) {
  $('#change-password-feedback').removeClass('text-danger')
  $('#change-password-feedback').addClass('text-success')
  $('#change-password-feedback').text('Updated successfully!')
  $('form').trigger('reset')
}

const changePasswordFailure = () => {
  $('#change-password-feedback').addClass('text-danger')
  $('#change-password-feedback').removeClass('text-success')
  $('#change-password-feedback').text('Try again!')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
