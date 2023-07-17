const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formEmail = event.currentTarget.elements.email;
    const formPass = event.currentTarget.elements.password;

    if (formEmail.value === "" || formPass.value === "") {
        return alert('Всі поля повинні бути заповнені!')
    }

    const formUserData = {
        Email: formEmail.value,
        Password: formPass.value,
    }
    console.log(formUserData);

    event.currentTarget.reset();
}