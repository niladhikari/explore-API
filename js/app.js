
function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
}

function userLoad() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json(res))
    .then(data => display(data))
}

function display(data) {
    console.log(data);
}