firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    window.location.href='index.html';
  }
});

function logout(){
	firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	  alert("Sign out successful");
	}).catch(function(error) {
	  // An error happened.
	  alert("Error signning out, please contact your web admin");
	});
}

