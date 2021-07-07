function signIn(){

    var email = $('#email-signin').val();
    var password = $('#pass-signin').val();

    console.log(email, password)

    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {

      
      // Signed in
      var user = userCredential.user;

      
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });


}

function signOut(){
    firebase.auth().signOut().then(() => {
      location.href = "/";
      }).catch((error) => {
        // An error happened.
      });
}