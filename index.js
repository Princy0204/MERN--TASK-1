document.addEventListener("DOMContentLoaded", function () {
    const letsTalkButton = document.querySelector("#letsTalkButton");
    const body = document.querySelector("body");
    const contentToAnimate = document.querySelector(".content");
  
    letsTalkButton.addEventListener("click", function () {
      // Generate a random color
      const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  
      // Add a class to body for background color change animation
      body.classList.add("animate-color");
  
      // Change the background color of the entire page
      body.style.backgroundColor = randomColor;
  
      // Add a class to trigger animations on the content
      contentToAnimate.classList.toggle("animate-content");
    });
  });
  