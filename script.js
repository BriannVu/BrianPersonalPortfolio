let speechArray = [
  "Welcome to my software engineering portfolio.",

  "I specialize in building efficient, scalable apps.",

  "Solving complex problems with elegant code solutions.",

  "My focus is on creating user-centric software.",

  "I develop innovative solutions for modern problems.",

  "Crafting code that is both functional and beautiful.",

  "I'm passionate about building scalable applications.",

  "My expertise covers both frontend and backend.",

  "I love pushing the boundaries of what's possible.",

  "Every project is built with precision.",

  "My goal is to deliver exceptional results.",

  "Hope you enjoy exploring my portfolio.",
];
document.getElementById("text_value").innerHTML = "Hi there!";

window.onload = function () {
  for (let i = 0; i < speechArray.length; i++) {
    window.setTimeout(updateText, 500 + i * 3000);
    function updateText() {
      document.getElementById("text_value").style.opacity = "0";
      window.setTimeout(() => {
        document.getElementById("text_value").innerHTML = speechArray[i];
        document.getElementById("text_value").style.opacity = "1";
      }, 1000);
    }
  }
};
