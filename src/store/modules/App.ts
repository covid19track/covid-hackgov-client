import { ActionContext } from "vuex";

export default {
  namespaced: true,
  state: { token: "", HTTP: undefined },
  getters: {
    token: (
      state: { token: string; HTTP: any },
      getters: { token: Function; HTTP: Function }
    ) => {
      getters;
      return state.token;
    },
    HTTP: (
      state: { token: string; HTTP: any },
      getters: { token: Function; HTTP: Function }
    ) => {
      getters;
      return state.HTTP;
    },
  },
  mutations: {
    setToken(state: { token: string; HTTP: any }, payload: { token: string }) {
      state.token = payload.token;
    },
    setHTTP(state: { token: string; HTTP: any }, payload: { HTTP: any }) {
      state.HTTP = payload.HTTP;
    },
  },
  actions: {
    setToken: (
      context: ActionContext<
        { token: string; HTTP: any },
        { token: string; HTTP: any }
      >,
      payload: { token: string }
    ) => context.commit("setToken", payload),
    setHTTP: (
      context: ActionContext<
        { token: string; HTTP: any },
        { token: string; HTTP: any }
      >,
      payload: { HTTP: any }
    ) => context.commit("setHTTP", payload),
  },
};
