<template>
    <div id="cont">
        <div v-for="char, i in 'Coming&nbsp;Soon!'" :key="i" class="comingSoon">{{ char }}</div>
    </div>

</template>

<style scoped>
@import url("./styles.css");
</style>