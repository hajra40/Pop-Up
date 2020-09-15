var parent = document.querySelector(".modal-parent"),
  btn = document.querySelector("button"),
  X = document.querySelector(".X"),
  section = document.querySelector("section");

  // function to call the button when clicked
  btn.addEventListener("click", appear);
  
  function appear() {
    parent.style.display = "block";
    section.style.filter = "blur(5px)";
  }

  // function for cross
    X.addEventListener("click", disappear);

    function disappear() {
      parent.style.display = "none";
      section.style.filter = "blur(0px)";
    }

    // modal-parent
    parent.addEventListener("click", disappearParent);

    function disappearParent(e) {
      if(e.target.className == "modal-parent"){
        parent.style.display = "none";
        section.style.filter = "blur(0px)";
      }
    }
