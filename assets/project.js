async function getPost() {

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('postId');

    if (!postId) {
        console.error('Post ID not found in URL');
        return;
    }

    try {
        // Fetch posts from the API
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const post = await response.json();

        // Update HTML elements with the post data
        document.getElementById('post-title').innerText = post.title;
        document.getElementById('post-body').innerText = post.body;
    } catch (error) {
        // Console errors
                console.error('Error fetching post data:', error);
    }
}

// Function to fetch and display three random posts
async function get3randomPosts() {
    try {
        // Fetch posts from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const posts = await response.json();

        // Three random posts
        const randomPosts = [];
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * posts.length);
            randomPosts.push(posts[randomIndex]);
        }

        // Display posts
        randomPosts.forEach((post, index) => {
            document.getElementById(`random-post-title-${index + 1}`).innerText = post.title;
            document.getElementById(`random-post-body-${index + 1}`).innerText = post.body;
            document.getElementById(`random-post-image-${index + 1}`).src = `https://via.placeholder.com/150?text=Post+${post.id}`;
        });
    } catch (error) {
        // Console errors
        console.error('Error fetching random posts:', error);
    }
}

// Call functions to fetch and display data!!!
getPost();
get3randomPosts();