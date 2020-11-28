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
        <v-list-item :to="{ name: 'home' }">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="isLoggedIn()" :to="{ name: 'teamNotepad' }">
          <v-list-item-icon>
            <v-icon> mdi-book-open-variant </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Team notepad</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="isLoggedIn()" :to="{ name: 'team' }">
          <v-list-item-icon>
            <v-icon> mdi-account-group </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Team notepad</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider v-if="isLoggedIn()"></v-divider>

        <v-list-item v-if="isLoggedIn()" :to="{ name: 'CTF' }">
          <v-list-item-icon>
            <v-icon>mdi-font-awesome</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>CTF</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="isLoggedIn()" :to="{ name: 'challenges' }">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Challenges</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item :to="{ name: 'about' }">
          <v-list-item-icon>
            <v-icon>mdi-help-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Help and about</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{ name: 'userSettings' }">
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
      <v-spacer />
      <v-btn v-if="isLoggedIn()" outlined text @click.prevent="logOut()"
        >Log out</v-btn
      >

      <ProfilePicture v-if="isLoggedIn()" />
      <v-btn v-else outlined text @click.stop="loginDialog = true"
        >Log in</v-btn
      >
      <v-dialog v-model="loginDialog">
        <v-card>
          <v-card-title class="headline"> Log in or register </v-card-title>

          <AuthForm />

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text @click="loginDialog = false"> Cancel </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

import { userStore } from "@/plugins/vuex";
import ProfilePicture from "@/components/ProfilePicture.vue";
import AuthForm from "@/components/Auth.vue";

export default Vue.extend({
  name: "App",
  components: {
    ProfilePicture,
    AuthForm,
  },

  data: () => ({
    drawer: true,
    mini: true,
    loginDialog: false,
  }),

  methods: {
    isLoggedIn() {
      return userStore.getters.isLoggedIn;
    },
    logOut() {
      userStore.dispatch("logout").then(() => {
        return this.$router.go(0);
      });
    },
  },

  metaInfo: {
    titleTemplate: "%s | CTFNote",
  },
});
</script>
