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

const onUpdate = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('update form ', data)
  api.update(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onShowUpdate = (event) => {
  event.preventDefault()
  const id = $('.panel-title').attr('data-id')
  $('#update-form-id').val(id)
  $('#update-form').removeClass('hidden')
  ui.onShowUpdateForm()
}

const onClear = (event) => {
  event.preventDefault()
  $('#show-all').prop('disabled', false)
  $('#content').empty()
  $('#todo-content').empty()
}

const onDeleteList = (event) => {
  event.preventDefault()
  // grab the `data-id` attribute
  const id = event.target.dataset.id
  console.log(id)
  api.deleteTodo(id)
    .then($('#content').empty())
    .then(onShowAll)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#todo-content').on('submit', '#create-form', onCreateTodo)
  $('#show-all').on('click', onShowAll)
  $('#content').on('click', '#see-more-button', onShowOne)
  $('#todo-content').on('click', '.todo-update', onShowUpdate)
  $('#todo-content').on('submit', '#update-form', onUpdate)
  $('#clear-button').on('click', onClear)
  $('#content').on('click', '.todo-delete', onDeleteList)
  $('#show-create-form').on('click', onShowCreate)
}

module.exports = {
  addHandlers
}
