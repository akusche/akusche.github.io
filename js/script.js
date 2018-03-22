function loaded()
{
	var lang = getParameterValue("lang");
	if (lang != "") String.locale = lang;

	document.title = _(document.title);

	localizeHTMLTag("aboutus");
	localizeHTMLTag("rooms");
	localizeHTMLTag("price");
	localizeHTMLTag("location");
	localizeHTMLTag("contact");

	localizeHTMLTag("ueber_uns");
	localizeHTMLTag("ueber_uns_text");	
	localizeHTMLTag("kurse");
	localizeHTMLTag("preise");
	localizeHTMLTag("anfahrt");
	localizeHTMLTag("kontakt");
	
	
}


/* Einige Hilfsfunktionen: */

var _ = function (string) {
	return string.toLocaleString();
};

function localizeHTMLTag(tagId)
{
	tag = document.getElementById(tagId);
	tag.innerHTML = _(tag.innerHTML);
}

function getParameterValue(parameter)
{
	parameter = parameter.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + parameter + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if(results == null)
		return "";
	else
		return results[1];
}
/* Slider top */
  var slideIndexTop = 1;
  showSlidesTop(slideIndexTop);

// Next/previous controls
function plusSlidesTop(n) {
  showSlidesTop(slideIndexTop += n);
}

// Thumbnail image controls
function currentSlideTop(n) {
  showSlidesTop(slideIndexTop = n);
}

function showSlidesTop(n) {
  var i;
  var slidesTop = document.getElementsByClassName("mySlidesTop");
  var dots = document.getElementsByClassName("dotTop");
  if (n > slidesTop.length) {slideIndexTop = 1} 
  if (n < 1) {slideIndexTop = slidesTop.length}
  for (i = 0; i < slidesTop.length; i++) {
      slidesTop[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeTop", "");
  }
  slidesTop[slideIndexTop-1].style.display = "block"; 
  dots[slideIndexTop-1].className += " activeTop";
}


/*  Bilder Gallery*/


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}
    