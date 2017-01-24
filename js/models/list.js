'use strict';
// List Model
List.all = []

function List (title, tasks = []){
  this.title = title
  this.tasks = tasks
  this.id = List.all.length
  List.all.push(this)
}

List.prototype.listEl = function(){
  return `<div class="list"><h2><button class="destroy-list">x</button> ${this.title}</h2><ul id="list-${this.id}" data-id="${this.id}"></ul></div>`
}

List.prototype.optionEl = function(){
  return `<option value="${this.id}">${this.title}</option>`
}

// Task.prototype.build = function(){
//   $("ul").append(this.liEl())
// }

List.prototype.build = function(){
  $("#lists").append(this.listEl())
  $("#select_list").append(this.optionEl())
}

// '<div class="list"><h2><button class="destroy-list">x</button> Jon's List</h2><ul id="list-0" data-id="data-0"></ul></div>'
//
// '<div class="list"><h2><button class="destroy-list">x</button> Jon's List</h2><ul id="list-0" data-id="0"></ul></div>'.
