const buttonRegisterUser = document.getElementById("buttonRegisterUser");

function linkTo(link) {
  const { origin } = window.location;
  window.location.href = `${origin}/${link}.html`;
}

buttonRegisterUser.addEventListener("click", (event) => {
  event.preventDefault();
  linkTo("login");
});
