<template>
  <v-container>
    <v-form ref="form" @submit.prevent="login">
      <v-text-field v-model="username" label="Username"></v-text-field>
      <v-text-field
        v-model="password"
        type="password"
        label="Password"
      ></v-text-field>
      <v-btn type="submit" @click.prevent="login">Log in</v-btn>
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
    error: "",
  }),

  methods: {
    login() {
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
    },
  },
});
</script>
