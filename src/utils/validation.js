import { reactive } from "vue";

const defaultErrorObject = {
  isDirty: false,
  errors: [],
}; //create a default object with an error for each input

export const errorsFormData = reactive({}); //create a reactive object to store errors

export function createErrorObj(name) {
  errorsFormData[name] = { ...defaultErrorObject }; //create a function that will create a default object with errors where the object key is the name of the input
}
export function validateField(value, name, password) {
  //we check the input fields where the name parameter is the name of the input, the value parameter is the input value, password is the password input value for comparison

  errorsFormData[name].errors = []; //reset the error value in the object so that errors are not duplicated

  // Is required
  if (!value) {
    errorsFormData[name].errors.push("This Field is required!");
  }

  // Min  length
  if (!!value && value.length <= 5) {
    errorsFormData[name].errors.push("minimum number of characters 6");
  }

  // Max length
  if (!!value && value.length > 50) {
    errorsFormData[name].errors.push("This Field should be lessthan 50 chars!");
  }

  //Match password
  if (name == "confirm_password" && value != password) {
    errorsFormData.confirm_password.errors = [];

    errorsFormData.confirm_password.errors.push(
      "The password must be the same!"
    );
  }
}
