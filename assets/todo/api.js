'use strict'

const config = require('../scripts/config')
const store = require('../scripts/store')
// const handlebars = require('../templates/list.handlebars')

const createTodo = function (data) {
  return $.ajax({
    url: config.apiUrl + '/todos',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const update = function (data) {
  console.log('in api data is', data)
  return $.ajax({
    url: config.apiUrl + '/todos/' + data.todo.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showAll = function () {
  return $.ajax({
    url: config.apiUrl + '/todos',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}
//
const showOne = function (id) {
  return $.ajax({
    url: config.apiUrl + '/todos/' + id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}
//
// const deleteList = function (id) {
//   // console.log(id)
//   return $.ajax({
//     url: config.apiOrigin + '/expiration_dates/' + id,
//     method: 'DELETE',
//     headers: {
//       contentType: 'application/json',
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  createTodo,
  update,
  showAll,
  showOne
  // deleteList
}
