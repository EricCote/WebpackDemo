function add(a, b) {
  return a + b;
}

export default add;

function createSubscription2(evt) {
  evt.preventDefault();
  let name = document.querySelector("#txtName").value;
  let email = document.querySelector("#txtEmail").value;

  let subscription = { name, email };

  fetch("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify(subscription),
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      const isBootstrap = document.styleSheets[0].href.includes("bootstrap");
      const bootstrapColor = data.id ? "success" : "danger";
      const bootstrapAlert = `alert alert-${bootstrapColor} w-25 mt-5 mx-auto `;

      const tailwindColor = data.id ? "green" : "red";
      const tailwindAlert = `bg-${tailwindColor}-200 border border-${tailwindColor}-400 text-${tailwindColor}-800 px-4 py-3 rounded relative`;

      if (data.id) {
        document.querySelector("#status").innerHTML = `<div class='${
          isBootstrap ? bootstrapAlert : tailwindAlert
        } ${colorSuccess}' role='alert'>You are suscribed with subscription ${
          data.id
        }</div>`;
      } else {
        document.querySelector("#status").innerHTML = `<div class='${
          isBootstrap ? bootstrapAlert : tailwindAlert
        }' role='alert'>There was a problem</div>`;
      }
      setTimeout(() => {
        document.querySelector("#status").innerHTML = "";
      }, 5000);
    });
}
