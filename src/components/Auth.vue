<template>
  <v-container>
    <v-form ref="form" @submit.prevent="login">
      <v-text-field v-model="username" label="Username"></v-text-field>
      <v-text-field
        v-model="password"
        type="password"
        label="Password"
      ></v-text-field>
      <v-text-field
        v-if="registration"
        v-model="passwordConfirm"
        type="password"
        label="Confirm password"
      ></v-text-field>
      <v-btn type="submit" @click.prevent="submit">{{
        !registration ? "Log in" : "Register"
      }}</v-btn>
      <v-btn @click="toggleRegister">{{
        registration ? "Sign in instead" : "Register"
      }}</v-btn>
      <v-alert v-if="error" type="error">{{ error }}</v-alert>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

import { userStore } from "@/plugins/vuex";

export default Vue.extend({
  name: "Login",

  data: () => ({
    username: "",
    password: "",
    passwordConfirm: "",
    registration: false,
    error: "",
  }),

  methods: {
    submit() {
      if (!this.registration) {
        console.log("login");
        userStore
          .dispatch("login", {
            username: this.username,
            password: this.password,
          })
          .then((_) => {
            this.$router.go(0);
          })
          .catch((err) => {
            if (err.error) {
              this.error = err.error;
            } else {
              this.error = "An unknown error occured";
            }
          });
      } else {
        console.log("register");

        if (this.password !== this.passwordConfirm) {
          return (this.error = "Password and password confirmation must match");
        }

        userStore
          .dispatch("register", {
            username: this.username,
            password: this.password,
          })
          .then((_) => {
            this.$router.go(0);
          })
          .catch((err) => {
            if (err.error) {
              this.error = err.error;
            } else {
              this.error = "An unknown error occured";
            }
          });
      }
    },
    toggleRegister() {
      this.registration = !this.registration;
      this.error = "";
      this.username = "";
      this.password = "";
      this.passwordConfirm = "";
    },
  },
});
</script>
