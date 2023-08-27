function checkAll() {
  const uname = document.getElementsByName("userName")[0];
  const uid = document.getElementsByName("userId")[0];
  const country = document.getElementsByName("country")[0];
  const email = document.getElementsByName("email")[0];
  const passid = document.getElementsByName("passid")[0];
  const passconfirm = document.getElementsByName("userPasswordConfirm")[0];
  const sex = document.getElementsByName("userSex");
  const languages = document.getElementsByName("Lang");
  const errorSpan = document.querySelectorAll(".errorSpan");

  errorSpan.forEach((span) => (span.style.display = "none"));

  let isValid = true;

  if (uname.value === "") {
    document.getElementById("uname").style.display = "inline";
    isValid = false;
  }
  if (!/^[a-zA-Z0-9]*$/.test(uname.value)) {
    document.getElementById("uname").style.display = "inline";
    isValid = false;
  }
  if (!/^\d{5,10}$/.test(uid.value)) {
    document.getElementById("uid").style.display = "inline";
    isValid = false;
  }

  if (country.value === "Default") {
    document.getElementById("counteryValidatio").style.display = "inline";
    isValid = false;
  }

  if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email.value)) {
    document.getElementById("emailId").style.display = "inline";
    isValid = false;
  }

  if (!/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[@#$%^&+=]).{10,20}$/.test(passid.value)) {
    document.getElementById("passwordId").style.display = "inline";
    isValid = false;
  }
  if (passid.value !== passconfirm.value) {
    document.getElementById("passConfirmId").style.display = "inline";
    isValid = false;
  }

  let selectedSex = false;
  sex.forEach((s) => {
    if (s.checked) selectedSex = true;
  });
  if (!selectedSex) {
    document.getElementById("sexId").style.display = "inline";
    isValid = false;
  }

  let selectedLanguages = 0;
  languages.forEach((lang) => {
    if (lang.checked) selectedLanguages++;
  });
  if (selectedLanguages < 2) {
    document.getElementById("languageId").style.display = "inline";
    isValid = false;
  }

  return isValid;
}
function resetAll() {
  const errorSpan = document.querySelectorAll(".errorSpan");
  errorSpan.forEach((span) => (span.style.display = "none"));
}
