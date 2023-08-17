//step-01: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //console.log('submit button clicked')
    //step-02: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //console.log(email)

    //step-03: get password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password);

    //Danger: do not verify email password on the client side
    // step-04: verify email and password
    if(email === 'santan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html'
    }
    else{
        alert('tui password vule gesos!! tore ami teijjo sontan ghosona korlam')
    }
})