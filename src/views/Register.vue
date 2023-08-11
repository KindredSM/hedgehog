<template>
  <div class="auth-container">
    <form @submit.prevent="register">
      <h1>Create an <span class="blue">account</span></h1>
      <div class="name-container">
        <div class="name-section">
          <h2>First name</h2>
          <div class="input-logo-container">
            <user-icon class="icon" />
            <input type="text" placeholder="first name" v-model="firstName" />
          </div>
        </div>
        <div class="name-section">
          <h2>Last name</h2>
          <div class="input-logo-container">
            <user-icon class="icon" />
            <input type="text" placeholder="last name" v-model="lastName" />
          </div>
        </div>
      </div>
      <div class="input-container">
        <h2>email</h2>
        <div class="input-logo-container">
          <email-icon class="icon" />
          <input type="email" placeholder="email" v-model="email" />
        </div>
      </div>
      <div class="input-container">
        <h2>Password</h2>
        <div class="input-logo-container">
          <password-icon class="icon" />
          <input type="password" placeholder="password" v-model="password" />
        </div>
      </div>
      <button class="auth-button">Register</button>
      <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
      <p>
        already a user?
        <router-link to="/login" class="blue">Log in </router-link>
      </p>
    </form>
  </div>
</template>

<script lang="ts" setup>
import passwordIcon from "../assets/passwordIcon.vue";
import emailIcon from "../assets/emailIcon.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import userIcon from "../assets/userIcon.vue";
import { useAuthStore } from "../store/auth";

const auth = useAuthStore();
const router = useRouter();
const email = ref<string>("");
const password = ref<string>("");
const firstName = ref<string>("");
const lastName = ref<string>("");
const errorMessage = ref<string>("");

const register = async () => {
  // form validation
  if (!email.value || !password.value || !firstName.value || !lastName.value) {
    errorMessage.value = "All fields are required.";
    return;
  }

  // call registration function and register the user
  try {
    await auth.register({
      email: email.value,
      password: password.value,
      firstName: firstName.value,
      lastName: lastName.value,
    });
    router.push("/dashboard");
  } catch (error) {
    console.error(error);
    errorMessage.value = "Something went wrong. Please try again.";
  }
};
</script>

<style>
.error {
  color: red;
}
</style>
