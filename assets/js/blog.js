
function toggleMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}

const toggleModeButton = document.getElementById('toggleMode');
if (toggleModeButton) {
  toggleModeButton.addEventListener('click', toggleMode);
}


function displayBlogPosts() {
  let existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  const postList = document.getElementById('postList');
  postList.innerHTML = ''; 

  existingPosts.forEach(function(post) {
      const postElement = document.createElement('div');
      postElement.classList.add('blog-post');

      const titleElement = document.createElement('h3');
      titleElement.textContent = post.title;

      const authorElement = document.createElement('p');
      authorElement.textContent = `By ${post.username}`;

      const contentElement = document.createElement('p');
      contentElement.textContent = post.content;

      postElement.appendChild(titleElement);
      postElement.appendChild(authorElement);
      postElement.appendChild(contentElement);

      postList.appendChild(postElement);
  });
}

displayBlogPosts();

function displayLocalStorage() {
  const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
  console.log(blogPosts);
}

displayLocalStorage();