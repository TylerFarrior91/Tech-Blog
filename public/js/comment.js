const createComment = async (event) => {
    event.preventDefault();
  
    const commentBody = document.querySelector('.commentInput').value;
    const urlValue = document.location.href.split('');
    const postId = urlValue[urlValue.length - 1]
  
    if (commentBody && postId) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ commentBody, postId }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        //document.location.reload();
        console.log(response);
      } else {
        alert('Failed to create comment');
      }
    }
  };

  document
  .querySelector('.commentBtn')
  .addEventListener('click', createComment);