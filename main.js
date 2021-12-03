
/***************** Menu ******************/

// Menu Button Toggle
let menuList = document.querySelector(".menuList");
let menutoggle = document.querySelector(".toggle");
menutoggle.onclick = function() {
menutoggle.classList.toggle("active");
menuList.classList.toggle("active");
}



/***************** Modal ******************/

// Modal Open
let modalContent = document.querySelectorAll(".modal");
let readMore = document.querySelectorAll(".read-more");
for (let i = 0; i < readMore.length; i++) {
  readMore[i].onclick=function() {
    modalContent[i].classList.toggle("active");


// Modal Close
    let closeModal = document.querySelector(".close");
    closeModal.onclick = function() {
    if ( modalContent[i].classList.toggle("active") == true){
    closeModal.classList.toggle("!active")
    } else {
    closeModal.classList.toggle("active")
    }

    }
  }
}

let review = document.querySelector(".review-box");
let arrow = document.querySelectorAll(".click");
arrow[0].onclick = function() {

review.classList.toggle("active");
  alert("clicked");
};

arrow[1].onclick = function() {
review.classList.toggle("active");
  alert("clicked");
}
