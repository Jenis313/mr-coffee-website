const form = document.getElementById('form');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const phone = document.querySelector('#phone')
const email = document.querySelector('#email')
const message = document.querySelector('#message');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const body = document.querySelector('body');

let userCheck = /^(([A-za-z]+[\s]{1}[A-za-z]+)|([A-Za-z]+))$/
let emailCheck = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
let phoneCheck = /^((\+61\s?)?(\((0|02|03|04|07|08)\))?)?\s?\d{1,4}\s?\d{1,4}\s?\d{0,4}$/

// Set events for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(checkInputs() === false){
        // INVALID INPUTS//////////
    }else{
        // VALID INPUTS/////////
       
        // Show popup
        modal.classList.add('modal-flex');
        body.classList.add('modal-active');
        form.classList.add('modal-active-form');

        // add events for close btn
        modalClose.addEventListener('click', () => {
            resetForm();
        });

        // Prevent modal from closing when it is clicked
        modal.addEventListener('click', (e) => {
            e.stopPropagation();
        })

        // Prevent form from resetting every time when window is clicked
        form.addEventListener('click', (e) => {
            e.stopPropagation();
        })

        // events for closing if user clicks outside modal
        window.addEventListener('click', () => {
            resetForm();
        })

        function resetForm(){
            modal.classList.remove('modal-flex');
            body.classList.remove('modal-active');
            form.classList.remove('modal-active-form');
            // Reset values
            form.reset();
            // Reset success class
            document.querySelectorAll('.success').forEach((element) => {
                element.classList.remove('success');
            })
        }
    }
})

// Validate inputs
function checkInputs(){
    if(!(userCheck.test(fname.value))){
        setErrorClass(fname, 'Invalid First Name!!!')
        return false;
    }else{
        setSuccessClass(fname);
    }

    if(!(userCheck.test(lname.value))){
        setErrorClass(lname, 'Invalid Last Name!!!');
        return false
    }else{
        setSuccessClass(lname);
    }

    if(emailCheck.test(email.value)){
        setSuccessClass(email);
    }else{
        setErrorClass(email, 'Invalid Email');
        return false;
    }

    if(message.value === ''){
        setErrorClass(message, "This field cannot be empty!");
        return false;
    }else{
        message.classList.remove('err')
    }
}

// add success class
function setSuccessClass(element){
    element.parentElement.className = 'success';
}

// add error class
function setErrorClass(element, message){
    const div = element.parentElement;
    const small = div.querySelector('small');
    small.innerText = message;
    div.className = 'err';
}
