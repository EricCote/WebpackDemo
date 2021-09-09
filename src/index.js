import "bootstrap/dist/css/bootstrap.css"

//Multiple ways to call an api service (REST Service or AJAX)
//xmlHttpRequest (xhr)  (older way)
//$.ajax (jquery)
//fetch  (included with html5)
//Fetch can be used 2 ways: Promise syntax, Async/await syntax (preffered)  
async function CreateSubscription(evt) {
    evt.preventDefault();
    let name = document.querySelector('#txtName').value;
    let email = document.querySelector('#txtEmail').value;

    let subscription = { name, email };

    const resp = await fetch("https://reqres.in/api/users",
        {
            method: 'POST',
            body: JSON.stringify(subscription)
        });
    const data = await resp.json();
    if (data.id) {
        //success
    } else {
        //failed
    }

}

const btn = document.querySelector('#subscribe')

btn.addEventListener('click', CreateSubscription);

