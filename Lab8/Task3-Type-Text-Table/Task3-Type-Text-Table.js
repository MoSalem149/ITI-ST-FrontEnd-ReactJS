const textToStyle = document.getElementById("Text");

document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.name === "fontFamily") {
      textToStyle.style.fontFamily = radio.value;
    }
    if (radio.name === "textAlign") {
      textToStyle.style.textAlign = radio.value;
    }

    if (radio.name === "lineHeight") {
      textToStyle.style.lineHeight = radio.value;
    }
    if (radio.name === "letterSpacing") {
      textToStyle.style.letterSpacing = radio.value;
    }
    if (radio.name === "textIndent") {
      textToStyle.style.textIndent = radio.value;
    }
    if (radio.name === "textTransform") {
      textToStyle.style.textTransform = radio.value;
    }
    if (radio.name === "textDecoration") {
      textToStyle.style.textDecoration = radio.value;
    }
    if (radio.name === "textBorder") {
      textToStyle.style.border = radio.value;
    }
    if (radio.name === "borderColor") {
      textToStyle.style.borderColor = radio.value;
    }
  });
});
