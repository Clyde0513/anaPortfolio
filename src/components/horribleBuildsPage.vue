<template>
  <div class="builds-container">
    <router-link to="/" class="back-button">
      ← back
    </router-link>
    <h1>
      <span class="name">Horrible Builds</span>
      <span class="heart">♡</span>
    </h1>
    <div class="builds-box">
      <div class="glow-border">
        <div class="build-section">
          <h2 class="section-title">Genshin Impact Cursed Builds</h2>
          <div class="build-grid">
            <div class="build-card">
              <h3>DPS Barbara</h3>
              <p>The healer becomes the dealer</p>
              <ul class="build-details">
                <li>Main Stats: ATK% / Hydro DMG / Crit Rate</li>
                <li>Weapon: Lost Prayer to the Sacred Winds</li>
                <li>Artifacts: 4pc Heart of Depth</li>
              </ul>
            </div>
            <div class="build-card">
              <h3>Physical Zhongli</h3>
              <p>Who needs shields when you have crescent pike?</p>
              <ul class="build-details">
                <li>Main Stats: ATK% / Physical DMG / Crit Rate</li>
                <li>Weapon: Crescent Pike</li>
                <li>Artifacts: 2pc Pale Flame + 2pc Bloodstained</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'HorribleBuildsPage'
}
</script>

<style scoped>
.builds-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
}

.name {
  color: pink;
  font-weight: bold;
  font-size: 1.2em;
  letter-spacing: 2px;
  text-shadow: 0 0 10px pink,
               0 0 20px pink,
               0 0 30px pink;
}

.heart {
  color: pink;
  font-size: 2em;
  margin-left: 10px;
}

.builds-box {
  margin-top: 30px;
  padding: 3px;
  border-radius: 12px;
  background: linear-gradient(45deg, rgba(255,192,203,0.5), rgba(255,192,203,0.2));
  animation: borderGlow 0.4s ease-in-out infinite alternate;
}

.glow-border {
  background: black;
  border-radius: 10px;
  padding: 20px;
  min-height: 400px;
}

.content {
  color: rgba(255, 192, 203, 0.7);
  font-size: 0.9em;
  line-height: 1.6;
}

@keyframes borderGlow {
  from {
    box-shadow: 0 0 10px rgba(255,192,203,0.3),
                inset 0 0 10px rgba(255,192,203,0.3);
  }
  to {
    box-shadow: 0 0 20px rgba(255,192,203,0.5),
                inset 0 0 20px rgba(255,192,203,0.5);
  }
}

.back-button {
  color: rgba(255, 192, 203, 0.7);
  text-decoration: none;
  font-size: 0.9em;
  margin-bottom: 20px;
  display: inline-block;
  transition: color 0.3s ease;
}

.back-button:hover {
  color: pink;
}

.build-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.build-card {
  background: rgba(255,192,203,0.1);
  border-radius: 8px;
  padding: 15px;
  border: 1px solid rgba(255,192,203,0.3);
}

.build-card h3 {
  color: pink;
  margin-bottom: 10px;
  text-shadow: 0 0 10px pink;
}

.build-details {
  color: rgba(255,192,203,0.7);
  list-style-type: none;
  padding: 0;
}

.build-details li {
  margin: 8px 0;
  font-size: 0.9em;
}

.section-title {
  color: pink;
  font-size: 1.2em;
  letter-spacing: 2px;
  text-shadow: 0 0 10px pink,
               0 0 20px pink,
               0 0 30px pink;
}
</style>
