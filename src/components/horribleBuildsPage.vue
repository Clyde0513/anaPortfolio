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
            <div v-for="(build, index) in builds" :key="index" class="build-card">
              <div class="build-header" @click="toggleBuild(index)">
                <h3>{{ build.name }}</h3>
                <span class="toggle-icon">{{ currentOpenBuild === index ? '−' : '+' }}</span>
              </div>    
              <transition name="fade">
                <div v-show="currentOpenBuild === index" class= "build-content">
                  <p class="build-tagline">{{ build.tagline }}</p>
                  <ul class="build-details">
                    <li v-for="(detail, dIndex) in build.details" 
                        :key="dIndex">{{ detail }}</li>
                  </ul>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'HorribleBuildsPage',
  data() {
    return {
      currentOpenBuild: -1, // -1 means no build is open
      builds: [
        {
          name: 'DPS Barbara',
          tagline: 'The healer becomes the dealer',
          details: [
            'Main Stats: ATK% / Hydro DMG / Crit Rate',
            'Weapon: Lost Prayer to the Sacred Winds',
            'Artifacts: 4pc Heart of Depth',
            'Strategy: Normal attack spam with occasional E for Hydro application'
          ]
        },
        {
          name: 'Physical Zhongli',
          tagline: 'Who needs shields when you have crescent pike?',
          details: [
            'Main Stats: ATK% / Physical DMG / Crit Rate',
            'Weapon: Crescent Pike',
            'Artifacts: 2pc Pale Flame + 2pc Bloodstained',
            'Strategy: Auto-attack spam and only use E for the pillar resonance'
          ]
        }
      ]
    }
  },
  methods: {
    toggleBuild(index) {
      // If clicking the currently open build, close it
      // Otherwise, open the clicked build
      this.currentOpenBuild = this.currentOpenBuild === index ? -1 : index;
    }
  }
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
    color: pink;
    font-weight: bold;
    text-decoration: none;
    margin-left: 20px;
    display: inline-block;
    animation: popIn 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}


.back-button:hover {
  color: pink;
}

.build-grid {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.build-card {
  background: rgba(255,192,203,0.1);
  border-radius: 8px;
  border: 1px solid rgba(255,192,203,0.3);
  transition: all 0.3s ease;
  width: 100%;
}

.build-card:hover {
  border-color: rgba(255,192,203,0.6);
  box-shadow: 0 0 10px rgba(255,192,203,0.2);
}

.build-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px;
}

.toggle-icon {
  color: pink;
  font-size: 1.5em;
  font-weight: bold;
}

.build-content {
  padding: 0 10px 10px;
}

.build-tagline {
  color: rgba(255,192,203,0.9);
  font-style: italic;
  margin-bottom: 15px;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
  max-height: 300px;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
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
