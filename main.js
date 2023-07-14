document.addEventListener("DOMContentLoaded", function() {
  var popup = document.getElementById("popup");
  // Show the popup
  setTimeout(function() {
    popup.classList.add("hidden");
  }, 9000);

  // Close the popup when clicked anywhere on the screen
  document.addEventListener("click", function() {
    popup.classList.add("hidden");
  });
});

