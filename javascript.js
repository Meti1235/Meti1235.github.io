// let navService = {
//     navItems: document.getElementsByClassName("nav-item"),
//     pages: document.getElementById("pages").children,

//     activeNav: function (item) {
//         for (let navItem of this.navItems) {
//             navItem.classList.remove("active");
//         }
//         item.classList.add("active");
//     },
//     showPages: function (page) {
//         for (let pageElement of this.pages) {
//             pageElement.style.display = "none";
//         }
//         page.style.display = "block";
//     },
//     createEventListener: function () {
//         for (let i = 0; i < this.navItems.length; i++) {
//             this.navItems[i].addEventListener("click", function () {
//                 // this in addEventListener points to the item that has the event listener
//                 navService.activeNav(this);
//             })
//         }
//     }

// }
console.log("hi")








//automating the slider

let automatedSlider = setInterval(() => {
  window.onload = document.getElementById("buttonNext").click()
}, 2000);

let autoSlider = document.getElementById("autoSlider")

autoSlider.addEventListener("mouseenter", function() {
  clearInterval(automatedSlider);
});

autoSlider.addEventListener("mouseleave", function() {
  let automatedSlider = setInterval(() => { //don't touch this :D 
    window.onload = document.getElementById("buttonNext").click()
  }, 2000);
  autoSlider.addEventListener("mouseenter", function() { //at 4am they do make sense it works :D
    clearInterval(automatedSlider);
  });
});



// window.addEventListener('scroll', function() {
//   document.getElementById('imgResize1').style.boxShadow =  `inset 0 -200px 100px 0 rgba(0, 0, 0, 0.6)`
//   document.getElementById('imgResize2').style.backgroundPositionY = window.pageYOffset + 'px'
//   document.getElementById('imgResize3').style.backgroundPositionY = window.pageYOffset + 'px'
//   console.log(this.window.pageYOffset)
// });





