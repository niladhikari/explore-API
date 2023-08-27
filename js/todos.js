function loadTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodo(data))
};

function displayTodo(data) {
    const todoContainer = document.getElementById('todo-container')
    for (const list of data) {
        const div = document.createElement('div');
        div.innerHTML = `
         <h4>User-${list.userId}</h4>
         <h5>post:${list.title}</h5>
        `
        todoContainer.appendChild(div)
    }
}

