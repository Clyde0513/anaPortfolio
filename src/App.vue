<template>
  <router-view></router-view>
</template>

<script>
import MainPage from './components/mainPage.vue'

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: black;
  color: white;
}

.app {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
}

h1 {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.name {
  color: pink;
  font-weight: bold;
  font-size: 2.5em;
  letter-spacing: 2px;
}

.heart {
  color: pink;
  font-size: 2em;
}
</style>
