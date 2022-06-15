const form = document.getElementById("signupForm");
const formInputs = form.getElementsByClassName("form-input");

form.addEventListener("submit", function(ev){
    ev.preventDefault();

    let formInvalid = false;

    for (let inputDiv of formInputs) {
        let input = inputDiv.getElementsByTagName("input")[0];
        let errorMsg = inputDiv.getElementsByTagName("p")[0];
        if (input.validity.valid){
            input.className = "";
            errorMsg.className = "hidden";
        }
        else {
            formInvalid = true;
            input.className = "invalid";
            errorMsg.className = "form-error";
        }
    }

    if (!formInvalid) {
        form.reset()
    }
});