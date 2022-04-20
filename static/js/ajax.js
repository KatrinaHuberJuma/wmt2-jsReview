

fetch('/random-words.json')
  .then(response => response.json())
  .then((responseData) => {
    startGame(responseData.word)
});
