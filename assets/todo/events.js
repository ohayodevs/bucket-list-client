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
const onIndexAll = function (event) {
  api.indexAll(event)
    .then(ui.onIndexAllSuccess)
    .catch(ui.onIndexAllFailure)
}
//
// const onShowbyId = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   // store.data = data
//   // console.log(data)
//   api.getList(data)
//     // .then(() => console.log(data))
//     .then($('.content').empty())
//     .then(ui.onGetOneSuccess)
//     .catch(ui.onGetListFailure)
// }
//
// const onOneLoad = (event) => {
//   event.preventDefault()
//
//   // grab the `data-id` attribute
//   const id = event.target.dataset.id
//   api.load(id)
//     .then(ui.getOne)
// }
//
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
  $('#index-all').on('click', onIndexAll)
  // $('#update').on('submit', onUpdate)
  // $('#find_by_id').on('submit', onShowbyId)
  // $('.cancel').on('click', cancel)
  // $('#content').on('click', '.list-delete', onDeleteList)
  // $('#content').on('click', '.list-update', onOneLoad)
  // $('#content').on('submit', '#updateHtml', onUpdate)
  // $('.close').on('click', cancel)
}

module.exports = {
  addHandlers
}
