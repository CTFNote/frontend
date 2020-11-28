<template>
  <v-container>
    <h1>Home</h1>
    <h2>{{ isLoggedIn() ? "Authorized" : "Not authorized" }}</h2>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

import { userStore } from "@/plugins/vuex";

export default Vue.extend({
  name: "Home",

  metaInfo: {
    title: "Home",
  },

  methods: {
    isLoggedIn() {
      return userStore.getters.isLoggedIn;
    },
  },
});
</script>
