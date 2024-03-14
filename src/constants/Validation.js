const emailValidator = email => {
  // const re = /\S+@\S+\.\S+/;
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (!email) return 'Please enter email address.';
  if (!email.trim()) return 'Please enter email address.';
  if (!re.test(email)) return 'Please enter valid email address.';
  return '';
};

// Regular expressions to check for required criteria
const lowercaseRegex = /[a-z]/;
const uppercaseRegex = /[A-Z]/;
const numberRegex = /[0-9]/;
const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

const passwordValidator = password => {
  if (!password) return 'Please enter a password.';
  if (password.trim() === '') return 'Please enter a password.';

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

  if (!password.match(passwordRegex)) {
    return (
      'Password must meet the following criteria:\n' +
      '- Contain at least one lowercase character\n' +
      '- Contain at least one uppercase character\n' +
      '- Contain at least one number\n' +
      '- Contain at least one special character\n' +
      '- Be at least 8 characters long'
    );
  }

  return '';
};

const registerValidation = (
  username,
  email,
  phoneNumber,
  password,
  confirmPassword,
) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
  if (username.trim() === '') {
    return 'Please enter username';
  } else if (!email.trim() === '') {
    return 'Please enter email address';
  } else if (!re.test(email)) {
    return 'Please enter valid email address';
  } else if (!password.match(passwordRegex)) {
    return (
      'Password must meet the following criteria:\n' +
      '- Contain at least one lowercase character\n' +
      '- Contain at least one uppercase character\n' +
      '- Contain at least one number\n' +
      '- Contain at least one special character\n' +
      '- Be at least 8 characters long'
    );
  } else if (confirmPassword === '') {
    return 'Please confirm your password';
  } else if (confirmPassword !== password) {
    return 'Confirm password should match with the entered password';
  } else if (phoneNumber.trim() === '') {
    return 'Please enter your phone number';
  } else if (phoneNumber.length < 12) {
    return 'Invalid phone number, phone number should be 10 digit';
  } else {
    return '';
  }
};

const loginValidation = (username, userName, password, userPassword) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
  if (username === '') {
    return 'Please enter username';
  } else if (!password.match(passwordRegex)) {
    return (
      'Password must meet the following criteria:\n' +
      '- Contain at least one lowercase character\n' +
      '- Contain at least one uppercase character\n' +
      '- Contain at least one number\n' +
      '- Contain at least one special character\n' +
      '- Be at least 8 characters long'
    );
  } else if (userName !== username && userPassword !== password) {
    return 'User not found';
  } else {
    return '';
  }
};

export {emailValidator, passwordValidator, registerValidation, loginValidation};
