import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Settings from "@/views/Settings.vue";
import Challenges from "@/views/Challenges.vue";
import Challenge from "@/views/Challenge.vue";
import CTF from "@/views/CTF.vue";
import TeamNotepad from "@/views/TeamNotepad.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/challenges",
    name: "Challenges",
    component: Challenges,
  },
  {
    path: "/challenges/:challengeID",
    name: "Challenges",
    component: Challenge,
  },
  {
    path: "/ctf",
    name: "CTF",
    component: CTF,
  },
  {
    path: "/team/notepad",
    name: "TeamNotepad",
    component: TeamNotepad,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
