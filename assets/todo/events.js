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
    .catch(ui.onCreatefailure) // TODO
}

const onShowAll = function (event) {
  api.showAll(event)
    .then(ui.onShowAllSuccess)
    .catch(ui.onShowAllFailure)
}
//
const onShowOne = function (event) {
  event.preventDefault()
  const id = $('.panel-title').attr('data-id')
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

// const onDeleteList = (event) => {
//   event.preventDefault()
//   // grab the `data-id` attribute
//   const id = event.target.dataset.id
//
//   api.deleteList(id)
//     .then(() => api.showAll(event))
//     .then($('.content').empty())
//     .then(ui.removeList) // after deleting a list, refetch all lists
//     .catch(ui.failure)
// }
//
// const cancel = function () {
//   $('input').val('')
// }

const addHandlers = () => {
  $('#create-form').on('submit', onCreateTodo)
  $('#show-all').on('click', onShowAll)
  $('#content').on('click', '#see-more-button', onShowOne)
  $('#content').on('click', '.todo-update', onLoadForm)
  $('#update-form').on('submit', onUpdate)
  // $('#content').on('click', '.list-delete', onDeleteList)
}

module.exports = {
  addHandlers
}
