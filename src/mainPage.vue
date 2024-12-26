<template>
  <div class="app">
    <h1>
      <span class="name">ILAANA</span>
      <span class="heart">♡</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'MainPage'
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
  margin-right: 50%;
}

.name {
  color: pink;
  font-weight: bold;
  font-size: 1.2em;
  letter-spacing: 2px;
  text-shadow: 0 0 10px pink,
               0 0 20px pink,
               0 0 30px pink;
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px pink,
                 0 0 20px pink,
                 0 0 30px pink;
  }
  to {
    text-shadow: 0 0 20px pink,
                 0 0 30px pink,
                 0 0 40px pink;
  }
}

.heart {
  color: pink;
  font-size: 2em;
}
</style>
