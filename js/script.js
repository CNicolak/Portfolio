// ****************************************************************
//  Cassandra Nicolak
//
//  Please note:
//  I have included references to the orginal source code. Most
//  code is heavily modified from the original. 
//
//*****************************************************************



// ****************************************************************
//  Headerblock Content
//
//*****************************************************************
// Reference: https://www.w3schools.com/howto/howto_js_tab_header.asp

// Default header when page loads
document.getElementById('default').style.display = "block";

// Changes the page depending on the button that's hovered over.
function openDev(evt, devName) {
    //Initialization
    var k, pagecontent, pageaction;
    
    // Get all elements that have a class of ‘pagecontent’
    pagecontent = document.getElementsByClassName("pagecontent");

    // 
    for (k = 0; k < pagecontent.length; k++) {
        pagecontent[k].style.display = "none";
    }

    pageaction = document.getElementsByClassName("pageaction");

    for (k = 0; k < pageaction.length; k++) {
        pageaction[k].className = pageaction[k].className.replace(" active", "");
    }

    // Show the specific tab content
    document.getElementById(devName).style.display = "block";
    evt.currentTarget.className += " active";

}



// ****************************************************************
//  Accordion for Courses
//
//*****************************************************************
// Reference: https://www.w3schools.com/howto/howto_js_accordion.asp

// Initialization
var coll = document.getElementsByClassName("course");
var j;

for (j = 0; j < coll.length; j++) {
  coll[j].addEventListener("click", function() {
    
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } 
    else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 

  });
}



// ****************************************************************
//  Project Slideshow
//
//*****************************************************************
// Reference: https://www.w3schools.com/howto/howto_js_slideshow.asp
// ** Most of this code is from Unit 4 and is unchanged from its source.
//    Most of the changes were in css.

// Initialization
var slideIndex = 1;

// Call function
showSlides(slideIndex);

// Function for Next/Previous buttons
function changeSlides(n) {
  showSlides(slideIndex += n);
}

// Function for Dot buttons
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function for slides
function showSlides(n) {

  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}



// ****************************************************************
//  Google Maps
//
//*****************************************************************
// Tutorial Reference: https://tutorialzine.com/2018/05/the-simplest-way-to-add-google-maps

var map = new GMaps({
  el: '#map',
  lat:  43.260879,
  lng: -79.9214141
});

map.addMarker({
  lat: 43.260879,
  lng: -79.9214141,
  title: 'New York',
  infoWindow: {
    content: 'McMaster University'
  }
});

map.setZoom(12);




/*
// ****************************************************************
//    Sliding Menu             REMOVED      
//
//
//*****************************************************************
// References: 
// https://developer.mozilla.org/en-US/docs/Web/API/Element/className
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://medium.com/@pddivine/javascript-bang-bang-i-shot-you-down-use-of-double-bangs-in-javascript-7c9d94446054
// https://www.w3schools.com/jsref/met_element_addeventlistener.asp
// https://www.w3schools.com/howto/howto_js_sidenav.asp

// prevents run before document is loaded
document.addEventListener('readystatechange', function() {
  if (document.readyState === "complete") {
      clickEvent();
  }
});

// Variables:
// e = element
// c = class

// checks if any of the selected elements have a specified class name
function hasClass(e, c) {
  return !!e.className.match(new RegExp('(\\s|^)' + c + '(\\s|$)'));
}

// adds one or more class names to the selected elements
function addClass(e, c) {
  if (!hasClass(e, c)) e.className += " " + c;
  if (!hasClass(e, c)) e.className += " " + c;
}

// removes one or more class names from the selected elements
function removeClass(e, c) {
  if (hasClass(e, c)) {
      var re = new RegExp('(\\s|^)' + c + '(\\s|$)');
      e.className = e.className.replace(re, ' ');
  }
}

// JS click event
function clickEvent() {
  document.getElementById("menu-slide").addEventListener("click", slideMenu);
}

// menu fuction
function slideMenu() {
  var e = document.getElementsByTagName('body')[0];

  if (!hasClass(e, "open")) {
      addClass(e, "open");
  } else {
      removeClass(e, "open");
  }
}
*/



/*
// ****************************************************************
//  Simple Contact Form       REMOVED
//
// 	References:
// 	https://www.w3schools.com/js/js_validation.asp
//	https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
//  https://www.w3schools.com/jsref/met_element_setattribute.asp
//	https://www.w3schools.com/jsref/met_node_appendchild.asp

//	Fetch HTML Elements in variables by ID
var begin = document.getElementById("contact_form");

// Create New Element form
var emailForm = document.createElement('form'); 

// Line Break
var newLine = document.createElement('br');

// Labels
var title = document.createElement('h2'); 
var nameLabel = document.createElement('label'); 
var emailLabel = document.createElement('label'); 
var messageLabel = document.createElement('label');

// Inputs
var nameInput = document.createElement('input'); 
var emailInput = document.createElement('input'); 
var messageBox = document.createElement('textarea');

// Buttons
var submitButton = document.createElement('input');


// Set Attributes
emailForm.setAttribute("action", "mailto:nicolace@mcmaster.ca");
emailForm.setAttribute("method", "post");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "dname");
emailInput.setAttribute("type", "text");
emailInput.setAttribute("name", "demail");
messageBox.setAttribute("name", "dmessage");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("name", "dsubmit");
submitButton.setAttribute("value", "Submit");

 
// Assign strings to labels
title.innerHTML = "Contact Me";
nameLabel.innerHTML = "Name : ";
emailLabel.innerHTML = "Email : ";
messageLabel.innerHTML = "Message : ";
 
 
 // Show elements
begin.appendChild(emailForm);
 
emailForm.appendChild(title);
emailForm.appendChild(newLine);
 
emailForm.appendChild(nameLabel);
emailForm.appendChild(nameInput);
emailForm.appendChild(newLine);

emailForm.appendChild(emailLabel);
emailForm.appendChild(emailInput);
emailForm.appendChild(newLine);
 
emailForm.appendChild(messageLabel);
emailForm.appendChild(messageBox);
emailForm.appendChild(newLine);
 
emailForm.appendChild(submitButton);
 
*/


