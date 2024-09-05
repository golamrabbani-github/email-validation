const inputEmail = document.getElementById("inputEmail");
const verifyBtn = document.getElementById("varifyBtn");
const result = document.getElementById("result");

verifyBtn.addEventListener("click", () => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailPattern.test(inputEmail.value)) {
    result.textContent = "Correct Email";
    result.style.color = "green";
  } else {
    result.textContent = "Email is not correct";
    result.style.color = "red";
  }
});
