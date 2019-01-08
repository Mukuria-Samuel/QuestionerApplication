/////// validation code //////

function validate(form) {
	if(form.username.value == "admin" && form.password.value == "admin1")
	{
		window.alert("Admin dashboard")
	}
	else if (form.username.value == "samk" && form.password.value == "#samk123")
	{
		window.open('home.html')
	}
	else{
		window.alert('Username or password incorrect')
	}
}

//////// load signup page code ///////

