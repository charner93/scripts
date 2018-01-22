function onFormSubmit{
	getForm = document.getElementsByTagName("form");
	usernameForm = getForm[0][0].value;
	passwordForm = getForm[0][0].value;
	alert(usernameForm + " " + passwordForm);
}
document.forms[0].onsubmit = onFormSubmit;
