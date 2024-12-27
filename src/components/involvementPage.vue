<template>
  <div class="particles-container">
      <div v-for="particle in particles" 
           :key="particle.id" 
           class="particle"
           :style="particle.style">
      </div>
    </div>
  <div class="involvement-container">
    <router-link to="/" class="back-button">← back</router-link>
    <h1>
      <span class="name">Community Involvement</span>
      <span class="heart">♡</span>
    </h1>
    <div class="involvement-box">
      <div class="glow-border">
        <div class="involvement-section">
          <h2 class="section-title">Activities & Contributions</h2>
          <div class="activity-grid">
            <div v-for="(activity, index) in activities" :key="index" class="activity-card">
              <div class="activity-header" @click="toggleActivity(index)">
                <h3 class="name1">{{ activity.name }}</h3>
                <span class="toggle-icon">{{ currentOpenActivity === index ? '−' : '+' }}</span>
              </div>
              <transition 
                name="dropdown"
                @enter="startTransition"
                @leave="endTransition">
                <div v-show="currentOpenActivity === index" class="activity-content">
                  <p class="activity-description">{{ activity.description }}</p>
                  <ul class="activity-details">
                    <li v-for="(detail, dIndex) in activity.details" 
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
  name: 'InvolvementPage',
  data() {
    
    return {
      currentOpenActivity: -1,
      activities: [
        {
          name: 'Sguo Events Director',
          description: 'Active member for ucla\'s society and genetics undergraduate organization',
          details: [
            'Planned events for 100+ attendees',
            'Arranged logistics and catering',
            'Coordinated with guest speakers and vendors',
          ]
        },
        {
          name: 'LWU Director of Projects and Events',
          description: 'Brainstormed, lead, and organized projects and events for the organization',
          details: [
            'Lead summer camps for 50+ students',
            'Outreached to local universities and companies for partnerships',
            'And more!',
          ]
        }
      ],
      particles: [],
      particleCount: 250
    }
    
  },
  mounted() {
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        id: i,
        style: {
          left: Math.random() * 100 + 'vw',
          top: Math.random() * 100 + 'vh',
          animationDelay: 1,
          animationDuration: 5 + Math.random() * 10 + 's'
        }
      })
    }
  },
  methods: {
    toggleActivity(index) {
      if (this.currentOpenActivity === index) {
        this.currentOpenActivity = -1;
      } else {
        this.currentOpenActivity = index;
      }
    },
    startTransition(el) {
      el.style.height = 'auto';
      const height = el.clientHeight + 'px';
      el.style.height = '0px';
      // Force browser to recognize the change
      el.offsetHeight;
      el.style.height = height;
    },
    endTransition(el) {
      el.style.height = el.clientHeight + 'px';
      // Force browser to recognize the change
      el.offsetHeight;
      el.style.height = '0px';
    }
  }
}
</script>

<style scoped>

.back-button {
    color: pink;
    font-weight: bold;
    text-decoration: none;
    margin-left: 20px;
    display: inline-block;
    animation: popIn 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

.toggle-icon{
    color: pink;
    font-size: 1.5em;
    font-weight: bold;
    margin: 0;
}

.name {
    color: pink;
    font-weight: bold;
    font-size: 1.2em;
    letter-spacing: 2px;
    text-shadow: 0 0 10px pink,
                 0 0 20px pink,
                 0 0 30px pink;
    display: inline-block;
    animation: popIn 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

.heart {
    display: inline-block;
    animation: heartBeat 1.2s ease-in-out infinite;
}

.name1 {
    margin: 0;
    color: pink;
    font-weight: bold;
    font-size: 1.2em;
}

.section-title{
    color: pink;
    font-weight: bold;
    margin-left: 20px;
    font-size: 1.2em;
    letter-spacing: 2px;
    text-shadow: 0 0 10px pink,
                 0 0 20px pink,
                 0 0 30px pink;
}

.involvement-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
}

.involvement-box {
  margin-top: 30px;
  padding: 3px;
  border-radius: 12px;
  background: linear-gradient(45deg, rgba(255,192,203,0.5), rgba(255,192,203,0.2));
  animation: borderGlow 0.5s ease-in-out infinite alternate;
}

.glow-border {
  background: black;
  border-radius: 10px;
  padding: 20px;
  min-height: 400px;
  animation: borderGlow 0.4s ease-in-out infinite alternate;

}

.activity-grid {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.activity-card {
  background: rgba(255,192,203,0.1);
  border-radius: 8px;
  border: 1px solid rgba(255,192,203,0.3);
  transition: all 0.3s ease;
  width: 100%;
  opacity: 1;
  min-height: auto;
  margin: 0;
  animation: none;
}

.activity-card:hover {
  border-color: rgba(255,192,203,0.6);
  box-shadow: 0 0 10px rgba(255,192,203,0.2);
  transform: none;
}

.activity-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  margin-right: 0;
}

.activity-content {
  padding: 0 15px 15px;
  animation: fadeIn 0.3s ease-out;
  overflow: hidden;
  transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.activity-description {
  color: rgba(255,192,203,0.9);
  font-style: italic;
  margin-bottom: 15px;
  position: relative;
  animation: shimmer 2s linear infinite;
  background: linear-gradient(
    90deg,
    rgba(255, 192, 203, 0.9) 0%,
    rgba(255, 192, 203, 0.6) 50%,
    rgba(255, 192, 203, 0.9) 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  height: 0;
  transform: translateY(-10px);
}

.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.activity-details {
  transform-origin: top;
  animation: scaleIn 0.3s ease-out;
}

@keyframes borderGlow {
  from {
    border-color: rgba(255, 192, 203, 0.3);
    box-shadow: 0 0 10px rgba(255, 192, 203, 0.3);
  }
  to {
    border-color: rgba(255, 192, 203, 0.6);
    box-shadow: 0 0 20px rgba(255, 192, 203, 0.6);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes heartBeat {
  0% { transform: scale(1); }
  14% { transform: scale(1.1); }
  28% { transform: scale(1); }
  42% { transform: scale(1.1); }
  70% { transform: scale(1); }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  0% { background-position: 0% 0; }
  100% { background-position: 200% 0; }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scaleY(0);
  }
  to {
    opacity: 1;
    transform: scaleY(1);
  }
}

</style>
