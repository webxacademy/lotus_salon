
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




/*  REVIEW  */
/*

const control = document.querySelector(".review-content");
const contClick = document.querySelectorAll(".click");
const reviewNum = document.querySelectorAll('.review-box').length;
let reviewIndex = 1;
let traslateX = 0;


contClick.forEach(button => {
  botton.addEventListener('click', (event) => {
    if (event.target.id === 'left-control') {
      if (reviewIndex !== 1) {
        imageIndex--;
        translateX += 300;
      }
    } else {
      if (reviewIndex !== reviewNum) {
        reviewIndex ++ ;
        translateX -= 300;
      }
    }

    control.style.transform = `translateX(${translateX}px)`;
  });
});




*/







/***************** Menu ******************/
/*
// Menu Button Toggle
let menuList = document.querySelector(".menuList");
let menutoggle = document.querySelector(".toggle");
menutoggle.onclick = function() {
menutoggle.classList.toggle("active");
menuList.classList.toggle("active");
}

/***************** Modal ******************/
/*
// Modal Open
let modalContent = document.querySelectorAll(".modal");
let readMore = document.querySelectorAll(".read-more");
for (let i = 0; i < readMore.length; i++) {
  readMore[i].onclick=function() {
    modalContent[i].classList.toggle("active");
  }
}

// Modal Close
let closeModal = document.querySelector(".close");
closeModal.onclick = function() {
if ( modalContent.classList.toggle("active") == true){
closeModal.classList.toggle("!active")
} else {
closeModal.classList.toggle("active")
}

}

*/
