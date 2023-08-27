function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  const imageId = event.dataTransfer.getData("text");
  const imgElement = document.getElementById(imageId);

  if (imgElement) {
    const targetContainer = event.target;

    if (targetContainer.tagName === "IMG") {
      const parentContainer = targetContainer.parentNode;

      const clonedImage = imgElement.cloneNode(true);

      parentContainer.replaceChild(clonedImage, targetContainer);
    } else {
      const clonedImage = imgElement.cloneNode(true);
      targetContainer.appendChild(clonedImage);
    }

    imgElement.parentNode.removeChild(imgElement);

    if (targetContainer.childElementCount === 0) {
      const emptyMessage = targetContainer.querySelector(".empty-message");
      if (emptyMessage) {
        emptyMessage.style.display = "block";
      }
    }
  }
}
