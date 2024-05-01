<template>
    <div id="cont">
        <div v-for="char, i in 'Coming&nbsp;Soon!'" :key="i" class="comingSoon">{{ char }}</div>
    </div>
    <router-link to="/discord" id="discord">
        <img src="../../assets/discord.png">
    </router-link>
</template>

<style scoped>
@import url("./styles.css");
</style>