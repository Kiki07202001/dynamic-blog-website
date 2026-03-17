function displayPost() {
    const container = document.getElementById('posts');
    if (!container) return;

    container.innerHTML = '';

    let posts = localStorage.getItem('posts');
    if (posts) {
        posts = JSON.parse(posts);
    } else {
        posts = [];
    }

    posts.forEach(function(post, index) {
        const postsDiv = document.createElement('div');
        postsDiv.classList.add('post');
        const title = document.createElement('h2');
        title.textContent = post.title;
        title.classList.add('post.title');

        const content = document.createElement('p');
        content.textContent = post.content;
        content.classList.add('post-content');

        postsDiv.appendChild(title);
        postsDiv.appendChild(content);

        if (post.image) {
            const img = document.createElement('img');
            img.classList.add('post-image');
            img.src = post.image;
            img.width = 200;
            postsDiv.appendChild(img);
        }

         const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-Btn');
            deleteBtn.addEventListener('click', function() {
            posts.splice(index, 1);
            localStorage.setItem('posts', JSON.stringify(posts));
            displayPost();
        });

        postsDiv.appendChild(deleteBtn);

        container.appendChild(postsDiv);
    });
}

document.addEventListener('DOMContentLoaded', displayPost);

// To save post to Local Storage

document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("postForm");
    if (!form) return;


    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;
        const image = document.getElementById("image").value;


    let posts = localStorage.getItem("posts");

    if (posts) {
        posts = JSON.parse(posts);
        } else {
        posts = [];
    }

    const newPost = {
        id: Date.now(),
        title: title,
        content: content,
        image: image
    };

    posts.push(newPost);

    localStorage.setItem("posts", JSON.stringify(posts));

    window.location.href = "index.html";

    });

});