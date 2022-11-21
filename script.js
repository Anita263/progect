let todosContainer = document.querySelector('.todos');
let todoInput = document.querySelector('#todoInput');
let addButton = document.querySelector('#addTodo');
let todoList = {
    items: [{
      id: Math.round(Math.random() * 10000000000),
        text: 'Сделать ДЗ',
        completed: false,
      },
      {
        id: Math.round(Math.random() * 10000000000),
        text: 'Узнать больше про модули',
        completed: false,
      },
      {
        id: Math.round(Math.random() * 10000000000),
        text: 'Помочь одногруппнику понять тему',
        completed: false,
      },
      {
        id: Math.round(Math.random() * 10000000000),
        text: 'Сходить за продуктами',
        completed: true,

    }
         ],
      printAll: function() {
   todosContainer.innerText = '';  
for (let i of this.items){
let todoContainer = document.createElement('div')
let todoText = document.createElement('div')
let deleteBtn = document.createElement('img')
let completedBtn = document.createElement('img')

todoText.innerText = i.text;
deleteBtn.src = './img/icons/trash.png';
completedBtn.src = './img/icons/completed.png';

completedBtn.addEventListener('click',()=> this.completed(i.id));
deleteBtn.addEventListener('click',()=> this.deleteTodo(i.id));

todoContainer.append(todoText);
todoContainer.append(deleteBtn);
todoContainer.append(completedBtn);

todoContainer.classList.add('todo');
completedBtn.classList.add('icon');
deleteBtn.classList.add('icon');

if (i.completed){
    todoContainer.classList.add('completed')
    completedBtn.src = './img/icons/not-completed.png';
}
todosContainer.append(todoContainer);
    }
      },
    addTodo: function() {
        let todo = todoInput.value;
        if (todo !==''){
           todoList.items.push({id: Math.round(Math.random() * 10000000000),
            text: todo, completed: false
        })
        todoList.printAll();
         }
         todoInput.value = '';
        },
        completed: function(id) {
            for(let i of this.items){
                if(i.id === id){
                    i.completed = !i.completed;
                }
                    }
                    this.printAll();
      },
      deleteTodo: function(id) {
        for(let i = 0; i < this.items.length; i++) {
          if (id === this.items[i].id){
            this.items.splice(i, 1);
          }
        }
        this.printAll();
      }
    }
addButton.addEventListener('click', todoList.addTodo);
todoList.printAll();



// remove: function(index) {
//       this.items.splice(index, 1);
// },

// print: function(index) {},

// complete: function(index) {},