import { createStore } from 'vuex';
import apiClient from '@/services/ApiServices';

export default createStore({
  state: {
    scCategories: [],
    scType: [],
    scConcern: [],
    formSubmission: {},
  },
  getters: {
    SET_SC_CATEGORIES(state, payload) {
      state.scCategories = payload;
    },
    SET_SC_TYPE(state, payload) {
      state.scType = payload;
    },
    SET_SC_CONCERN(state, payload) {
      state.scConcern = payload;
    },
    SET_FORM_SUBMISSION(state, payload) {
      state.formSubmission = payload;
    },
  },
  actions: {
    async loadScCategories({ commit }) {
      try {
        const {
          data: { data },
        } = await apiClient.get('options/categories');
        commit('SET_SC_CATEGORIES', data);
      } catch (error) {
        console.log(error);
      }
    },
    async loadScType({ commit }) {
      try {
        const {
          data: { data },
        } = await apiClient.get('options/skintype');
        commit('SET_SC_TYPE', data);
      } catch (error) {
        console.log(error);
      }
    },
    async loadScConcern({ commit }) {
      try {
        const {
          data: { data },
        } = await apiClient.get('options/concern');
        commit('SET_SC_CONCERN', data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {},
  modules: {},
});
