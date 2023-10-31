<template>
  <div class="wrapper">
    <h2 class="title">My Validatioon Form</h2>

    <ui-form @submit.prevent="registerUser">
      <ui-input
        name="email"
        placeholder="Yor Email*"
        type="email"
        :value="email"
        @focus="(event) => handleFocus(event, 'email')"
        @input="(event) => handleInputValue(event, 'email')"
        @blur="(event) => handleBlur(event, 'email')"
        :class="{ invalid: errorsFormData?.email?.errors.length != 0 }"
      />
      <ui-error
        v-for="error in errorsFormData?.email?.errors ?? []"
        :key="error"
        :text="error"
      />

      <ui-input
        name="password"
        placeholder="Yor Password*"
        type="password"
        :value="password"
        @focus="(event) => handleFocus(event, 'password')"
        @input="(event) => handleInputValue(event, 'password')"
        @blur="(event) => handleBlur(event, 'password')"
        :class="{ invalid: errorsFormData?.password?.errors.length != 0 }"
      />
      <ui-error
        v-for="error in errorsFormData?.password?.errors ?? []"
        :key="error"
        :text="error"
      />

      <ui-input
        name="confirm_password"
        placeholder="Confirm Password*"
        type="password"
        :value="confirm_password"
        @focus="(event) => handleFocus(event, 'confirm_password')"
        @input="(event) => handleInputValue(event, 'confirm_password')"
        @blur="(event) => handleBlur(event, 'confirm_password')"
        :class="{
          invalid: errorsFormData?.confirm_password?.errors.length != 0,
        }"
      />
      <ui-error
        v-for="error in errorsFormData?.confirm_password?.errors ?? []"
        :key="error"
        :text="error"
      />

      <ui-btn>Submit</ui-btn>
    </ui-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  errorsFormData,
  validateField,
  createErrorObj,
} from "@/utils/validation";
import UiForm from "@/components/Block/UiForm.vue";
import UiInput from "@/components/Block/UiInput.vue";
import UiBtn from "@/components/Block/UiBtn.vue";
import UiError from "@/components/Block/UiError.vue";

const email = ref("");
const password = ref("");
const confirm_password = ref("");

function handleFocus(event, name) {
  createErrorObj(name);
  errorsFormData[name].isDirty = true;
}

function handleInputValue(event, name) {
  switch (name) {
    case "email":
      email.value = event.target.value;
      validateField(email.value, "email");
      break;

    case "password":
      password.value = event.target.value;
      validateField(password.value, "password");
      break;

    case "confirm_password":
      confirm_password.value = event.target.value;

      validateField((confirm_password.value = event.target.value), name);
      break;
  }
}

function handleBlur(event, name) {
  switch (name) {
    case "email":
      validateField((email.value = event.target.value), name);
      break;

    case "password":
      validateField((password.value = event.target.value), name);
      break;

    case "confirm_password":
      confirm_password.value = event.target.value;

      validateField(
        (confirm_password.value = event.target.value),
        name,
        password.value
      );
      break;
  }
}

function doValidateForm() {
  createErrorObj("email");
  createErrorObj("password");
  createErrorObj("confirm_password");

  validateField(email.value, "email");
  validateField(password.value, "password");
  validateField(confirm_password.value, "confirm_password");
}

function isFormValid() {
  return Object.values(errorsFormData).some((e) => {
    return e.errors.length > 0;
  });
}

function registerUser() {
  doValidateForm();

  if (!isFormValid()) {
    console.group();
    console.log("email:", email.value);
    console.log("password:", password.value);
    console.log("confirm password:", confirm_password.value);
    console.groupEnd();
  }

  email.value = "";
  password.value = "";
  confirm_password.value = "";
}
</script>

<style lang="scss">
.wrapper {
  padding-top: 200px;
}
.title {
  font-family: Roboto, sans-serif;
  font-weight: 700;
  text-align: center;
}
.invalid {
  animation: invalid 0.5s 2;

  @keyframes invalid {
    25% {
      // border: 2px solid darkred;
      box-shadow: 4px 4px 8px -3px darkred;
      translate: 6px 0;
    }
    50% {
      translate: -6px 0;
    }
    75% {
      translate: 6px 0;
    }
  }
}
</style>
