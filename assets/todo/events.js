'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../scripts/store')

const onCreateTodo = function (event) {
  event.preventDefault()
  // console.log(event)
  // console.log(event.target)
  const data = getFormFields(event.target)
  store.data = data

  api.createTodo(data)
    // .then(() => api.showAll(event))
    // .then($('.content').empty())
    .then(ui.onCreateSuccess)
    // .catch(ui.onCreatefailure)
}

// const onUpdate = function (event) {
//   const data = getFormFields(this)
//   // console.log(data)
//   event.preventDefault()
//   store.data = data
//
//   // const data = {
//   //   date: store.date,
//   //   item_name: store.item_name,
//   //   category: store.category
//   // }
//
//   api.updateList(data)
//     .then(() => api.showAll(event))
//     .then($('.content').empty())
//     .then(ui.onUpdateSuccess)
//     .catch(ui.onUpdateFailure)
// }
//
const onShowAll = function (event) {
  api.indexAll(event)
    .then(ui.onShowAllSuccess)
    .catch(ui.onShowAllFailure)
}
//
const onShowOne = function (event) {
  event.preventDefault()
  const data = $('.panel-title').attr('data-id')
  console.log(data)
  api.showOne(data)
    .then(ui.onShowOneSuccess)
    .catch(ui.onShowOneFailure)
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
  $('#index-all').on('click', onShowAll)
  // $('#update').on('submit', onUpdate)
  $('#content').on('click', '#see-more-button', onShowOne)
  // $('.cancel').on('click', cancel)
  // $('#content').on('click', '.list-delete', onDeleteList)
  // $('#content').on('click', '.list-update', onOneLoad)
  // $('#content').on('submit', '#updateHtml', onUpdate)
  // $('.close').on('click', cancel)
}

module.exports = {
  addHandlers
}
