const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');
const addTask = document.querySelector('#addTask');

function addTasks(){
    if(inputBox.value ===''){
        alert('enter a task!')
    } 
    else{
        let li = document.createElement('li');
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);

        let span =document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

addTask.addEventListener('click',addTasks);

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem ("data");
}
showTask();