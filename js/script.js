async function searchPost() {
  const postId = document.getElementById('postIdInput').value;
  if (!postId || postId < 1 || postId > 100) {
    alert('Please enter a valid post ID between 1 and 100.');
    return;
  }

  const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const postData = await postResponse.json();

  if (postResponse.ok) {
    const postContainer = document.getElementById('postContainer');
    postContainer.innerHTML = `
                    <div class="post">
                        <h2>${postData.title}</h2>
                        <p>${postData.body}</p>
                        <button onclick="fetchComments(${postId})">Load Comments</button>
                        <div id="comments-${postId}"></div>
                    </div>
                `;
  } else {
    alert('Post not found!');
  }
}

async function fetchComments(postId) {
  const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  const commentsData = await commentsResponse.json();

  const commentsContainer = document.getElementById(`comments-${postId}`);
  commentsContainer.innerHTML = ''; // Clear previous comments

  if (commentsResponse.ok && commentsData.length > 0) {
    commentsData.forEach((comment) => {
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment');
      commentDiv.textContent = comment.body;
      commentsContainer.appendChild(commentDiv);
    });
  } else {
    commentsContainer.textContent = 'No comments found.';
  }
}
