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
  $('#delete-feedback').text('')
  $('#todo-content').append(showCreateHtml)
}

const onCreateSuccess = function (data) {
  store.data = data
  $('#create-form-feedback').removeClass('text-danger')
  $('#create-form-feedback').addClass('text-success')
  $('#create-form-feedback').text('You\'re one step closer to making it happen!')
  $('form').trigger('reset')
  $('#content').empty() // keiko added
  $('#show-all').prop('disabled', false) // keiko added
}

const onCreateFailure = function () {
  $('#create-form-feedback').addClass('text-danger')
  $('#create-form-feedback').removeClass('text-success')
  $('#create-form-feedback').text('Womp! Try that again!')
  $('form').trigger('reset')
}

const onShowAllSuccess = function (data) {
  store.data = data
  if (data.todos.length === 0) {
    $('#content').removeClass('text-danger')
    $('#content').addClass('text-success')
    $('#content').text('Add to your Bucket List!')
  } else {
    const showTodosHtml = showTodosTemplate({ todos: data.todos })
    $('#content').append(showTodosHtml)
  }
}

const onShowOneSuccess = function (data) {
  const showTodoHtml = showTodoTemplate({ todo: data.todo })
  $('#todo-content').empty()
  $('#delete-feedback').text('')
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

const onUpdateSuccess = function () {
  $('#update-form-feedback').removeClass('text-danger')
  $('#update-form-feedback').addClass('text-success')
  $('#update-form-feedback').text('Bucket list udpated successfully!')
  $('form').trigger('reset')
  $('#content').empty()
  $('#show-all').prop('disabled', false)
}

const onUpdateFailure = function () {
  $('#update-form-feedback').addClass('text-danger')
  $('#update-form-feedback').removeClass('text-success')
  $('#update-form-feedback').text('Udpate was unsuccessful! Try again!')
  $('form').trigger('reset')
}

const onDeleteSuccess = () => {
  $('#delete-feedback').removeClass('text-danger')
  $('#delete-feedback').addClass('text-success')
  $('#todo-content').empty()
  $('#delete-feedback').text('Deleted successfully!')
}

const onDeleteFailure = () => {
  $('#delete-feedback').addClass('text-danger')
  $('#delete-feedback').removeClass('text-success')
  $('#todo-content').empty()
  $('#delete-feedback').text('Delete was unsuccessful!')
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
  onDeleteSuccess,
  onDeleteFailure
}
