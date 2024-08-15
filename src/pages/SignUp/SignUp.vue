<template>
  <div class="container">
    <div class="left">
      <div class="form-container">
        <div class="form-header">
          <img src="../../assets/logo.png" alt="" />
          <span>Aneksium</span>
        </div>
        <div class="form-title">
          <h2>Create a new account.</h2>
          <span
            >Already got an account?
            <router-link to="/login">Log in.</router-link></span
          >
        </div>
        <form @submit.prevent="handleRegister()">
          <div class="double-input">
            <div class="input-container">
              <img src="../../assets/person.png" />
              <input type="text" placeholder="Name" v-model="name" />
            </div>
            <div class="input-container">
              <img src="../../assets/person.png" />
              <input type="text" placeholder="Last Name" v-model="lastName" />
            </div>
          </div>
          <div class="input-container">
            <img src="../../assets/email.png" />
            <input type="email" placeholder="Email" v-model="email" />
          </div>
          <div class="input-container">
            <img src="../../assets/key.png" />
            <input type="password" placeholder="Password" v-model="password" />
          </div>
          <div class="input-container">
            <img src="../../assets/key.png" />
            <input
              type="password"
              placeholder="Confirm Password"
              v-model="password_2"
            />
          </div>
          <input type="submit" value="SIGN UP" />
        </form>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script lang="ts">
import { State } from "@/store";

import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "SignUp",

  setup() {
    const store = useStore<State>();
    const router = useRouter();

    const name = ref("");
    const lastName = ref("");
    const email = ref("");
    const password = ref("");
    const password_2 = ref("");

    const handleRegister = async () => {
      if (password.value !== password_2.value) {
        alert("Passwords do not match");
        return;
      }

      const userData = {
        username: name.value + " " + lastName.value,
        email: email.value,
        password: password.value,
      };

      try {
        await store.dispatch("register", userData);
        router.push("/login");
      } catch (error) {
        console.error(error);
      }
    };

    return {
      name,
      lastName,
      email,
      password,
      password_2,
      handleRegister,
    };
  },
});
</script>

<style scoped>
@import url("./styles.css");
</style>
