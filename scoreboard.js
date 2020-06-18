function showFinalScore(){
    // either get scores from localstorage or set to empty array
  var highscores = JSON.parse(window.localStorage.getItem("highScoreList")) || [];
  highscores.forEach(function(score) {
      // create li tag for each high score
      var liTag = document.createElement("li");
      liTag.textContent = score.initials + " - " + score.score;
      // display on page
      var olEl = document.getElementById("scoreList");
      olEl.appendChild(liTag);
    });
}

showFinalScore();

function clearHighScores() {
    window.localStorage.removeItem("highScoreList");
    window.location.reload();
  }