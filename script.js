// To display posts
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
    const img = document.createAElement("img");
    img.src = post.image;
    img.width = 200;

    postsDiv.appendChild(title);
    postsDiv.appendChild(content);
    postsDiv.appendChild(img)

    document.getElementById('container').appendChild(postsDiv);
}
);

// To save post to Local Storage

document.addEventListener("DOMContentLoaded", function() {

const form = document.getElementById("postForm");

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