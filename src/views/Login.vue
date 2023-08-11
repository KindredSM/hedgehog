<template>
  <div>
    <div class="auth-container">
      <form @submit.prevent="login">
        <h1>Log in to your <span class="blue">account</span></h1>
        <div class="input-container">
          <h2>Email</h2>
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
        <button class="auth-button">Login</button>
        <p>{{ errorMessage }}</p>
        <p>
          Want to create an account?
          <router-link to="/" class="blue">Register</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import passwordIcon from "../assets/passwordIcon.vue";
import emailIcon from "../assets/emailIcon.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";

const auth = useAuthStore();
const router = useRouter();
const email = ref<string>("");
const password = ref<string>("");
const errorMessage = ref<string>("");

// call login function and log the user in
const login = () => {
  const success = auth.login(email.value, password.value);

  if (success) {
    errorMessage.value = "";
    router.push("/dashboard");
  } else {
    // form validation
    errorMessage.value = "Invalid email or password.";
  }
};
</script>
