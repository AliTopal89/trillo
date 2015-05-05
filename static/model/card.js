//CardObject
 // description: string
 // completed: boolean
 var Card = function(){
 	this.description = ""
 	this.complete = false
 }

 Card.prototype = {
 	CompleteTask: function(){}
 	this.complete = this.complete == false? true: false
 };