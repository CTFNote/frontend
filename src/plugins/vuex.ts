import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const api = axios.create({
  baseURL: "https://localhost:8443/api/v1", // TODO: Change this to be dynamically configured somehow
  withCredentials: true
});

const userStore = new Vuex.Store({
  state: {
    status: "",
    jwtToken: localStorage.getItem("jwtToken") || "",
    user: {},
  },
  mutations: {
    authenticating(state) {
      state.status = "loading";
    },
    authSucceeded(state, { user, token }) {
      state.status = "success";
      state.jwtToken = token;
      state.user = user;
    },
    authErrored(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.jwtToken = "";
    },
  },
  actions: {
    login({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit("authenticating");
        api
          .post("/auth/login", data)
          .then((res) => {
            const jwtToken = res.data.jwtToken;
            const user = res.data.user;

            localStorage.setItem("jwtToken", jwtToken);
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${jwtToken}`;

            commit("authSucceeded", { user, token: jwtToken });

            resolve(res);
          })
          .catch((err) => {
            commit("authErrored");
            localStorage.removeItem("jwtToken");
            if (err.response) {
              if (err.response.data.errors) {
                if (err.response.data.errors.details) {
                  reject({ error: err.response.data.errors.details });
                }
                if (err.response.data.errors.errorcode) {
                  switch (err.response.data.errors.errorcode) {
                    case "error_invalid_credentials":
                      reject({ error: "Username or password is incorrect" });
                  }
                }
              }
            }
            reject(err);
          });
      });
    },
    register({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        api
          .post("/auth/register", data)
          .then((res) => {
            const jwtToken = res.data.jwtToken;
            const user = res.data.user;

            localStorage.setItem("jwtToken", jwtToken);
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${jwtToken}`;

            commit("authSucceeded", { user, token: jwtToken });

            resolve(res);
          })
          .catch((err) => {
            commit("authErrored");
            localStorage.removeItem("jwtToken");
            if (err.response) {
              if (err.response.data.errors) {
                if (err.response.data.errors.details) {
                  reject({ error: err.response.data.errors.details });
                }
                if (err.response.data.errors.errorcode) {
                  switch (err.response.data.errors.errorcode) {
                    case "error_user_exists":
                      reject({ error: "Username is already in use" });
                  }
                }
              }
            }
            reject(err);
          });
      });
    },
    async logout({ commit }) {
      localStorage.removeItem("jwtToken");
      delete axios.defaults.headers.common["Authorization"];
      await api
        .post("/auth/logout")
        .catch((err) => console.warn(`Error while logging out: ${err}`))
        .finally(() => commit("logout"));
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.jwtToken,
    authStatus: (state) => state.status,
  },
});

export { userStore };
