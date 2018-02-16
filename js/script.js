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