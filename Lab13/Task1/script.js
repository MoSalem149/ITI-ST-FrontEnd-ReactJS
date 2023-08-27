document.addEventListener("DOMContentLoaded", function () {
  const mainBranchCheckbox = document.querySelector(
    'input[type="checkbox"][value="main"]'
  );
  const branchCheckbox = document.querySelector(
    'input[type="checkbox"][value="branch"]'
  );
  const smartVillageParagraph = document.querySelector(".box1 p");
  const boxParagraphs = document.querySelectorAll(".boxs p");

  mainBranchCheckbox.addEventListener("change", function () {
    smartVillageParagraph.style.color = mainBranchCheckbox.checked
      ? "brown"
      : "";
  });

  branchCheckbox.addEventListener("change", function () {
    const color = branchCheckbox.checked ? "brown" : "";

    for (let i = 1; i <= 8; i++) {
      const boxParagraph = boxParagraphs[i - 1];
      boxParagraph.style.color = color;
    }
  });
});
