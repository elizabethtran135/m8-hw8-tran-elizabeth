// It is always helpful to use comments in your code!
var myMainNavLinks = document.getElementsByClassName('main-menu-labels');

function showSubMenu() {
  console.log(this.nextElementSibling)
  this.nextElementSibling.classList.remove('hide')
}
function hideSubMenu() {
  console.log(this.nextElementSibling)
  this.nextElementSibling.classList.add('hide')
}
for (i=0; i < myMainNavLinks.length; i++) {
  myMainNavLinks[i].addEventListener('mouseenter',showSubMenu);
  myMainNavLinks[i].addEventListener('mouseleave',hideSubMenu);
}
