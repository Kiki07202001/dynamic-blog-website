function displayPost() {
    let post = localStorage.getItem('post')

    if (post) {
        post = localStorage.getItem('post')
    } 

    else {
        post = [];
    }
}

const container = document.getElementById('post')

container.innerHTML = '';

posts.forEach(function(post) {
    const postsDiv = document.createElement('div')
    const title = document.createElement('h2')
    title.textContent = post.title;
    const content = document.createElement('p')
    content.textContent = post.content;

    postsDiv.appendChild(title);
    postsDiv.appendChild(content);

    document.getElementById('container').appendChild(postsDiv);
}
);