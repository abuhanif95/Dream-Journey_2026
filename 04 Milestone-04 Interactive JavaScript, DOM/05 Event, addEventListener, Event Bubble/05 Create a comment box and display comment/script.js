// Step 01: set an event handler to the button
document
  .getElementById("btn-post-comment")
  .addEventListener("click", function () {
    // Step 02: get the text written in the comment box
    const commentTextBox = document.getElementById('comment-text-box');
    const newComment = commentTextBox.value;

    // Step 03: get the parent node where to publish comment
    const commentContainer = document.getElementById('comment-container');
    
    // Step 04: create a comment paragraph and set the innerText
    const commentElement = document.createElement('p');
    commentElement.classList.add('comment');
    commentElement.innerText = newComment;

    // Step 05: append the new p tag to the parent Node
    commentContainer.appendChild(commentElement);

    // Step 06: clean the text area
    commentTextBox.value = '';
  });
