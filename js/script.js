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
	
	var slideIndex = 1;
	showSlides(slideIndex);
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

    