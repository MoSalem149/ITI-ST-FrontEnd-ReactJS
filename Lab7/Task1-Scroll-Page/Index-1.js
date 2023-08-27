function Open() {
  childPage = window.open("Child-1.html", "Child Page", "width=700,height=500");
  console.log(childPage);
}
setInterval(scrollChildWindow, 500);

function scrollChildWindow() {
  if (childPage) {
    childPage.scrollBy(0, 100);
  }
}
