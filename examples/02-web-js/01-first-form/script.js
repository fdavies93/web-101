let nameElement, emailElement, feedbackElement, formElement;

const showInvalid = (ev) => {
    // adds a CSS class to the object which called the event
    ev.target.classList.add("invalid");
}

// this function only triggers where all the input is valid, which can be specified with HTML
const formOnSubmit = (ev) => {
    // this prevents the page from reloading, which is default behaviour on submit
    ev.preventDefault();
    // in a real form, there would be some kind of call to a server
    // this is just a cute use of array.join
    alert(
        [
        `Name: ${nameElement.value}`,
        `Email: ${emailElement.value}`,
        `Feedback: ${feedbackElement.value}`].join('\n')
    )
    // clear the contents of the textboxes
    nameElement.value = "";
    emailElement.value = "";
    feedbackElement.value = "";
    // remove the invalid class from name & email boxes
    nameElement.classList.remove("invalid");
    emailElement.classList.remove("invalid");
}

window.onload = (ev) => {
    // get the form elements to variables
    nameElement = document.getElementById("name");
    emailElement = document.getElementById("email");
    feedbackElement = document.getElementById("feedback");
    formElement = document.getElementById("infoForm");
    // attach the events to the appropriate elements
    formElement.addEventListener("submit",formOnSubmit);
    nameElement.addEventListener("invalid",showInvalid);
    emailElement.addEventListener("invalid",showInvalid);
}