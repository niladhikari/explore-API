

function userLoad2() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data))
}

function displayUser(data) {
    // const usersContainer = document.getElementById('users-container');
    const ul = document.getElementById('users-list');
    for (const user  of data) {
       const li = document.createElement('li');
       li.innerText = user.name;
       ul.appendChild(li);
    }
}