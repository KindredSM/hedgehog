<template>
  <div>
    <div class="dashboard-container">
      <h1 class="blue">Users</h1>
      <!-- transition on deletion of list item -->
      <transition-group name="fade" tag="ul">
        <li v-for="user in users" :key="user.email" class="user">
          {{ user.firstName }}
          <button @click="deleteUser(user.email)" class="delete">
            <delete-icon />
          </button>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import deleteIcon from "../assets/deleteIcon.vue";
import * as api from "../scripts/api";

const users = ref<any[]>([]);

// retrieve list of users
const getUsers = () => {
  users.value = api.getUsers();
};

// call delete function and delete selected user
const deleteUser = (email: string) => {
  api.deleteUser(email);
  getUsers();
};

onMounted(getUsers);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.dashboard-container {
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  border-radius: 2px;
  background-color: white;
  margin: 0 auto;
}

.logout {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

ul {
  width: 100%;
  height: 100%;
  overflow: scroll;
}

.user {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.delete {
  background: none;
  transition: ease 0.2s;
}

.delete:hover {
  opacity: 0.5;
}

@media screen and (max-width: 630px) {
  .dashboard-container {
    max-width: 60vw;
  }
}
</style>
