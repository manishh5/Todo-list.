const todolist = [];

rendorTodoList();

function rendorTodoList () {
    let todoListHTML ='';

    todolist.forEach((todoObject, index) => {
        const  { name, duedate} = todoObject;
        const html =`
            <div>${name}</div>
            <div>${duedate}</div>
            <button class="delete-todo-button js-delete-todo-button">delete</button> 
            `; 
        todoListHTML += html;
    });
    
    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todolist.splice(index, 1);
        rendorTodoList();
      });
    });
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const duedate = dateInputElement.value;

    todolist.push({
        name,
        duedate
    });
    
    inputElement.value = '';
    rendorTodoList();
}