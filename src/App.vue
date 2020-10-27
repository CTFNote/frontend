<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      clipped
      permanent
      app
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left dark>
      <v-app-bar-nav-icon @click="mini = !mini"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer />
      <v-autocomplete
        filled
        dense
        outlined
        label="Select a CTF"
        :items="ctfs"
        hide-details
        style="max-width: 300px"
      />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<!-- <v-btn>
    <router-link to="/">Home</router-link>
  </v-btn>
  <v-btn>
    <router-link to="/about">About</router-link>
  </v-btn> -->

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    drawer: true,
    items: [
      { title: "Home", icon: "mdi-home-city", to: "/" },
      { title: "About", icon: "mdi-account", to: "/about" },
    ],
    mini: true,
    ctfs: ["test 1", "UiACTF", "HTBCTF", "Archived"],
  }),
});
</script>
