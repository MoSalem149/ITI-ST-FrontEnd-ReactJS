function openServerPage() {
  var userName = userInfoForm.userName.value;
  var userAge = userInfoForm.userAge.value;
  var userGender = userInfoForm.userGender.value;
  var userFavColor = userInfoForm.userFavColor.value;

  var answerPage = `
Welcome <span style="color: ${userFavColor};">${userName}</span>! You are ${userAge} years old.<br>
Your gender is ${
    userGender === "male"
      ? '<img src="Images/5-2.png" width="100px" height="100px" alt="" />'
      : '<img src="Images/5-1.png" width="100px" height="100px" alt="" />'
  }.
`;

  document.write(answerPage);
}
