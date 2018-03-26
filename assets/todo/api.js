'use strict'

const config = require('../scripts/config')
const store = require('../scripts/store')
// const handlebars = require('../templates/list.handlebars')

const createTodo = function (data) {
  // console.log(data)
  // console.log('api')
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
//
// // const getOne = function (data) {
// // console.log('api')
// //   return $.ajax({
// //     url: config.apiOrigin + '/expiration_dates' + store.id,
// //     method: 'POST',
// //     headers: {
// //       contentType: 'application/json',
// //       Authorization: 'Token token=' + store.user.token
// //     },
// //     data
// //   })
// // }
//
// const updateList = function (data) {
//   // console.log(data)
//   // console.log(data.list.id)
//   return $.ajax({
//     url: config.apiOrigin + '/expiration_dates/' + data.list.id,
//     method: 'PATCH',
//     headers: {
//       contentType: 'application/json',
//       Authorization: 'Token token=' + store.user.token
//     },
//     success: function (response) {
//       // console.log('AJAX response from game server', response)
//       return response
//     },
//     data
//     // data: {
//     //   'expiration_date': {
//     //     'date': date,
//     //     'item_name': item_name,
//     //     'category': category
//   })
// }
// // data.list.id,
//
// const showAll = function () {
//   return $.ajax({
//     url: config.apiOrigin + '/expiration_dates/',
//     method: 'GET',
//     headers: {
//       contentType: 'application/json',
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// const getList = function (data) {
//   // console.log(data.expiration_date.id)
//   // console.log(data.list.id)
//   return $.ajax({
//     url: config.apiOrigin + '/expiration_dates/' + data.list.id,
//     method: 'GET',
//     headers: {
//       contentType: 'application/json',
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// const load = function (id) {
//   // console.log(data.expiration_date.id)
//   // console.log(data.list.id)
//   return $.ajax({
//     url: config.apiOrigin + '/expiration_dates/' + id,
//     method: 'GET',
//     headers: {
//       contentType: 'application/json',
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
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
  createTodo
  // load,
  // updateList,
  // showAll,
  // getList,
  // deleteList
}
