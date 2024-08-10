function handleFormSubmission(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const blogTitle = document.getElementById('blogTitle').value;
    const blogContent = document.getElementById('blogContent').value;

    if (!username || !blogTitle || !blogContent) {
        alert('Please complete all fields.');
        return;
    }

    const blogPost = {
        username: username,
        title: blogTitle,
        content: blogContent
    };

    let existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

   
    existingPosts.push(blogPost);

   
    localStorage.setItem('blogPosts', JSON.stringify(existingPosts));

   
    window.location.href = 'blog.html'; 
}


function getBlogPosts() {
    let existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = '';

    existingPosts.forEach(function(post) {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');

        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;

        const authorElement = document.createElement('p');
        authorElement.textContent = `By ${post.username}`;

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;

        postElement.appendChild(titleElement);
        postElement.appendChild(authorElement);
        postElement.appendChild(contentElement);

        mainContent.appendChild(postElement);
    });
}

const blogForm = document.getElementById('blogForm');
if (blogForm) {
    blogForm.addEventListener('submit', handleFormSubmission);
}

getBlogPosts();