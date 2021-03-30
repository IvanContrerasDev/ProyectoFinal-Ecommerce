export interface form {
  firstName: string;
  lastName: string;
  userName: string;
  isAdmin: boolean;
  email: string;
  password: string;
  nlsuscribe: boolean;
	isGmail: boolean;
  error: boolean;
}

export function validateChange(e: any, form: form, error: boolean) {
  switch (e.target.name) {

    default:
      return { ...form, [e.target.name]: e.target.value, error };
  }
}

function validateEmail(email: string) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function validatePassword(password: string){
  const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  return passw.test(String(password));
}

export const check = (e: any, form: form) => {
  const span = document.querySelector(".span_" + e.target.name);
  
  if (!e.target.value) {

    if (span) span.innerHTML = "All fields are required";
    return true;

  } else if (span.className === 'span_email') {

    if(!validateEmail(e.target.value)){
      span.innerHTML = "It must be a valid email address";
    }else{
      span.innerHTML = "";
    }

  } else if (span.className === 'span_password') {
    
    if(!validatePassword(e.target.value)){
      span.innerHTML = "Should be contain at least one number and one uppercase";
    }else{
      span.innerHTML = "";
    }

  } else {
    if (span) span.innerHTML = "";
    for (const prop in form) {
      if ((Array.isArray(form[prop]) || typeof form[prop] === 'string') && !form[prop].length) return true;
      if (typeof form[prop] === 'number' && !form[prop]) return true;
    }
    return false;
  }
};
