'use strict'

const store = require('../scripts/store')
// const listEvents = require('./events')
const showTodosTemplate = require('../scripts/templates/todos.handlebars')
const showTodoTemplate = require('../scripts/templates/todo.handlebars')

const onCreateSuccess = function (data) {
  store.data = data
  const showTodosHtml = showTodosTemplate({ todos: data.todos })
  $('#content').append(showTodosHtml)
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

// const getOne = (data) => {
//   store.data = data
//   // console.log(data)
//   // console.log('this is data')
//   // const showlistsHtml = showlistsTemplate({ lists: data.todos })
//   // $('#content').append(showlistsHtml)
//   // console.log(data.todo.id)
//   $('.oneId').val(data.todo.id)
//   $('.oneDate').val(data.todo.date)
//   $('.oneItem').val(data.todo.item_name)
//   $('.oneCategory').val(data.todo.category)
//   $('#messageTwo').dequeue()
// }
//
const onUpdateSuccess = function (data) {
  $('form').trigger('reset')
}

const onUpdateFailure = function () {
  console.error()
}
//
// const onUpdateFailure = function () {
//   // store.data = data
//   // const showlistsHtml = showlistsTemplate({ lists: data.todos })
//   $('input').val('')
//   // $('#content').append(showlistsHtml)
//   $('#updatemyModal').modal('hide')
//   $('#failureModal').modal('show')
//   $('#messageTwo').dequeue()
//   // $('#your-modal-id').modal('hide')
//   // $('body').removeClass('modal-open')
//   // $('.modal-backdrop').remove()
// }
//

//
// const removeList = (data) => {
//   store.data = data
//   const showlistsHtml = showlistsTemplate({ lists: data.todos })
//   $('#content').append(showlistsHtml)
//   // console.log(data.todos)
//   // $('input').val('')
//   $('#deletemyModal').modal('show')
//   $('#messageTwo').dequeue()
// }

module.exports = {
  onCreateSuccess,
  onShowOneSuccess,
  onShowOneFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onShowAllSuccess
}
