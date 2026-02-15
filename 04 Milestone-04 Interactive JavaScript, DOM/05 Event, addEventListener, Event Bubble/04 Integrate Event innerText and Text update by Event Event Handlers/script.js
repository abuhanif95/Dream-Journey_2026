document
  .getElementById("btn-update-title")
  .addEventListener("click", function () {
    // console.log("btn-clicked");
    const pageTitleElement = document.getElementById("title-text");
    // console.log(pageTitleElement);
    pageTitleElement.innerText = "Updated page title text";
  });

document.getElementById("btn-login").addEventListener("click", function () {
  const Login = document.getElementById("user-info");
  // console.log(Login);
  Login.innerText = "User Logged in Successfully";
});

//Set the event listener
document.getElementById("btn-update").addEventListener("click", function () {
  console.log("clicked");
  // get the text from input field
  const inputName = document.getElementById('input-name');
  const name = inputName.value;
  console.log(name);
  const nameP = document.getElementById('name');
  nameP.innerText = name;
});
