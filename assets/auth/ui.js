'use strict'

const store = require('../scripts/store')

const signUpSuccess = function () {
  $('#sign-up-feedback').removeClass('text-danger')
  $('#sign-up-feedback').addClass('text-success')
  $('#sign-up-feedback').append('You have successfully sign up!')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  console.log('failure message')
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
