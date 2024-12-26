<template>
  <div class="classes-container">
    <router-link to="/" class="back-button">
      ← back
    </router-link>
    <h1>
      <span class="name">Certifications/Licenses</span>
      <span class="heart1">♡</span>
    </h1>
      <div class="glow-border"></div>
        <div class="Sub-Classes">
          <h2 class="Sub-Classes1">Social and Behavioral Research Certification</h2>
          <div class="content">
            <ul class="classes-list">
              CITI Program (issued Mar 2023 • Expires Mar 2026)</ul>
            <p>
              • Credential ID 52715192
            </p>
            <div class="imageBox">
              <img class = "image" src="../assets/certificate.png" alt="CITI Program Certification" />
            </div>
          </div>
        </div>

        <div class="Sub-Classes">
          <h2 class="Sub-Classes1">Basic Life Support</h2>
          <div class="content">
            <ul class="classes-list">
              BLS Program (issued July 2024)</ul>
            <p>
              • Credential ID 255411519830
            </p>
            <div class="imageBox">
              <img class = "image" src="../assets/BLS.png" alt="BLS Program Certification" />
            </div>
          </div>
        </div>

        
      
     
    </div>
 
 
</template>

<script>
export default {
  name: 'certificationsPage'
}
</script>

<style scoped>
.classes-container {
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

</style>
