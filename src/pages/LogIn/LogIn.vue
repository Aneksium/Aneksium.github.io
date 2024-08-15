<template>
    <div class="container">
        <div class="left">
            <div class="form-container">
                <div class="form-header">
                    <img src="../../assets/logo.png" alt="">
                    <span>Aneksium</span>
                </div>
                <div class="form-title">
                    <h2>Log into your account.</h2>
                    <span>Don't have an account? <router-link to="/register">Create an account.</router-link></span>
                </div>
                <form @submit.prevent="handleLogin()">
                    <div class="input-container">
                        <img src="../../assets/email.png">
                            <input type="email" placeholder="Email" v-model="email">
                    </div>
                    <div class="input-container">
                        <img src="../../assets/key.png">
                        <input type="password" placeholder="Password" v-model="password">
                    </div>
                    <input type="submit" value="SIGN IN">
                </form>
            </div>
        </div>
        <div class="right">

        </div>
    </div>
</template>

<script lang="ts">
import { State } from '@/store';
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import PUBLIC_PATHS from '@/constants/publicPaths';

export default defineComponent({
  name: "SignUp",

  setup() {
    const store = useStore<State>();
    const router = useRouter();

    const email = ref("");
    const password = ref("");

    const handleLogin= async () => {

      const userData = {
        email: email.value,
        password: password.value,
      };

      try {
        await store.dispatch("login", userData);
        router.push(PUBLIC_PATHS.HOME);
      } catch (error) {
        console.error(error);
      }
    };

    return {
      email,
      password,
      handleLogin,
    };
  },
});
</script>