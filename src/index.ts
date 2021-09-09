import "bootstrap/dist/css/bootstrap.css"
import createSubscription from "./subscribe"

const btn = document.querySelector('#subscribe');
btn.addEventListener('click', createSubscription);