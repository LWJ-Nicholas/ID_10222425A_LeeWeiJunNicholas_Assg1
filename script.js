window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getClassById("navbar").style.backgroundColor = 'rgba(0,0,0,0)';
  } else {
    document.getClassById("navbar").style.backgroundColor = 'white';
  }
}

//  thankyou alert box
function myFunction() {
  alert("I am an alert box!");
}