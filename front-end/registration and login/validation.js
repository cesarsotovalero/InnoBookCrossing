


function InvalidMsg(textbox) {
    const password=document.getElementById('password')
    t=textbox.value
    if (textbox.value !== password.value) {
        textbox.setCustomValidity('Password do not match!');
    }

    else {
       textbox.setCustomValidity('');
    }
    return true;
    
}