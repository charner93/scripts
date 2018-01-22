function onFormSubmit{
	getForm = document.getElementByTagName("form");
	usernameForm = getForm[0][0].value;
	passwordForm = getForm[0][0].value;
	alert(usernameForm + " " + passwordForm);
}
document.forms[0].onsubmit = onFormSubmit;
