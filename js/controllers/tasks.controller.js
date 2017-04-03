'use strict';
// Tasks Controller

function TasksController(){
  this.$addTaskForm = $("#add_task")
  this.$taskDescriptionInput = $("#task_description")
  this.$selectListMenu = $("#select_list")
  this.$taskPriorityInput = $("#task_priority")
  this.$wrapper = $("#wrapper")
}

TasksController.prototype.init = function(){
  this.$addTaskForm.submit((event)=> {
    event.preventDefault()
    var description = this.$taskDescriptionInput.val()
    var priority = this.$taskPriorityInput.val()
    var listId = parseInt(this.$selectListMenu.val())
    var list = List.all[listId]
    var task = new Task(description, priority, list)
    var taskId = task.id
    task.build()
    debugger
    $(`ul[data-id=${listId}]`).children(`li[data-id=${taskId}]`).children('button').click(() => {
      $(`ul[data-id=${listId}]`).children(`li[data-id=${taskId}]`).remove()
    list.tasks[taskId] = null
    })
  })
}
