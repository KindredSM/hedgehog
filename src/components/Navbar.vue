<template>
  <nav class="nav">
    <img src="../assets/hedgehob-lab.png" alt="logo" class="logo" />
    <div class="logout-container" @click="logout" v-if="isAuthenticated">
      <p class="logout">logout</p>
      <logout-icon class="logout-icon" />
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: absolute;
  top: 20px;
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.logo {
  margin-left: 30px;
  width: 175px;
}

.logout-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-right: 30px;
  cursor: pointer;
  transition: ease 0.2s;
}

.logout-container:hover {
  opacity: 0.7;
}

.logout {
  color: white;
}

@media screen and (max-width: 370px) {
  .logout {
    display: none;
  }
}
</style>

<script lang="ts" setup>
import { useAuthStore } from "../store/auth";
import logoutIcon from "../assets/logoutIcon.vue";
import { useRouter } from "vue-router";
import { computed } from "vue";

const auth = useAuthStore();
const router = useRouter();
const isAuthenticated = computed(() => auth.isAuthenticated);

// call logout function
const logout = () => {
  auth.logout();
  router.push("/login");
};
</script>
