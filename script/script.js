//Nav
	//Responsive Dropdown
		function myFunction() {
		  var x = document.getElementById("myTopnav");
		  if (x.className === "topnav") {
		    x.className += " responsive";
		  } else {
		    x.className = "topnav";
		  }
		}
	//Scroll
	var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	  if (prevScrollpos > currentScrollPos) {
	    document.getElementById("myTopnav").style.top = "0";
	  } else {
	    document.getElementById("myTopnav").style.top = "-15vh";
	  }
	  prevScrollpos = currentScrollPos;
	}
	// adding click events
	var els = document.querySelectorAll('a');
	[].forEach.call(els, function(el) {
	  el.addEventListener('click', function() {
	    [].forEach.call(els, function(clk) {
	      clk.classList.remove('active');
	    });
	    el.classList.add('active');
	  });
	});

//Accordion
var acc = document.getElementsByClassName("gtitulo");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("gactive");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}