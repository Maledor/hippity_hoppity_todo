//factory function
function createTodo(task, date, category){
  var todo = {};
  todo.task = task; //setting the property (task attribute)
  todo.date = date; //setting the property (date attribute)
  todo.category = category; //setting the property (category attribute)
  return todo;
}

//Example
//var one = createTodo ('get some bacon', '1/1/2017', 'groceries');
//var two = createTodo ('cry in the car', 'now', 'emotions');
//console.log(one);
//console.log(two);
