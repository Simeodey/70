import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const main = document.querySelector(".main");
  const div = document.createElement("div",);
  const image = document.createElement("img");
  div.className = "image"
  image.src="https://cdn.pixabay.com/photo/2022/11/29/16/51/sheep-7624863_640.jpg"
  div.appendChild(image);
  main.appendChild(div);
  div.addEventListener("click", () =>{
    div.style.transform = "scale(2)"
  })
  
});