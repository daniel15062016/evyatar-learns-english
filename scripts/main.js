//a JS function for making the homepage monkey image change colors
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo-white.png') {
      myImage.setAttribute ('src','images/logo-green.png');
    }
    else if(mySrc === 'images/logo-green.png') {
      myImage.setAttribute ('src','images/logo-blue.png');
    }
    else if(mySrc === 'images/logo-blue.png') {
      myImage.setAttribute ('src','images/logo-red.png');
    }
    else if(mySrc === 'images/logo-red.png') {
      myImage.setAttribute ('src','images/logo-grey.png');
    }
    else if(mySrc === 'images/logo-grey.png') {
      myImage.setAttribute ('src','images/logo-purple.png');
    }
     else{
      myImage.setAttribute ('src','images/logo-white.png');
    }
  }

//a JS function for fetching the homepage letters list to all html pages
