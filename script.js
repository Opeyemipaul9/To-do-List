const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container')
const addBtn = document.getElementById('buttons');

// Saving task to local storage
function saveTask(){
    localStorage.setItem('data', listContainer.innerHTML);
 }


 function addTask(){
    if(inputBox.value === ''){
        alert('You must write Something');
    }else{
        let li = document.createElement('li');
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.textContent = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value= '';
    saveTask();
 }


// Event Listeners
 listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveTask();
        
    } 
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
       saveTask();
    }
 }, false);

addBtn.addEventListener('click', addTask);


// Loading task on page Load 
 function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
 }
 showTask();