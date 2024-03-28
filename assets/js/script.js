const form = document.getElementById('student-form')

const validateFname = (fname) => {
    const nameRegex = /^[A-Za-z]$/

    if (!nameRegex.test(fname)) {
        return "Please enter a valid name"
    } else if (!(fname.length() >= 2 && fname.length() <= 30)) {
        return "Name's length must be between 2 to 30 characters."
    }
    return true
}
const validateLname = (lname) => {
    const nameRegex = /^[A-Za-z]$/

    if (!nameRegex.test(lname)) {
        return "Please enter a valid name"
    } else if (!(lname.length() >= 2 && fname.length() <= 30)) {
        return "Name's length must be between 2 to 30 characters."
    }
    return true
}
const validateEmail = (email) => {
    return true
}
const validatePasswords = (password, cpassword) => {
    return true
}
const validateAddress = (address) => {
    return true
}
const validateEducation = (education) => {
    return true
}
const validateGender = (gender) => {
    return true
}
const validateDOB = (dob) => {
    return true
}
const validateGyear = (grad_year) => {
    return true
}
const validateBacklog = (backlog) => {
    return true
}
const validateCity = (city) => {
    return true
}

const validate = (data) => {
    const {
        fname,
        lname,
        email,
        password,
        cpassword,
        address,
        education,
        gender,
        dob,
        grad_year,
        backlog,
        city
    } = data

    const isFnameValid = validateFname(fname)
    const isLnameValid = validateLname(lname)
    const isEmailValid = validateEmail(email)
    const isPasswordsValid = validatePasswords(password, cpassword)
    const isAddressValid = validateAddress(address)
    const isEducationValid = validateEducation(education)
    const isGenderValid = validateGender(gender)
    const isDOBValid = validateDOB(dob)
    const isGyearValid = validateGyear(grad_year)
    const isBacklogValid = validateBacklog(backlog)
    const isCityValid = validateCity(city)

    if (isFnameValid) {
        console.log('isFnameValid valid')
    }
    if (isLnameValid) {
        console.log('isLnameValid valid')
    }

    return true
}

form.onsubmit = (e) => {
    e.preventDefault()

    const fname = document.getElementById('fname').value
    const lname = document.getElementById('lname').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const cpassword = document.getElementById('cpassword').value
    const address = document.getElementById('address').value

    const education = []
    let gender = "";

    const dob = document.getElementById('dob').value
    const grad_year = document.getElementById('grad_year').value
    const backlog = document.getElementById('backlog').value

    const city = document.getElementById('city').value

    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        if (checkbox.checked) {
            education.push(checkbox.value)
        }
    })

    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        if (radio.checked) {
            gender = radio.value
        }
    })

    const form_data = {
        fname,
        lname,
        email,
        password,
        cpassword,
        address,
        education,
        gender,
        dob,
        grad_year,
        backlog,
        city
    }

    const isFormValid = validate(form_data)

    if (isFormValid) {
        console.log(isFormValid)
    }
}