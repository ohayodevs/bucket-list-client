'use strict'
const store = require('../scripts/store')
// const listEvents = require('./events')
// const showlistsTemplate = require('../templates/list.handlebars')
// const showlistTemplate = require('../templates/partial.handlebars')

const onCreateSuccess = function (data) {
  store.data = data
  console.log(data)
  // const showlistsHtml = showlistsTemplate({ lists: data.expiration_dates })
  // $('#content').append(showlistsHtml)
  // $('input').val('')
  // $('#createsuccessmyModal').modal('show')
  // $('#createmyModal').modal('hide')
  // $('#messageTwo').dequeue()
}

// const onGetOneSuccess = function (data) {
//   store.expiration_date = data.expiration_date
//   // console.log(data.expiration_date)
//
//   $('input').val('')
//   $('#byIdmyModal').modal('hide')
//
//   const showlistHtml = showlistTemplate({ list: data.expiration_date })
//   $('#content').append(showlistHtml)
//   $('#messageTwo').dequeue()
// }
//
// const onGetListFailure = function () {
//   $('input').val('')
//   $('#byIdmyModal').modal('hide')
//   $('#failureModal').modal('show')
//   $('#messageTwo').dequeue()
// }
//
// const getOne = (data) => {
//   store.data = data
//   // console.log(data)
//   // console.log('this is data')
//   // const showlistsHtml = showlistsTemplate({ lists: data.expiration_dates })
//   // $('#content').append(showlistsHtml)
//   // console.log(data.expiration_date.id)
//   $('.oneId').val(data.expiration_date.id)
//   $('.oneDate').val(data.expiration_date.date)
//   $('.oneItem').val(data.expiration_date.item_name)
//   $('.oneCategory').val(data.expiration_date.category)
//   $('#messageTwo').dequeue()
// }
//
// const onUpdateSuccess = function (data) {
//   store.data = data
//   const showlistsHtml = showlistsTemplate({ lists: data.expiration_dates })
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
//   // const showlistsHtml = showlistsTemplate({ lists: data.expiration_dates })
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
// const onShowAllSuccess = function (data) {
//   store.data = data
//
//   if (data.expiration_dates.length >= 1) {
//     const showlistsHtml = showlistsTemplate({ lists: data.expiration_dates })
//     $('#content').append(showlistsHtml)
//     // console.log(data.expiration_dates)
//     $('input').val('')
//     $('#messageTwo').dequeue()
//   } else {
//     $('#noneListModal').modal('show')
//     $('#messageTwo').dequeue()
//   }
// }
//
// const removeList = (data) => {
//   store.data = data
//   const showlistsHtml = showlistsTemplate({ lists: data.expiration_dates })
//   $('#content').append(showlistsHtml)
//   // console.log(data.expiration_dates)
//   // $('input').val('')
//   $('#deletemyModal').modal('show')
//   $('#messageTwo').dequeue()
// }

module.exports = {
  onCreateSuccess
  // onGetOneSuccess,
  // onUpdateSuccess,
  // onUpdateFailure,
  // onShowAllSuccess,
  // removeList,
  // onGetListFailure,
  // getOne
}
