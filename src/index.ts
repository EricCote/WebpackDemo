import "./styles.css";
import createSubscription from "./subscribe";

const btn = document.querySelector("#subscribe");
btn.addEventListener("click", createSubscription);
