import "./reset.css";
import "./styles.css";
import { greeting } from "./greeting.js";
import { compareAsc, format } from "date-fns";

greeting();

format(new Date(2014, 1, 11), "yyyy-MM-dd");
let today = new Date();
console.log(today);
let todayFormatted = format(today,"yyyy-MM-dd");
console.log(todayFormatted);

const dateDisplay = document.querySelector(".todayDate");
dateDisplay.textContent = todayFormatted;
dateDisplay.style.fontWeight = "bold";
dateDisplay.style.fontSize = "1.5em";
