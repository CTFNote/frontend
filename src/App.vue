<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      clipped
      permanent
      app
    >
      <v-list dense>
        <v-list-item :to="'/'">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="'/team/notes'">
          <v-list-item-icon>
            <v-icon> mdi-book-open-variant </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Team notepad</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item :to="'/challenges'">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Challenges</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item :to="'/about'">
          <v-list-item-icon>
            <v-icon>mdi-help-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Help and about</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="'/settings'">
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left dark>
      <v-app-bar-nav-icon @click="mini = !mini"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer />
      <v-btn outlined text>Select CTF</v-btn>
      <v-avatar><v-icon>mdi-account-circle</v-icon></v-avatar>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    drawer: true,
    items: [
      [
        { title: "Home", icon: "mdi-home", to: "/" },
        { title: "About", icon: "mdi-account", to: "/about" },
        { title: "Challenges", icon: "mdi-view-dashboard", to: "/challenges" },
        { title: "Settings", icon: "mdi-cog", to: "/ctf/settings" },
      ],
      [],
    ],
    mini: true,
    ctfs: ["test 1", "UiACTF", "HTBCTF", "Archived"],
  }),
});
</script>
