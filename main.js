
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

// slideShow = function(element, boxes){
//   let countLeft = boxes.length-1;
//   let countRight = 0;
//   let boxNum = 0;
//   let translateNum = 0;
//
//   if (element.id =="left-control") {
//     if (countLeft) {
//       boxNum = countLeft -1 ;
//       translateNum = countLeft - boxNum;
//       boxes[boxNum].style.transform = `translateX(${translateNum}*100px)`;
//       boxes[boxNum].style.transition = `1s ease-in-out`;
//
//
//     } else {
//       console.log("Nothing should happen");
//     }
//
//
//   } else if (element.id="right-control") {
//
//   } else {
//     console.log("Error of id!")
//   }
//
// }


let reviewbox = document.querySelectorAll(".review-box");
let arrow = document.querySelectorAll(".click");
let countLeft = reviewbox.length-1;
let countRight = 0;


for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener('click', function() {
    // track the current elemnt before the click
    let currentBox = reviewbox[reviewbox.length - countRight - 1];

    if (this.id == "left-control"){
      // currentBox.classList.toggle('slide');
      if (countLeft) {
        currentBox.style.transform = "translateX(350px)";
        currentBox.style.transition = "1s ease-in-out";
        countLeft -= 1;
        countRight += 1;
      }
    }


      if (this.id == "right-control") {
        if (countRight) {
          // console.log("ayay");
          currentBox = currentBox.nextElementSibling;
          currentBox.style.transform = "translateX(0px)";
          currentBox.style.transition = "1s ease-in-out";
          countRight -=1;
          countLeft +=1;
        }

      }

  });
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
