const validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data){
    let  errors = {}

    data.name = !isEmpty(data.name)?data.name:"";
    data.email = !isEmpty(data.email)?data.email:"";
    data.password1 = !isEmpty(data.password1)?data.password1:"";
    data.password2 = !isEmpty(data.password2)?data.password2:"";


    if(validator.isEmpty(data.name)){
        errors.name = "Name field is required";
    }

    if(validator.isEmpty(data.email)){
        errors.email = "Email is required";
    }else if(!validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }
    if(validator.isEmpty(data.password1)){
        errors.password1 = "password is required";
    }
    if(validator.isEmpty(data.password2)){
        errors.password2 = "confirm password is required";
    }

    if(!validator.isLength(data.password1,{min:6,max:undefined})){
        errors.password = "min length of the password should be 6";
    }
    if(!validator.equals(data.password1,data.password2)){
        errors.password2 = "passwords do not match"
    }

    return {
        errors,
        isValid:isEmpty(errors)
    };
}
