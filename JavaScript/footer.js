function handleSubmit() {
  const input = document.querySelector('.footer-input');
  const message = document.getElementById('footer-msg');

  if (input.value.trim() === '') {
    message.textContent = "Please enter an email , phone number , description.";
    message.style.color = "red";
  } else {
    message.textContent = "Thanks for submit!";
    message.style.color = "lightgreen";
    input.value = '';
  }
}
