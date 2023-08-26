function loadPost(params) {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayData(data))
}

function displayData(data) {
    const postsContainer = document.getElementById('posts-container')
    for (const post of data) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
        <h4>User-${post.title}</h4>
        <h5>Post:${post.userId}</h5>
        <p>Post Description:${post.body}</p> 
        `
        postsContainer.appendChild(postDiv)
    }
}

loadPost();