'use strict'

const store = require('../scripts/store')
// const listEvents = require('./events')
const showTodosTemplate = require('../scripts/templates/todos.handlebars')
const showTodoTemplate = require('../scripts/templates/todo.handlebars')
const showCreateTemplate = require('../scripts/templates/create-form.handlebars')
const showUpdateTemplate = require('../scripts/templates/update-form.handlebars')

const onShowCreateForm = () => {
  const showCreateHtml = showCreateTemplate()
  $('#todo-content').empty()
  $('#todo-content').append(showCreateHtml)
}

const onCreateSuccess = function (data) {
  store.data = data
  $('#create-form-feedback').removeClass('text-danger')
  $('#create-form-feedback').addClass('text-success')
  $('#create-form-feedback').append('You\'re one step closer to making it happen!')
  $('form').trigger('reset')
}

const onCreateFailure = function () {
  $('#create-form-feedback').addClass('text-danger')
  $('#create-form-feedback').removeClass('text-success')
  $('#create-form-feedback').append('Womp! Try that again!')
  $('form').trigger('reset')
}

const onShowAllSuccess = function (data) {
  store.data = data
  const showTodosHtml = showTodosTemplate({ todos: data.todos })
  $('#content').append(showTodosHtml)
}

const onShowOneSuccess = function (data) {
  const showTodoHtml = showTodoTemplate({ todo: data.todo })
  $('#todo-content').empty()
  $('#todo-content').append(showTodoHtml)
}

const onShowOneFailure = function () {
  console.error()
}

const onShowUpdateForm = () => {
  const showUpdateHtml = showUpdateTemplate()
  $('#todo-content').empty()
  $('#todo-content').append(showUpdateHtml)
}

const onUpdateSuccess = function (data) {
  $('#create-form-feedback').removeClass('text-danger')
  $('#create-form-feedback').addClass('text-success')
  $('#create-form-feedback').append('Bucket-list udpated successfully!')
}

const onUpdateFailure = function () {
  $('#create-form-feedback').addClass('text-danger')
  $('#create-form-feedback').removeClass('text-success')
  $('#create-form-feedback').append('Udpate was unsuccessful! Try again!')
  // $('form').trigger('reset')
}

const onDeleteSuccess = () => {
  $('#todo-content').empty()
  $('#delete-feedback').text('Deleted successfully!')
}

module.exports = {
  onShowCreateForm,
  onCreateSuccess,
  onCreateFailure,
  onShowOneSuccess,
  onShowOneFailure,
  onShowUpdateForm,
  onUpdateSuccess,
  onUpdateFailure,
  onShowAllSuccess,
  onDeleteSuccess
}
