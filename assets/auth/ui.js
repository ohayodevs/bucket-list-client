'use strict'

const store = require('../scripts/store')

const signUpSuccess = () => {
  $('#sign-up-feedback').removeClass('text-danger')
  $('#sign-up-feedback').addClass('text-success')
  $('#sign-up-feedback').text('You have successfully sign up!')
  $('form').trigger('reset')
}

const signUpFailure = () => {
  $('#sign-up-feedback').removeClass('text-success')
  $('#sign-up-feedback').addClass('text-danger')
  $('#sign-up-feedback').text('Life is tough! Try again!')
  $('form').trigger('reset')
}

const signInSuccess = (data) => {
  store.user = data.user
  $('#first-page, #clear-button').addClass('hidden')
  $('#second-page, .todo-header').removeClass('hidden')
  $('form').trigger('reset')
}

const signInFailure = () => {
  $('#sign-in-feedback').removeClass('text-success')
  $('#sign-in-feedback').addClass('text-danger')
  $('#sign-in-feedback').text('Did you sign up yet?!')
  $('form').trigger('reset')
}

const signOutSuccess = () => {
  $('#first-page, #clear-button').removeClass('hidden')
  $('#second-page, .todo-header').addClass('hidden')
  $('#content').empty()
  $('#todo-content').empty()
  $('#delete-feedback').empty()
  $('#sign-in-feedback').text('')
  $('#show-all').prop('disabled', false)
  store.user = null
}

const signOutFailure = () => {
  console.error()
}

const changePasswordSuccess = (data) => {
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
