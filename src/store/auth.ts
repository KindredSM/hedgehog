import { defineStore } from "pinia";
import * as api from "../scripts/api";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    email: null as string | null,
    isAuthenticated:
      localStorage.getItem("isAuthenticated") === "true" || false,
  }),
  actions: {
    async register(user: any) {
      await api.registerUser(user);
    },
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
    logout() {
      this.email = null;
      this.isAuthenticated = false;
      localStorage.removeItem("isAuthenticated");
    },
  },
});
