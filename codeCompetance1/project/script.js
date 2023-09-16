document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      alert("Form must be filled correctly!");
    } else {
      alert(`==Your data has been sent==
                  First Name: ${firstNameInput.value}
                  Last Name: ${lastNameInput.value}
                  Email: ${emailInput.value}
                  Messages: ${messageInput.value}`);
    }
    form.classList.add("was-validated");
  });
});
