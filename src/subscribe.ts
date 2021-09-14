interface Subscription {
  name: string;
  email: string;
}

interface fetchResult {
  id: number;
  createdAt: string;
}

//Multiple ways to call an api service (REST Service or AJAX)
//xmlHttpRequest (xhr)  (older way)
//$.ajax (jquery)
//fetch  (included with html5)
//Fetch can be used 2 ways: Promise syntax, Async/await syntax (preferred)
async function createSubscription(evt: Event) {
  evt.preventDefault();

  let name = (document.querySelector("#txtName") as HTMLInputElement).value;
  let email = (document.querySelector("#txtEmail") as HTMLInputElement).value;

  let subscription: Subscription = { name, email };

  const resp = await fetch("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify(subscription),
  });
  const data: fetchResult = await resp.json();

  const isBootstrap = document.styleSheets[0].href.includes("bootstrap");
  const bootstrapColor = data.id ? "success" : "danger";
  const bootstrapAlert = `alert alert-${bootstrapColor}  mt-5 mx-auto `;

  const tailwindColor = data.id ? "green" : "red";
  const tailwindAlert = `bg-${tailwindColor}-200 border border-${tailwindColor}-400 text-${tailwindColor}-800 px-4 py-3 rounded relative`;

  if (data.id) {
    document.querySelector("#status").innerHTML = `<div class='${
      isBootstrap ? bootstrapAlert : tailwindAlert
    }' role='alert'>You are suscribed with subscription ${data.id}</div>`;
  } else {
    document.querySelector("#status").innerHTML = `<div class='${
      isBootstrap ? bootstrapAlert : tailwindAlert
    }' role='alert'>There was a problem</div>`;
  }

  setTimeout(() => {
    document.querySelector("#status").innerHTML = "";
  }, 5000);
}

export default createSubscription;
