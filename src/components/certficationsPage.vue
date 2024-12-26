<template>
  <div class="classes-container">
    <router-link to="/" class="back-button">
      ← back
    </router-link>
    <h1>
      <span class="name1">Certifications/Licenses</span>
      <span class="heart1">♡</span>
    </h1>
    <div class="glow-border"></div>
    
    <!-- CITI Certification Section -->
    <div class="Sub-Classes">
      <div class="cert-header" @click="toggleCITI">
        <h2 class="Sub-Classes1">Social and Behavioral Research Certification</h2>
        <span class="toggle-icon" :class="{ 'rotate': isOpenCITI }">▶</span>
      </div>
      <transition
        name="slide-fade"
        @enter="startTransition"
        @leave="endTransition"
      >
        <div class="content" v-show="isOpenCITI" :class="{ 'content-open': isOpenCITI }">
          <ul class="classes-list">
            <span class="program-date">CITI Program (issued Mar 2023 • Expires Mar 2026)</span>
          </ul>
          <p>
            • Credential ID 52715192
          </p>
          <div class="imageBox">
            <img class="image" src="../assets/certificate.png" alt="CITI Program Certification" />
          </div>
        </div>
      </transition>
    </div>

    <!-- BLS Certification Section -->
    <div class="Sub-Classes">
      <div class="cert-header" @click="toggleBLS">
        <h2 class="Sub-Classes1">Basic Life Support</h2>
        <span class="toggle-icon" :class="{ 'rotate': isOpenBLS }">▶</span>
      </div>
      <transition
        name="slide-fade"
        @enter="startTransition"
        @leave="endTransition"
      >
        <div class="content" v-show="isOpenBLS" :class="{ 'content-open': isOpenBLS }">
          <ul class="classes-list">
            <span class="program-date">BLS Program (issued July 2024)</span>
          </ul>
          <p>
            • Credential ID 255411519830
          </p>
          <div class="imageBox">
            <img class="image" src="../assets/BLS.png" alt="BLS Program Certification" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'certificationsPage',
  data() {
    return {
      isOpenCITI: false,
      isOpenBLS: false
    }
  },
  methods: {
    toggleCITI() {
      this.isOpenCITI = !this.isOpenCITI;
    },
    toggleBLS() {
      this.isOpenBLS = !this.isOpenBLS;
    },
    startTransition(el) {
      el.style.height = 'auto';
      const height = el.offsetHeight;
      el.style.height = '0px';
      el.offsetHeight; // force reflow
      el.style.height = height + 'px';
    },
    endTransition(el) {
      el.style.height = '0px';
    }
  }
}
</script>

<style scoped>
.classes-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
}

.name1 {
  color: pink;
  margin-left: 400px;
  font-weight: bold;
  font-size: 1.2em;
  letter-spacing: 2px;
  text-shadow: 0 0 10px pink,
               0 0 20px pink,
               0 0 30px pink;
}

.heart1 {
  color: pink;
  font-size: 1em;
  margin-left: 10px;
}

.glow-border {
  background: black;
  border-radius: 10px;
  padding: 20px;
  min-height: 400px;
  margin-bottom: -450px;
}

.Sub-Classes {
  margin: 30px 0;
  border: 1px solid rgba(255, 192, 203, 0.3);
  padding: 20px;
  border-radius: 8px;
  background: linear-gradient(45deg, rgba(255,192,203,0.1), rgba(255,192,203,0.05));
  animation: borderGlow 0.8s ease-in-out infinite alternate;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.Sub-Classes1 {
  color: pink;
  font-size: 1.2em;
  letter-spacing: 2px;
  text-shadow: 0 0 10px pink,
               0 0 20px pink,
               0 0 30px pink;
  margin-bottom: 15px;
}

.content {
  color: rgba(255, 192, 203, 0.7);
  font-size: 0.9em;
  line-height: 1.6;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  height: 0;
  transform: translateY(-20px);
}

.content-open {
  opacity: 1;
  height: auto !important;
  padding: 20px 0;
  transform: translateY(0);
}

.classes-list {
  list-style-type: none;
  padding: 0;
}

.classes-list li {
  margin: 10px 0;
  padding-left: 20px;
  position: relative;
}

.classes-list li::before {
  content: '♡';
  position: absolute;
  left: 0;
  color: pink;
  opacity: 0.7;
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

.imageBox {
  margin-left: 10px;
}

.image {
  max-width: 50%;
  height: auto;
  display: block;
  margin: 0 auto;
  margin-right: 500px;
}

.cert-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.toggle-icon {
  color: pink;
  font-size: 1.2em;
  margin-right: 10px;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.toggle-icon.rotate {
  transform: rotate(90deg);
}


.content {
  transition: height 0.3s ease-out;
  overflow: hidden;
}

.cert-header:hover {
  transform: translateX(10px);
  transition: transform 0.3s ease;
}

.cert-header:hover .toggle-icon {
  color: rgba(255, 192, 203, 0.5);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
}

.slide-fade-enter-active {
  animation: slideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-leave-active {
  animation: slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.program-date {
  display: block;
  margin-top: -40px;
  margin-bottom: 15px;
  color: rgba(255, 192, 203, 0.8);
}


</style>
