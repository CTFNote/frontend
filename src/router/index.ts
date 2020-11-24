import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Settings from "@/views/Settings.vue";
import Challenges from "@/views/Challenges.vue";
import Challenge from "@/views/Challenge.vue";
import CTF from "@/views/CTF.vue";
import TeamNotepad from "@/views/TeamNotepad.vue";
import Team from "@/views/Team.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/user/settings",
    name: "userSettings",
    component: Settings,
  },
  {
    path: "/challenges",
    name: "challenges",
    component: Challenges,
  },
  {
    path: "/challenges/:challengeID",
    name: "challenge",
    component: Challenge,
  },
  {
    path: "/ctf",
    name: "CTF",
    component: CTF,
  },
  {
    path: "/team/notepad",
    name: "teamNotepad",
    component: TeamNotepad,
  },
  {
    path: "/team",
    name: "team",
    component: Team
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
