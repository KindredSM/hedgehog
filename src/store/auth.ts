import { defineStore } from "pinia";
import * as api from "../scripts/api";

// define authentication store
export const useAuthStore = defineStore("auth", {
  // define state of the store and check if the user is authenticated
  state: () => ({
    email: null as string | null,
    isAuthenticated:
      localStorage.getItem("isAuthenticated") === "true" || false,
  }),
  actions: {
    //  registering a new user
    async register(user: any) {
      await api.registerUser(user);
    },
    // log in the user
    login(email: string, password: string) {
      const user = api.authenticateUser(email, password);
      if (user) {
        this.email = email;
        this.isAuthenticated = true;
        localStorage.setItem("isAuthenticated", "true");
        return true;
      } else {
        return false;
      }
    },
    // log out the user
    logout() {
      this.email = null;
      this.isAuthenticated = false;
      localStorage.removeItem("isAuthenticated");
    },
  },
});
