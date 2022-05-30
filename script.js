const navItem = document.querySelectorAll(".item-nav")

// function setActiveNav(item){
//   console.log(navItem);
//   navItem.forEach((nav)=>{
//     nav.classList.remove("active");
//   })
//   if(item === "beranda"){
//     navItem[0].classList.add("active")
//   } else if (item === "fitur") {
// 		navItem[1].classList.add("active");
// 	} else if (item === "statistik") {
// 		navItem[2].classList.add("active");
// 	}
// }
window.addEventListener("scroll", ()=>{
  var scroll = document.documentElement.scrollTop + 30;
  if (scroll <= getOffset(document.getElementById("feature")).top) {
    if (!navItem[0].classList.contains("active")) {
      navItem.forEach((nav) => {
        nav.classList.remove("active");
      });
      navItem[0].classList.add("active");
    }
  } else if (
    scroll >= getOffset(document.getElementById("feature")).top &&
    scroll <= getOffset(document.getElementById("stat")).top
  ) {
    if (!navItem[1].classList.contains("active")) {
      navItem.forEach((nav) => {
        nav.classList.remove("active");
      });
      navItem[1].classList.add("active");
    }
  } else {
    {
      if (!navItem[2].classList.contains("active")) {
        navItem.forEach((nav) => {
          nav.classList.remove("active");
        });
        navItem[2].classList.add("active");
      }
    }
  }
});
function getOffset(el) {
	var _x = 0;
	var _y = 0;
	while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
		_x += el.offsetLeft - el.scrollLeft;
		_y += el.offsetTop - el.scrollTop;
		el = el.offsetParent;
	}
	return { top: _y, left: _x };
}
