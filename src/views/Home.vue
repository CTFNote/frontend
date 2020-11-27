<template>
  <v-container>
    <h1>Home</h1>
    <AuthForm v-if="!isLoggedIn()" />
    <h2 v-else>Authorized</h2>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

import { userStore } from "@/plugins/vuex";
import AuthForm from "@/components/Auth.vue";

export default Vue.extend({
  name: "Home",

  metaInfo: {
    title: "Home",
  },

  components: {
    AuthForm,
  },

  methods: {
    isLoggedIn() {
      return userStore.getters.isLoggedIn;
    },
  },
});
</script>
