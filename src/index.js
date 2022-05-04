import './style.css';

const myTodo = [
  {
    task: 'Microverse recap',
    progress: false,
    index: 0,
  },
  {
    task: 'Buy grocery',
    progress: false,
    index: 1,
  },
  {
    task: 'Cleaning house',
    progress: false,
    index: 2,
  },
  {
    task: 'Loundery',
    progress: false,
    index: 3,
  },
];
const toDoListFunc = () => {
  const sect = document.getElementById('myList');
  for (let i = 0; i <= myTodo.length; i += 1) {
    const toDoList = document.createElement('div');
    toDoList.className = 'addedTasks';
    const script = `<input type="checkbox" id="list" name="list" value="text">
<label for="vehicle1">${myTodo[i].task}</label>
<div class='icons'>
<i class="fa-solid fa-ellipsis-vertical"></i>
</div>
<hr>`;

    toDoList.innerHTML = script;
    sect.appendChild(toDoList);
  }
};
toDoListFunc();