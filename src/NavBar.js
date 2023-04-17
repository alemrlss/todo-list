import { projects } from "./leftPanel";
import { tasks } from "./rigthPanel";
const navBar = () => {
  const nav = document.querySelector(".nav");

  const icon = document.createElement("img");
  icon.classList.add("icon");
  icon.setAttribute("src", "./img/menu.png");

  icon.addEventListener("click", (e) => {
    let leftPanel = document.querySelector(".leftPanel");
    leftPanel.classList.toggle("hidden");
  });
  nav.appendChild(icon);

  const imgTitle = document.createElement("img");
  imgTitle.classList.add("navbar-img-title");
  imgTitle.setAttribute("src", "./img/todolist.png");



  nav.appendChild(imgTitle);
};

export default navBar;
