import "./style.css";
import "bootstrap";

window.onload = () => {
  //write your code here
  const icons = ["♠️", "♥️", "♣", "♦️"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q"
  ];

  const topElement = document.querySelector(".top");
  const numberElement = document.querySelector(".number");
  const footerElement = document.querySelector(".footer");

  const icon = icons[Math.floor(Math.random() * icons.length)];
  if (icon === "♥️" || icon === "♦️") {
    topElement.style.color = "red";
    numberElement.style.color = "red";
    footerElement.style.color = "red";
  }

  const value = values[Math.floor(Math.random() * values.length)];

  topElement.innerHTML = icon;
  numberElement.innerHTML = value;
  footerElement.innerHTML = icon;

  document.querySelector(".card").classList.add();
};
