

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location.href='quiz.html';
  }
});


function signup()
{
	
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	window.alert("Error: " + errorMessage);
	});
}

function login(){

	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	
	firebase.auth().signInWithEmailAndPassword(email, password).then(function (){
		window.alert("Sign-in successfully!");
	}).catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	window.alert("Error: " + errorMessage);
  
	});	
}




