let speechArray = [
  "Welcome to be here!",
  "How are you!",
  "I love programming",
  "I love cooking too",
];
document.getElementById("text_value").innerHTML = "Hi there!";

window.onload = function () {
  for (let i = 0; i < speechArray.length; i++) {
    window.setTimeout(updateText, 3000 + i * 4000);
    function updateText() {
      document.getElementById("text_value").style.opacity = "0";
      window.setTimeout(() => {
        document.getElementById("text_value").innerHTML = speechArray[i];
        document.getElementById("text_value").style.opacity = "1";
      }, 1000);
    }
  }
};
