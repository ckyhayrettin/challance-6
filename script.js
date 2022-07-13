const form = document.querySelector('#form');
const email = document.querySelector('#email')

form.addEventListener('submit', function () {
    if (email.value == '') {
        email.classList.add('email-show')
        email.nextElementSibling.classList.add('show-error')
    } else {
        email.classList.remove('email-show')
        email.nextElementSibling.classList.remove('show-error')
        if (email.type == 'email') {
            if (validateEmail(email.value)) {
                email.classList.remove('email-show')
                email.nextElementSibling.classList.remove('show-error')
            } else {
                email.classList.add('email-show')
                email.nextElementSibling.classList.add('show-error')
            }
        }
    }
});

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};