'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../scripts/store')

const onShowCreate = function (event) {
  event.preventDefault()
  ui.onShowCreateForm()
}

const onCreateTodo = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.data = data
  api.createTodo(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onShowAll = function (event) {
  $('#show-all').prop('disabled', true)
  api.showAll(event)
    .then(ui.onShowAllSuccess)
    .catch(ui.onShowAllFailure)
}

const onShowOne = function (event) {
  event.preventDefault()
  const id = event.target.dataset.id
  api.showOne(id)
    .then(ui.onShowOneSuccess)
    .catch(ui.onShowOneFailure)
}
let id
const onShowUpdate = (event) => {
  event.preventDefault()
  id = $('.panel-title').attr('data-id')
  $('#update-form-id').val(id)
  ui.onShowUpdateForm()
}

const onUpdate = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.update(data, id)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onClear = (event) => {
  event.preventDefault()
  $('#show-all').prop('disabled', false)
  $('#content').empty()
  $('#todo-content').empty()
}

const onDeleteTodo = (event) => {
  event.preventDefault()
  // grab the `data-id` attribute
  const id = event.target.dataset.id
  api.deleteTodo(id)
    .then(ui.onDeleteSuccess)
    .then($('#content').empty())
    .then(onShowAll)
    .catch(ui.onDeleteFailure)
}

const addHandlers = () => {
  $('#todo-content').on('submit', '#create-form', onCreateTodo)
  $('#show-all').on('click', onShowAll)
  $('#content').on('click', '#see-more-button', onShowOne)
  $('#todo-content').on('click', '.todo-update', onShowUpdate)
  $('#todo-content').on('submit', '#update-form', onUpdate)
  $('#clear-button').on('click', onClear)
  $('#todo-content').on('click', '.todo-delete', onDeleteTodo)
  $('#show-create-form').on('click', onShowCreate)
}

module.exports = {
  addHandlers
}
