import axios from 'axios';
import { ActionContext, ActionTree } from 'vuex';
import { MutationTree } from 'vuex';
import { State } from '..';
import { User } from '@/types';
import { MutationTypes } from './mutation-types';
import BACK_END_ENDPOINTS from '@/constants/backendPaths';

const state: State = {
  user: null,
  status: '',
};

const getters = {
  isAuthenticated: (state: State) => !!state.user?.token,
  authStatus: (state: State) => state.status,
  currentUser: (state: State) => state.user,
};

const actions: ActionTree<State, State> = {
  async login({ commit }: ActionContext<State, State>, userData: { email: string; password: string }) {
    commit(MutationTypes.AUTH_REQUEST);
    try {
      const response = await axios.post(BACK_END_ENDPOINTS.LOGIN, userData);
      const token = response.data.token;
      const username = response.data.name;
      const email = userData.email;

      const user: User = { username, email, token };

      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      commit(MutationTypes.AUTH_SUCCESS, user);
    } catch (error) {
      commit(MutationTypes.AUTH_ERROR);
      localStorage.removeItem('token');
      throw error;
    }
  },

  async logout({ commit }: ActionContext<State, State>) {
    commit(MutationTypes.LOGOUT);
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  },

  async register({ commit }: ActionContext<State, State>, userData: { username: string; email: string; password: string }) {
    commit(MutationTypes.AUTH_REQUEST);
    try {
      await axios.post(BACK_END_ENDPOINTS.REGISTER, userData);
      const user: User = { username: userData.username, email: userData.email, token: '' };
      commit(MutationTypes.AUTH_SUCCESS, user);
    } catch (error) {
      commit(MutationTypes.AUTH_ERROR);
      throw error;
    }
  }
};

const mutations: MutationTree<State> = {
  [MutationTypes.AUTH_REQUEST](state) {
    state.status = 'loading';
  },
  [MutationTypes.AUTH_SUCCESS](state, user: User) {
    state.status = 'success';
    state.user = user;
  },
  [MutationTypes.AUTH_ERROR](state) {
    state.status = 'error';
    state.user = null;
  },
  [MutationTypes.LOGOUT](state) {
    state.status = '';
    state.user = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
