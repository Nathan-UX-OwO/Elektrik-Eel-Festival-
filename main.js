// Hamburger menu button

document.querySelector(".hamburgermenu").addEventListener("click", function() {
  let menu = document.querySelector(".navmenu");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});


// Scroll-to-top button, used template by ChatGPT

var myButton = document.getElementById("scrollToTopButton");

    window.onscroll = function() {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                myButton.style.display = "block";
            } else {
                myButton.style.display = "none";
            }
        }

        myButton.onclick = function() {
            document.body.scrollTop = 0; 
            document.documentElement.scrollTop = 0; 
        }