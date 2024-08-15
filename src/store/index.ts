import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import auth from './modules/auth';
import { User } from '@/types';

export interface State {
  user: User | null;
  status: string;
}

const store = new Vuex.Store<State>({
  modules: {
    auth
  },
  plugins: [createPersistedState()]
});

export default store