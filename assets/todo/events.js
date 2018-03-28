'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../scripts/store')

const onCreateTodo = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.data = data

  api.createTodo(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreatefailure)
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
    // .then(() => {
    //   $('#content').empty()
    // })
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onLoadForm = (event) => {
  event.preventDefault()
  console.log(store)
  const id = $('.panel-title').attr('data-id')
  $('#update-form-id').val(id)
  $('#update-form').removeClass('hidden')
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
  $('#create-form').on('submit', onCreateTodo)
  $('#show-all').on('click', onShowAll)
  $('#content').on('click', '#see-more-button', onShowOne)
  $('#content').on('click', '.todo-update', onLoadForm)
  $('#update-form').on('submit', onUpdate)
  $('#clear-button').on('click', onClear)
  $('#content').on('click', '.todo-delete', onDeleteList)
}

module.exports = {
  addHandlers
}
