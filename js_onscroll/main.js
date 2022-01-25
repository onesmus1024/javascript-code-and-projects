
var task_added=''



var form = document.getElementById('myform')
form.addEventListener('submit',(event) =>{
    event.preventDefault()
    var task_added =event.currentTarget.task_input.value
    if(task_added!='')
    {
        var area = document.getElementById('taskArea');
        area.className='taskArea';
        var task = document.querySelector('ul');
        var tasks = document.createElement('p')
        tasks.textContent=task_added;
        form.task_input.value=task_added;
        area.appendChild(tasks);
        
        
    }
    event.currentTarget.task_input.value=''

});



