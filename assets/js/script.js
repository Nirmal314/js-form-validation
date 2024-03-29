const form = document.getElementById('student-form')
const requiredField = "This field is required";

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('dob').min = '1900-01-01'
    document.getElementById('dob').max = new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0]

    const min_gray_year = new Date(new Date().setFullYear(new Date().getFullYear() + 5)).toISOString().split('T')[0].split('-')
    min_gray_year.splice(-1)
    document.getElementById('grad_year').min = min_gray_year.join('-')

    const max_grad_year = new Date(new Date().setFullYear(new Date().getFullYear() + 20)).toISOString().split('T')[0].split('-')
    max_grad_year.splice(-1)
    document.getElementById('grad_year').max = max_grad_year.join('-')

})

const validateName = (name) => {
    name = name.trim()

    const nameRegex = /^[A-Za-z]+$/

    if (name === '')
        return requiredField

    if (!nameRegex.test(name))
        return "Please enter a valid name"

    if (!(name.length >= 2 && name.length <= 30))
        return "Name's length must be between 2 to 30 characters."

    return true
}
const validateEmail = (email) => {
    email = email.trim()

    // ? regex = [\w-\.]+ -------> accept one or more letters (A-Za-z), '-'s and '.'s
    // ? regex = @([\w-]+\.)+ ---> accept one or more letters and '-' then one '.' is must, after the '@'
    // ? regex = [\w-]{2,4} -----> accept 2 to 4 letters which must be letters and '-'
    // ! const    emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    // ! const emailRegex = /^[\w-\.]+@([\w-]+\.)+\w{2,4}$/

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    if (email === '') return requiredField
    else if (!emailRegex.test(email)) return "Please enter a valid email."

    return true
}
const validatePassword = (password) => {
    password = password.trim()
    // ! const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[@$\-_+=?#&]).{8,}$/

    if (password === '') return requiredField

    if (password.length < 8)
        return 'Password must be at least 8 characters long';

    if (!/(?=.*\d)/.test(password))
        return 'Password must contain at least one digit';

    if (!/(?=.*[a-z])/.test(password))
        return 'Password must contain at least one lowercase letter';

    if (!/(?=.*[A-Z])/.test(password))
        return 'Password must contain at least one uppercase letter';

    if (!/(?=^[a-zA-Z0-9@$\-_+=?#&]+$)/.test(password))
        return 'Password must contain only alphanumeric characters and special characters (@ $ - _ = + ? # &)';


    return true
}
const validatePasswords = (password, cpassword) => {
    password = password.trim()
    cpassword = cpassword.trim()

    if (password === '' || cpassword === '') return requiredField

    if (validatePassword(password) === true && validatePassword(cpassword) === true)
        return password !== cpassword ? "Passwords do not match" : true

}
const validateAddress = (address) => {
    address = address.trim()

    if (address === '') return requiredField

    if (!(address.length >= 5 && address.length <= 100))
        return "Address's length must be between 5 to 100 characters."

    return true
}
const validateEducation = (education) => {
    return education.length === 0 ? "At least one field is required." : true
}
const validateGender = (gender) => {
    return true
}
const validateDOB = (dob) => {
    if (dob === '' || !dob) return requiredField

    dob = new Date(dob)
    const today = new Date()

    const minAgeDate = new Date(today)
    minAgeDate.setFullYear(today.getFullYear() - 18)

    if (dob > today)
        return "Please enter a valid birthdate."

    if (dob >= minAgeDate)
        return "Minimum age required is 18."

    return true
}
const validateGyear = (dob, grad_year) => {
    if (grad_year === '' || !grad_year) return requiredField

    dob = new Date(dob)
    grad_year = new Date(grad_year)

    if (dob.getFullYear() >= grad_year.getFullYear())
        return "Please enter a valid graduation year."

    return true
}
const validateBacklog = (backlog) => {
    backlog = parseInt(backlog)

    if (isNaN(backlog)) return requiredField + ', Only numbers are accepted'

    return backlog >= 0 && backlog <= 30 ? true : "Invalid/unacceptable backlogs"
}
const validateCity = (city) => {
    city = city.trim()

    if (parseInt(city) === -1) return requiredField

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

    const input_fname = document.getElementById('fname')
    const input_lname = document.getElementById('lname')
    const input_email = document.getElementById('email')
    const input_password = document.getElementById('password')
    const input_cpassword = document.getElementById('cpassword')
    const input_address = document.getElementById('address')

    // const education = []
    // let gender = "";

    const input_dob = document.getElementById('dob')
    const input_grad_year = document.getElementById('grad_year')
    const input_backlog = document.getElementById('backlog')

    const input_city = document.getElementById('city')

    const isFnameValid = validateName(fname)
    const isLnameValid = validateName(lname)
    const isEmailValid = validateEmail(email)

    const isPasswordValid = validatePassword(password)
    const isCpasswordValid = validatePassword(cpassword)
    const arePasswordsSame = validatePasswords(password, cpassword)

    const isAddressValid = validateAddress(address)
    const isEducationValid = validateEducation(education)
    const isGenderValid = validateGender(gender)
    const isDOBValid = validateDOB(dob)
    const isGyearValid = validateGyear(dob, grad_year)
    const isBacklogValid = validateBacklog(backlog)
    const isCityValid = validateCity(city)

    if (
        isFnameValid === true &&
        isLnameValid === true &&
        isEmailValid === true &&
        isPasswordValid === true &&
        isCpasswordValid === true &&
        arePasswordsSame === true &&
        isAddressValid === true &&
        isEducationValid === true &&
        isGenderValid === true &&
        isDOBValid === true &&
        isGyearValid === true &&
        isBacklogValid === true &&
        isCityValid === true
    ) return true

    console.log({
        isFnameValid,
        isLnameValid,
        isEmailValid,
        isPasswordValid,
        isCpasswordValid,
        arePasswordsSame,
        isAddressValid,
        isEducationValid,
        isGenderValid,
        isDOBValid,
        isGyearValid,
        isBacklogValid,
        isCityValid
    })

    if (typeof isFnameValid === 'string') {
        const error = isFnameValid
        input_fname.classList.add('is-invalid')
        input_fname.classList.remove('is-valid')

        document.getElementById('fname-error').innerHTML = error
    } else {
        input_fname.classList.add('is-valid')
        input_fname.classList.remove('is-invalid')
    }
    if (typeof isLnameValid === 'string') {
        const error = isLnameValid
        input_lname.classList.add('is-invalid')
        input_lname.classList.remove('is-valid')

        document.getElementById('lname-error').innerHTML = error
    } else {
        input_lname.classList.add('is-valid')
        input_lname.classList.remove('is-invalid')
    }
    if (typeof isEmailValid === 'string') {
        const error = isEmailValid
        input_email.classList.add('is-invalid')
        input_email.classList.remove('is-valid')

        document.getElementById('email-error').innerHTML = error
    } else {
        input_email.classList.add('is-valid')
        input_email.classList.remove('is-invalid')
    }

    // if (typeof arePasswordsSame === 'string') {
    //     const error = arePasswordsSame
    //     input_password.classList.remove('is-valid')
    //     input_cpassword.classList.remove('is-valid')
    //     input_password.classList.add('is-invalid')
    //     input_cpassword.classList.add('is-invalid')

    //     document.getElementById('password-error').innerHTML = error
    //     document.getElementById('cpassword-error').innerHTML = error
    // } else {
    //     if (typeof isCpasswordValid === 'string') {
    //         const error = isCpasswordValid
    //         input_cpassword.classList.add('is-invalid')
    //         input_cpassword.classList.remove('is-valid')

    //         document.getElementById('password-error').innerHTML = error

    //     } else {
    //         input_cpassword.classList.add('is-valid')
    //         input_cpassword.classList.remove('is-invalid')
    //     }
    //     if (typeof isPasswordValid === 'string') {
    //         const error = isPasswordValid
    //         input_password.classList.add('is-invalid')
    //         input_password.classList.remove('is-valid')

    //         document.getElementById('cpassword-error').innerHTML = error
    //     } else {
    //         input_password.classList.add('is-valid')
    //         input_password.classList.remove('is-invalid')

    //     }
    // }
    if (typeof isAddressValid === 'string') {
        const error = isCpasswordValid
        input_address.classList.add('is-invalid')
        input_address.classList.remove('is-valid')

        document.getElementById('address-error').innerHTML = error

    } else {
        input_address.classList.add('is-valid')
        input_address.classList.remove('is-invalid')
    }

    if (typeof isEducationValid === 'string') {
        const error = isEducationValid
    }
    if (typeof isGenderValid === 'string') {
        const error = isGenderValid
    }

    if (typeof isDOBValid === 'string') {
        const error = isDOBValid
        input_dob.classList.add('is-invalid')
        input_dob.classList.remove('is-valid')

        document.getElementById('dob-error').innerHTML = error

    } else {
        input_dob.classList.add('is-valid')
        input_dob.classList.remove('is-invalid')
    }
    if (typeof isGyearValid === 'string') {
        const error = isGyearValid
        input_grad_year.classList.add('is-invalid')
        input_grad_year.classList.remove('is-valid')

        document.getElementById('gyear-error').innerHTML = error

    } else {
        input_grad_year.classList.add('is-valid')
        input_grad_year.classList.remove('is-invalid')
    }
    if (typeof isBacklogValid === 'string') {
        const error = isBacklogValid
        input_backlog.classList.add('is-invalid')
        input_backlog.classList.remove('is-valid')

        document.getElementById('backlog-error').innerHTML = error

    } else {
        input_backlog.classList.add('is-valid')
        input_backlog.classList.remove('is-invalid')
    }
    if (typeof isCityValid === 'string') {
        const error = isCityValid
        input_city.classList.add('is-invalid')
        input_city.classList.remove('is-valid')

        document.getElementById('city-error').innerHTML = error

    } else {
        input_city.classList.add('is-valid')
        input_city.classList.remove('is-invalid')
    }

    return false
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

    console.log(isFormValid)

}