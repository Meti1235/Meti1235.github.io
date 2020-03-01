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

var checkbox = document.querySelector('#options-hoverpause-checkbox') // this is for the slider

var glide = new Glide('#options-hoverpause', {
  hoverpause: checkbox.checked,
  autoplay: 2000,
  perView: 3
})

checkbox.addEventListener('change', function () {
  glide.update({
    hoverpause: checkbox.checked
  })
})

glide.mount()      //this is for the slider


