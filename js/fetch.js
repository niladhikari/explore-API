// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

/**
fetch using for another website data load to own website
 */
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1') 
      .then(response => response.json()) // when for see the data to convart to json
      .then(json => console.log(json))
}