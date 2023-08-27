function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
};

function displayComment(data) {
    const commentContainer = document.getElementById('comment-container');
   for (const comment of data) {
       const divPost = document.createElement('div');
       divPost.classList.add('post')
       divPost.innerHTML = `
       <h3>PostId-${comment.postId}</h3>
       <h4>Post Tital: ${comment.name}</h4>
       <h4>User Email: ${comment.email}</h4>
       <p>Post Discription: ${comment.body}</p>
       `
       commentContainer.appendChild(divPost)
   }
}