'use strict'
const store = require('../scripts/store')
// const listEvents = require('./events')
const showlistsTemplate = require('../scripts/templates/todos.handlebars')
// const showlistTemplate = require('../templates/partial.handlebars')

const onCreateSuccess = function (data) {
  store.data = data
  console.log(data)
  const showlistsHtml = showlistsTemplate({ todos: data.todos })
  $('#content').append(showlistsHtml)
  $('form').trigger('reset')
  // $('#createsuccessmyModal').modal('show')
  // $('#createmyModal').modal('hide')
  // $('#messageTwo').dequeue()
}

const onIndexAllSuccess = function (data) {
  store.data = data
  const showlistsHtml = showlistsTemplate({ todos: data.todos })
  $('#content').append(showlistsHtml)
  $('input').val('')
}

const onShowOneSuccess = function (data) {
  store.todo = data.todo

  $('input').val('')
  const showlistHtml = showlistTemplate({ todo: data.todo })
  $('#content').append(showlistHtml)
}

const onShowListFailure = function () {
  $('input').val('')
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
// const onUpdateSuccess = function (data) {
//   store.data = data
//   const showlistsHtml = showlistsTemplate({ lists: data.todos })
//   $('input').val('')
//   $('#content').append(showlistsHtml)
//   $('#updatesuccessModal').modal('show')
//   $('#updatemyModal').modal('hide')
//   $('#thisupdatemyModal').modal('hide')
//   $('#your-modal-id').modal('hide')
//   $('body').removeClass('modal-open')
//   $('.modal-backdrop').remove()
//   $('#messageTwo').text('updated successfully')
//   $('#messageTwo').delay(3000).queue(function () {
//     $('#messageTwo').text('Welcome', 'green')
//   })
// }
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
  onShowListFailure,
  // onUpdateSuccess,
  // onUpdateFailure,
  onIndexAllSuccess
  // removeList,
  // onGetListFailure,
  // getOne
}
