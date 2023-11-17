document.addEventListener('DOMContentLoaded', function () {
    var counterElement = document.getElementById('counter');
    var likeList = document.querySelector('.likes');
    var commentList = document.getElementById('list');
    var counterValue = 0;
    var isPaused = false;
  
    function updateCounter() {
      if (!isPaused) {
        counterValue++;
        counterElement.textContent = counterValue;
      }
    }
  
    var intervalId = setInterval(updateCounter, 1000);
  
    var pauseButton = document.getElementById('pause');
    pauseButton.addEventListener('click', function () {
      isPaused = !isPaused;
  
      // Disable all buttons except the pause button
      var buttons = document.querySelectorAll('button');
      buttons.forEach(function (button) {
        if (button.id !== 'pause') {
          button.disabled = isPaused;
        }
      });
  
      // Switch label on the pause button
      pauseButton.textContent = isPaused ? 'Resume' : 'Pause';
    });
  
    document.getElementById('plus').addEventListener('click', function () {
      if (!isPaused) {
        counterValue++;
        counterElement.textContent = counterValue;
      }
    });
  
    document.getElementById('minus').addEventListener('click', function () {
      if (!isPaused) {
        counterValue--;
        counterElement.textContent = counterValue;
      }
    });
  
    var likeCount = {}; // Object to store like counts for each counter value
  
    document.getElementById('heart').addEventListener('click', function () {
      if (!isPaused) {
        // Increment the like count for the current counter value
        likeCount[counterValue] = (likeCount[counterValue] || 0) + 1;
  
        // Update the likes list
        updateLikesList();
      }
    });
  
    function updateLikesList() {
      // Clear the likes list
      likeList.innerHTML = '';
  
      // Display the like count for each counter value
      Object.keys(likeCount).forEach(function (key) {
        var listItem = document.createElement('li');
        listItem.textContent = `${key} has ${likeCount[key]} likes`;
        likeList.appendChild(listItem);
      });
    }
  
    var commentForm = document.getElementById('comment-form');
    var commentInput = document.getElementById('comment-input');
  
    commentForm.addEventListener('submit', function (event) {
      event.preventDefault();
      
      // Get the comment text
      var commentText = commentInput.value;
  
      // Display the comment in the comments list
      displayComment(commentText);
  
      // Clear the comment input field
      commentInput.value = '';
    });
  
    function displayComment(commentText) {
      var commentItem = document.createElement('div');
      commentItem.textContent = commentText;
      commentList.appendChild(commentItem);
    }
  });
  