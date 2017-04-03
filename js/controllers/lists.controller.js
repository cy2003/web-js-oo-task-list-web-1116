'use strict';
// Lists Controller
function ListsController() {
  this.$addListForm = $("#add_list")
  this.$listTitleInput = $("#list_title")
  this.$selectListMenu = $("#select_list")
  this.$addTaskForm = $("#add_task")
  this.$wrapper = $("#wrapper")
}

ListsController.prototype.init = function(){
  this.$addTaskForm.hide()
  this.$addListForm.submit((event)=> {
    event.preventDefault()
    var list = new List(this.$listTitleInput.val())
    list.build()
    $(`ul#list-${list.id}`).parent().children('h2').children('button').click(() => {
      $(`ul#list-${list.id}`).closest('div').remove()
    })
    this.$addTaskForm.show()
  })
}
