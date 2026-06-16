const inputForm = document.querySelector('.task-input');
const inputDate = document.querySelector('.date');
const addBtn = document.querySelector('.add-btn');
const taskList = document.querySelector('.task-list');


window.addEventListener('load', () => {
 displayTasks();
 TaskListBtnEvent();
});
addBtn.addEventListener('click', () => {
 if(!inputForm.value) {
  const errorMsg = document.querySelector('.error-msg');
  errorMsg.classList.add('show');
  return;
 }
 let taskId = setTaskId();
 const task = {
  id: taskId,
  content: inputForm.value,
  date: inputDate.value ? formattedDate(inputDate.value) : null,
 }
 taskList.innerHTML += createTaskElement(task); 
 TaskListBtnEvent();
 saveLocalStorage(task);
 inputForm.value = '';
 inputDate.value = '';
});
inputForm.addEventListener('keyup', () => {
  const errorMsg = document.querySelector('.error-msg');
  if(errorMsg.classList.contains('show')) {
    if(inputForm.value !== '') {
      errorMsg.classList.remove('show');
    }
  }
});
const createTaskElement = (task) => {
    return `<li class="task-item" data-task-id="${task.id}">
    ${task.content}
    <div class="item-wrapper">
     ${task.date ? `<div class="item-date">期日:${task.date}</div>`:''} 
     <div class="item-btn">
      <button class="btn complete-btn">完了</button>
      <button class="btn delete-btn" data-task-id="${task.id}">削除</button>
     </div>
    </div>
   </li>`;
}
const saveLocalStorage = (task) => { 
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


const displayTasks = () => {
 taskList.innerHTML = '';

  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  if(tasks.length !== 0) {

    tasks.forEach((task) => {
  
      taskList.innerHTML += createTaskElement(task);
    });
  }
}
const setTaskId = () => {
 const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
 if(tasks.length !== 0) {
  const task = tasks[tasks.length - 1];
  return task.id + 1;
 }
 return 1;
}
const formattedDate = (dateString) => {
 const selectedDate = new Date(dateString);
 const year = selectedDate.getFullYear();
 const month = selectedDate.getMonth() + 1; 
 const day = selectedDate.getDate();
 const getDay = selectedDate.getDay();
 const daysOfWeek = ['日','月','火','水','木','金','土'];
 const dayOfWeek = daysOfWeek[getDay];
    
 return `${year}年${month}月${day}日(${dayOfWeek})`;  
}
const TaskListBtnEvent = () => {
  const deleteBtns = document.querySelectorAll('.delete-btn');
  const compBtns = document.querySelectorAll('.complete-btn');
  deleteBtns.forEach((deleteBtn) => {
  deleteBtn.addEventListener('click', (e) => {
  const deleteTarget = e.target.closest('.task-item');
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const targetId = deleteTarget.closest('li').dataset.taskId;
  const updatedTasks = tasks.filter(task => task.id !== parseInt(targetId));
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  taskList.removeChild(deleteTarget.closest('li'));
  });
});
compBtns.forEach((compBtn) => {
  compBtn.addEventListener('click', (e) => {
      const compTarget = e.target.closest('li');
      compTarget.classList.toggle('complete');
  });
});
}