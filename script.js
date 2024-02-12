
let navBar = document.getElementById('#main-nav-bar');
let MenuTrigger = document.getElementById('menu-trigger');

let mainNav = document.getElementById('main-nav');
let menuNav = document.getElementById('menu-nav');
let settingsNav = document.getElementById('settings-nav');


document.addEventListener('click', (e)=>{

  if(e.target === MenuTrigger){
    menuNav.classList.toggle("visible-card");
    settingsNav.classList.toggle("visible-card");
    window.innerWidth <= 250 ? mainNav.classList.toggle("visible-card") : null

  }else if (menuNav.classList.contains("visible-card")) {
    menuNav.classList.remove("visible-card");
    settingsNav.classList.remove("visible-card");
    mainNav.classList.remove("visible-card")
  }


})

const leaves = document.getElementById('leaves');
const leavesTrigger = document.getElementById('falling-leaves-trigger');
let leavesLoaders = document.querySelectorAll('.loader span');
const leavesLabel = document.getElementById('leaves-trigger-label')

document.addEventListener('change', function() {


  leavesLoaders.forEach(loader => {

    if (leavesTrigger.checked) {
      loader.classList.remove('paused');
      leavesLabel.classList.add('on');
      leavesLabel.classList.remove('off');
    }else {
      loader.classList.add('paused');
      leavesLabel.classList.add('off');
      leavesLabel.classList.remove('on');
    }
  })


});

document.addEventListener('scroll', (e)=>{

    if (menuNav.classList.contains("visible-card")) {
        menuNav.classList.remove("visible-card");
        settingsNav.classList.remove("visible-card");
        mainNav.classList.remove("visible-card")
    }
})



let rightsDate = document.getElementById('rights-date');
rightsDate.innerText = new Date().getFullYear()


// hide nav bar when scroll down ...
let lastScrollTop = 0;
let delta = 5;
let navbarHeight = $('#main-nav-bar').outerHeight();
let didScroll;
// on scroll, let the interval function know the user has scrolled
$(window).scroll(function(e){
  if (window.innerWidth <= 768) {
    didScroll = true;
  }
});
// run hasScrolled() and reset didScroll status
setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);
function hasScrolled() {
  let st = $(this).scrollTop();
  if (Math.abs(lastScrollTop - st) <= delta) return;

    // If current position > last position AND scrolled past navbar...
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        // If did not scroll past the document (possible on mac)...
        if(st + $(window).height() < $(document).height()) {
        $('header').removeClass('nav-up').addClass('nav-down');
        }
  }

  lastScrollTop = st;
}

// // set bg images randomly
// let bgImages = document.querySelectorAll('.sm-bg-images');
// numbers.forEach(bgImages)

// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }


