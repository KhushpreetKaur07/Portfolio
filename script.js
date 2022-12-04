
var yCoord;
var address;
var id;
/*dist is the yCoord of first section accessible by anchor i.e. About. I want
it to be reached in 10 ms and others in multiples like 20ms, 30ms and 40ms....So it is sort of scale*/

var dist = document.querySelector('#profilepic').offsetTop

//collection and code for show/vanish collapse is to handle radio button functionality
var collection = document.getElementsByClassName('not-show')
var collapseDiv = document.getElementById('collapseExample')
var other = document.getElementById('other')

other.addEventListener('click',showCollapse)

for(let ele of collection){
  ele.addEventListener('click',vanishCollapse);
}
function vanishCollapse(e){
  collapseDiv.style.display = 'none'
}


function showCollapse(){
  collapseDiv.style.display = 'block'
}

/*This function is event handler. It gets the anchor's target's yCoord. That is the final
destination of our scroll
*/
function f(event) {
  // event.preventDefault();
  address=this.getAttribute('href');
  yCoord=document.querySelector(address).offsetTop;
  id = setInterval(smoothScroll,50)

  function smoothScroll() {
    if((window.pageYOffset+dist)>=yCoord||(window.innerHeight + Math.ceil(window.pageYOffset + 300)) >= document.body.offsetHeight){
      console.log(window.innerHeight,window.pageYOffset,document.body.offsetHeight,dist)
      document.querySelector(address).style.animation = "flash 0.5s ease-in-out 2 alternate";
      clearInterval(id);
      return;
    }
    console.log(window.innerHeight,window.pageYOffset,document.body.offsetHeight)
    window.scrollBy(0,dist+50);
  }

}


/*getting the anchor tags corresponding to nav-link class and adding eventListener*/
var anchorTags = document.getElementsByClassName('nav-link');
for(var i=0; i<anchorTags.length;i++) {
  anchorTags[i].addEventListener('click',f);
}

