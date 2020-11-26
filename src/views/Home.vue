<template>
  <v-container>
    <h1>Home</h1>
    <LoginForm v-if="!isLoggedIn()" />
    <h2 v-else>Authorized</h2>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

import { userStore } from "@/plugins/vuex";
import LoginForm from "@/components/Login.vue";

export default Vue.extend({
  name: "Home",

  metaInfo: {
    title: "Home",
  },

  components: {
    LoginForm,
  },

  methods: {
    isLoggedIn() {
      return userStore.getters.isLoggedIn;
    },
  },
});
</script>
